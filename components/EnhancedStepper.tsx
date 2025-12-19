'use client';

import { useState } from 'react';
import { CheckCircle, Circle, ChevronRight, ChevronLeft, FileText, Download } from 'lucide-react';

export interface StepperStep {
  id: string;
  title: string;
  description?: string;
  content: React.ReactNode;
  completed?: boolean;
  reviewPoint?: boolean; // Whether this step has a design review after it
  templates?: Array<{ name: string; url?: string; description?: string }>;
}

export interface DesignReview {
  id: string;
  title: string;
  afterStep: string; // ID of step this review follows
  completed?: boolean;
}

interface EnhancedStepperProps {
  steps: StepperStep[];
  reviews?: DesignReview[];
  onStepChange?: (stepId: string) => void;
  showProgress?: boolean;
  allowNavigation?: boolean;
}

export default function EnhancedStepper({ 
  steps, 
  reviews = [], 
  onStepChange, 
  showProgress = true, 
  allowNavigation = true 
}: EnhancedStepperProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [completedReviews, setCompletedReviews] = useState<Set<string>>(new Set());

  const handleStepClick = (index: number) => {
    if (!allowNavigation) return;
    setCurrentStep(index);
    onStepChange?.(steps[index].id);
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      const newStep = currentStep + 1;
      setCurrentStep(newStep);
      onStepChange?.(steps[newStep].id);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      const newStep = currentStep - 1;
      setCurrentStep(newStep);
      onStepChange?.(steps[newStep].id);
    }
  };

  const markStepComplete = (index: number) => {
    setCompletedSteps(prev => new Set(prev).add(index));
  };

  const markReviewComplete = (reviewId: string) => {
    setCompletedReviews(prev => new Set(prev).add(reviewId));
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  // Get review for current step
  const currentReview = reviews.find(r => r.afterStep === steps[currentStep]?.id);

  return (
    <div className="w-full">
      {/* Progress Bar */}
      {showProgress && (
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              Step {currentStep + 1} of {steps.length}
            </span>
            <span className="text-sm font-medium text-gray-700">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Main Process Steps Row */}
      <div className="mb-4">
        <p className="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">Design Process</p>
        <div className="flex items-center justify-between overflow-x-auto pb-4">
          {steps.map((step, index) => {
            const isActive = index === currentStep;
            const isCompleted = completedSteps.has(index) || index < currentStep;
            const isAccessible = allowNavigation || index <= currentStep;

            return (
              <div key={step.id} className="flex items-center flex-1 min-w-0">
                <div className="flex flex-col items-center flex-1 min-w-0">
                  <button
                    onClick={() => handleStepClick(index)}
                    disabled={!isAccessible}
                    className={`
                      w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm
                      transition-all duration-200 mb-2
                      ${isActive
                        ? 'bg-blue-600 text-white ring-4 ring-blue-200 scale-110'
                        : isCompleted
                        ? 'bg-green-500 text-white'
                        : isAccessible
                        ? 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      }
                    `}
                  >
                    {isCompleted ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </button>
                  <div className="text-center max-w-[100px]">
                    <p
                      className={`
                        text-xs font-medium mb-1
                        ${isActive ? 'text-blue-600' : isCompleted ? 'text-green-600' : 'text-gray-600'}
                      `}
                    >
                      {step.title}
                    </p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`
                      h-0.5 flex-1 mx-2 mb-5
                      ${isCompleted ? 'bg-green-500' : 'bg-gray-300'}
                    `}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Design Reviews Row */}
      {reviews.length > 0 && (
        <div className="mb-8">
          <p className="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">Design Reviews</p>
          <div className="flex items-center justify-between overflow-x-auto pb-4">
            {reviews.map((review, index) => {
              const stepIndex = steps.findIndex(s => s.id === review.afterStep);
              const isCompleted = completedReviews.has(review.id);
              const stepCompleted = stepIndex >= 0 && (completedSteps.has(stepIndex) || stepIndex < currentStep);
              const isAccessible = stepCompleted;

              return (
                <div key={review.id} className="flex items-center flex-1 min-w-0">
                  <div className="flex flex-col items-center flex-1 min-w-0">
                    <button
                      onClick={() => {
                        if (stepIndex >= 0) handleStepClick(stepIndex);
                      }}
                      disabled={!isAccessible}
                      className={`
                        w-8 h-8 rounded-full flex items-center justify-center text-xs
                        transition-all duration-200 mb-2
                        ${isCompleted
                          ? 'bg-purple-500 text-white'
                          : isAccessible
                          ? 'bg-purple-200 text-purple-700 hover:bg-purple-300'
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }
                      `}
                    >
                      {isCompleted ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        <span>R</span>
                      )}
                    </button>
                    <div className="text-center max-w-[80px]">
                      <p
                        className={`
                          text-xs font-medium mb-1
                          ${isCompleted ? 'text-purple-600' : isAccessible ? 'text-purple-600' : 'text-gray-400'}
                        `}
                      >
                        Review
                      </p>
                    </div>
                  </div>
                  {index < reviews.length - 1 && (
                    <div
                      className={`
                        h-0.5 flex-1 mx-2 mb-5
                        ${isCompleted ? 'bg-purple-500' : 'bg-gray-200'}
                      `}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Current Step Content */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {steps[currentStep].title}
          </h3>
          {steps[currentStep].description && (
            <p className="text-gray-600">{steps[currentStep].description}</p>
          )}
        </div>
        <div className="mt-6">
          {steps[currentStep].content}
        </div>

        {/* Templates Section */}
        {steps[currentStep].templates && steps[currentStep].templates.length > 0 && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" />
              Templates & Documents
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {steps[currentStep].templates!.map((template, idx) => (
                <div key={idx} className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-sm">{template.name}</p>
                      {template.description && (
                        <p className="text-xs text-gray-600 mt-1">{template.description}</p>
                      )}
                    </div>
                    {template.url ? (
                      <a
                        href={template.url}
                        download
                        className="ml-2 p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                        title="Download template"
                      >
                        <Download className="w-4 h-4" />
                      </a>
                    ) : (
                      <span className="ml-2 text-xs text-gray-400">Coming Soon</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className={`
            px-6 py-3 rounded-lg font-medium flex items-center gap-2
            transition-colors
            ${currentStep === 0
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }
          `}
        >
          <ChevronLeft className="w-5 h-5" />
          Previous
        </button>

        <div className="flex gap-2">
          {currentReview && (
            <button
              onClick={() => markReviewComplete(currentReview.id)}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium transition-colors
                ${completedReviews.has(currentReview.id)
                  ? 'bg-purple-100 text-purple-700'
                  : 'bg-purple-200 text-purple-700 hover:bg-purple-300'
                }
              `}
            >
              {completedReviews.has(currentReview.id) ? '✓ Review Complete' : 'Mark Review Complete'}
            </button>
          )}
          {completedSteps.has(currentStep) && (
            <button
              onClick={() => markStepComplete(currentStep)}
              className="px-4 py-2 bg-green-100 text-green-700 rounded-lg text-sm font-medium hover:bg-green-200"
            >
              Mark Step Complete
            </button>
          )}
        </div>

        <button
          onClick={() => {
            markStepComplete(currentStep);
            handleNext();
          }}
          disabled={currentStep === steps.length - 1}
          className={`
            px-6 py-3 rounded-lg font-medium flex items-center gap-2
            transition-colors
            ${currentStep === steps.length - 1
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
            }
          `}
        >
          Next
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

