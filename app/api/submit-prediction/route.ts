import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Rate limiting map (in production, use Redis or similar)
const submissionAttempts = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT = 5; // Max submissions per hour
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in ms

// Input sanitization
function sanitizeInput(input: string): string {
    return input
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        .replace(/<[^>]*>/g, '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
        .trim();
}

function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function checkRateLimit(ip: string): boolean {
    const now = Date.now();
    const attempt = submissionAttempts.get(ip);

    if (!attempt || now > attempt.resetTime) {
        submissionAttempts.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
        return true;
    }

    if (attempt.count >= RATE_LIMIT) {
        return false;
    }

    attempt.count++;
    return true;
}

export async function POST(request: NextRequest) {
    try {
        // Get client IP for rate limiting
        const ip = request.headers.get('x-forwarded-for') ||
            request.headers.get('x-real-ip') ||
            'unknown';

        // Check rate limit
        if (!checkRateLimit(ip)) {
            return NextResponse.json(
                { error: 'Too many submissions. Please try again later.' },
                { status: 429 }
            );
        }

        const body = await request.json();
        const { name, email, generation, prediction } = body;

        // Validate required fields
        if (!email || !prediction) {
            return NextResponse.json(
                { error: 'Email and prediction are required.' },
                { status: 400 }
            );
        }

        // Validate email format
        if (!isValidEmail(email)) {
            return NextResponse.json(
                { error: 'Invalid email format.' },
                { status: 400 }
            );
        }

        // Validate prediction length
        if (prediction.length > 2000) {
            return NextResponse.json(
                { error: 'Prediction must be less than 2000 characters.' },
                { status: 400 }
            );
        }

        // Sanitize inputs
        const sanitizedName = name ? sanitizeInput(name) : 'Anonymous';
        const sanitizedEmail = sanitizeInput(email);
        const sanitizedGeneration = generation ? sanitizeInput(generation) : 'Not specified';
        const sanitizedPrediction = sanitizeInput(prediction);

        // Check for SMTP configuration
        const smtpHost = process.env.SMTP_HOST;
        const smtpPort = process.env.SMTP_PORT;
        const smtpUser = process.env.SMTP_USER;
        const smtpPass = process.env.SMTP_PASS;
        const toEmail = process.env.PREDICTION_TO_EMAIL || 'eric@medev.ai';

        if (!smtpHost || !smtpUser || !smtpPass) {
            console.error('SMTP configuration missing');
            // In development, log the submission instead
            console.log('=== PREDICTION SUBMISSION ===');
            console.log('Name:', sanitizedName);
            console.log('Email:', sanitizedEmail);
            console.log('Generation:', sanitizedGeneration);
            console.log('Prediction:', sanitizedPrediction);
            console.log('============================');

            return NextResponse.json({
                success: true,
                message: 'Prediction submitted successfully (dev mode).'
            });
        }

        // Create SMTP transporter
        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: parseInt(smtpPort || '587'),
            secure: smtpPort === '465',
            auth: {
                user: smtpUser,
                pass: smtpPass,
            },
        });

        // Format email content
        const emailContent = `
New Prediction Submission from MedDev AI

----------------------------
Submitter Information
----------------------------
Name: ${sanitizedName}
Email: ${sanitizedEmail}

----------------------------
Prediction Details
----------------------------
Target Generation: ${sanitizedGeneration}

Prediction:
${sanitizedPrediction}

----------------------------
Submission Metadata
----------------------------
Submitted: ${new Date().toISOString()}
IP: ${ip}
----------------------------
`;

        const htmlContent = `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <h2 style="color: #0159A3; border-bottom: 2px solid #00AA86; padding-bottom: 10px;">
        New Prediction Submission
    </h2>
    
    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 15px 0;">
        <h3 style="color: #333; margin-top: 0;">Submitter Information</h3>
        <p><strong>Name:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> <a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></p>
    </div>
    
    <div style="background: #f0f9ff; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #0180A5;">
        <h3 style="color: #0159A3; margin-top: 0;">Prediction Details</h3>
        <p><strong>Target Generation:</strong> ${sanitizedGeneration}</p>
        <p><strong>Prediction:</strong></p>
        <p style="white-space: pre-wrap; background: white; padding: 10px; border-radius: 4px;">${sanitizedPrediction}</p>
    </div>
    
    <p style="color: #666; font-size: 12px; margin-top: 20px;">
        Submitted: ${new Date().toISOString()}<br>
        From: MedDev AI Future Generations Page
    </p>
</div>
`;

        // Send email
        await transporter.sendMail({
            from: smtpUser,
            to: toEmail,
            replyTo: sanitizedEmail,
            subject: `[MedDev AI] New Prediction: ${sanitizedGeneration}`,
            text: emailContent,
            html: htmlContent,
        });

        return NextResponse.json({
            success: true,
            message: 'Your prediction has been submitted successfully!'
        });

    } catch (error) {
        console.error('Prediction submission error:', error);
        return NextResponse.json(
            { error: 'Failed to submit prediction. Please try again.' },
            { status: 500 }
        );
    }
}
