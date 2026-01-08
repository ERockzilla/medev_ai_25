'use client';

import { useState } from 'react';
import { Calendar, TrendingUp, History, Lightbulb, FlaskConical, Scale, ClipboardCheck, ExternalLink, Zap, ChevronDown, ChevronUp } from 'lucide-react';

type TimelineCategory = 'design' | 'regulations' | 'standards' | 'laser';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  category: TimelineCategory;
  impact: 'low' | 'medium' | 'high';
  isFuture?: boolean;
  link?: string; // Optional external link for research
  confidenceLevels?: Array<{ year: number; confidence: number }>; // For future projections with confidence levels
}

const TIMELINE_DATA: TimelineEvent[] = [
  // Ancient & Prehistoric Medical Devices
  { year: '7000 BCE', title: 'Prehistoric Trepanation', description: 'Earliest evidence of surgical drilling in human skulls for medical treatment', category: 'design', impact: 'high', link: 'https://en.wikipedia.org/wiki/History_of_medicine' },
  { year: '3000 BCE', title: 'Ancient Egyptian Surgical Instruments', description: 'First specialized surgical tools including scalpels, forceps, and probes made from bronze', category: 'design', impact: 'high', link: 'https://en.wikipedia.org/wiki/History_of_medicine' },
  { year: '2600 BCE', title: 'Ancient Egyptian Prosthetics', description: 'Earliest known prosthetic device - wooden toe found in Egyptian mummy', category: 'design', impact: 'medium', link: 'https://en.wikipedia.org/wiki/History_of_medicine' },
  { year: '500 BCE', title: 'Ancient Greek Surgical Instruments', description: 'Hippocratic era introduces standardized surgical tools and medical instruments', category: 'design', impact: 'high', link: 'https://en.wikipedia.org/wiki/History_of_medicine' },
  { year: '200 BCE', title: 'Ancient Chinese Acupuncture Needles', description: 'Systematic use of metal acupuncture needles for medical treatment', category: 'design', impact: 'high', link: 'https://en.wikipedia.org/wiki/History_of_medicine' },
  { year: '100 CE', title: 'Ancient Roman Surgical Tools', description: 'Advanced Roman surgical instruments including bone drills, retractors, and specialized forceps', category: 'design', impact: 'high', link: 'https://en.wikipedia.org/wiki/History_of_medicine' },
  { year: '900 CE', title: 'Islamic Medical Instruments', description: 'Refinement of surgical tools and introduction of new medical devices during Islamic Golden Age', category: 'design', impact: 'medium', link: 'https://en.wikipedia.org/wiki/History_of_medicine' },
  { year: '1000 CE', title: 'Al-Zahrawi Surgical Instruments', description: 'Al-Zahrawi describes over 200 surgical instruments in medical encyclopedia, many of his own invention', category: 'design', impact: 'high', link: 'https://en.wikipedia.org/wiki/History_of_medicine' },
  { year: '1280s', title: 'Spectacles Invented', description: 'First eyeglasses developed in Italy, revolutionizing vision correction', category: 'design', impact: 'high', link: 'https://en.wikipedia.org/wiki/History_of_medicine' },
  { year: '1590', title: 'Compound Microscope', description: 'Janssen invents compound microscope, enabling observation of microorganisms', category: 'design', impact: 'high', link: 'https://en.wikipedia.org/wiki/History_of_medicine' },
  { year: '1674', title: 'Microscopic Medical Observations', description: 'Leeuwenhoek improves microscope and first observes red blood cells and bacteria', category: 'design', impact: 'high', link: 'https://en.wikipedia.org/wiki/History_of_medicine' },
  { year: '1714', title: 'Mercury Thermometer', description: 'Fahrenheit invents mercury-in-glass thermometer for accurate temperature measurement', category: 'design', impact: 'high', link: 'https://en.wikipedia.org/wiki/History_of_medicine' },
  { year: '1816', title: 'Stethoscope Invented', description: 'Laennec invents first stethoscope, revolutionizing auscultation and diagnosis', category: 'design', impact: 'high', link: 'https://en.wikipedia.org/wiki/History_of_medicine' },
  { year: '1851', title: 'Ophthalmoscope Invented', description: 'Helmholtz invents ophthalmoscope for examining the interior of the eye', category: 'design', impact: 'high', link: 'https://en.wikipedia.org/wiki/History_of_medicine' },
  { year: '1855', title: 'Laryngoscope Invented', description: 'Garcia invents laryngoscope for examining the larynx and vocal cords', category: 'design', impact: 'high', link: 'https://en.wikipedia.org/wiki/History_of_medicine' },
  { year: '1867', title: 'Antiseptic Surgery', description: 'Lister introduces antiseptic techniques, revolutionizing surgical safety', category: 'design', impact: 'high', link: 'https://en.wikipedia.org/wiki/History_of_medicine' },

  // Ancient & Medieval Regulations & Standards
  { year: '1750 BCE', title: 'Code of Hammurabi', description: 'Babylonian legal code includes earliest known medical practice regulations and physician liability laws', category: 'regulations', impact: 'high', link: 'https://en.wikipedia.org/wiki/Code_of_Hammurabi' },
  { year: '400 BCE', title: 'Hippocratic Oath', description: 'Hippocrates establishes ethical code for physicians, establishing foundational medical practice standards', category: 'standards', impact: 'high', link: 'https://www.nlm.nih.gov/hmd/greek/greek_oath.html' },
  { year: '1025 CE', title: 'Canon of Medicine', description: 'Avicenna\'s comprehensive medical encyclopedia establishes systematic medical standards and practice guidelines', category: 'standards', impact: 'high', link: 'https://en.wikipedia.org/wiki/The_Canon_of_Medicine' },
  { year: '1200s', title: 'Medical Guilds Established', description: 'European medical guilds establish training standards, certification requirements, and quality control for medical practice', category: 'standards', impact: 'high', link: 'https://en.wikipedia.org/wiki/History_of_medicine' },
  { year: '1518', title: 'Royal College of Physicians', description: 'King Henry VIII establishes first formal medical licensing body in England to regulate physician competence', category: 'regulations', impact: 'high', link: 'https://www.rcp.ac.uk/about-us/history' },
  { year: '1700s', title: 'Medical Licensing Laws', description: 'European countries and American colonies begin requiring formal medical licenses, establishing early regulatory frameworks', category: 'regulations', impact: 'high', link: 'https://en.wikipedia.org/wiki/History_of_medicine' },

  // Historical - Design & Development
  { year: '1881', title: 'Sphygmomanometer Invented', description: 'First device to measure blood pressure in patients', category: 'design', impact: 'high', link: 'https://morgridge.org/community/teaching-learning/medical-devices/medical-devices-timeline/' },
  { year: '1885', title: 'First X-Ray Image of Human', description: 'Röntgen captures first X-ray image of human body part (wife\'s hand)', category: 'design', impact: 'high', link: 'https://morgridge.org/community/teaching-learning/medical-devices/medical-devices-timeline/' },
  { year: '1885', title: 'Electrocardiograph Machine', description: 'Einthoven develops first ECG machine to record heart wave patterns', category: 'design', impact: 'high', link: 'https://morgridge.org/community/teaching-learning/medical-devices/medical-devices-timeline/' },
  { year: '1895', title: 'X-Ray Discovery', description: 'Wilhelm Röntgen discovers X-rays, launching modern medical imaging', category: 'design', impact: 'high', link: 'https://www.nlm.nih.gov/exhibition/visibleproofs/galleries/biographies/roentgen.html' },
  { year: '1899', title: 'Radiation Therapy in Cancer', description: 'First use of X-rays for cancer treatment', category: 'design', impact: 'high', link: 'https://morgridge.org/community/teaching-learning/medical-devices/medical-devices-timeline/' },
  { year: '1913', title: 'Mammography Research', description: 'First X-ray images of breast tissue for cancer detection', category: 'design', impact: 'high', link: 'https://morgridge.org/community/teaching-learning/medical-devices/medical-devices-timeline/' },
  { year: '1927', title: 'Modern Respirator', description: 'First practical iron lung respirator for polio patients', category: 'design', impact: 'high', link: 'https://morgridge.org/community/teaching-learning/medical-devices/medical-devices-timeline/' },
  { year: '1928', title: 'Penicillin Discovery', description: 'Fleming discovers penicillin, revolutionizing antibiotics and sterile device design', category: 'design', impact: 'high', link: 'https://www.acs.org/education/whatischemistry/landmarks/flemingpenicillin.html' },
  { year: '1933', title: 'Electric Defibrillator Research', description: 'Discovery that electric counter-shock can restore normal heart rhythm', category: 'design', impact: 'high', link: 'https://morgridge.org/community/teaching-learning/medical-devices/medical-devices-timeline/' },
  { year: '1945', title: 'Kidney Dialysis Machine', description: 'First successful artificial kidney treatment using dialysis', category: 'design', impact: 'high', link: 'https://morgridge.org/community/teaching-learning/medical-devices/medical-devices-timeline/' },
  { year: '1948', title: 'Plastic Contact Lens', description: 'First patent for corneal contact lens design', category: 'design', impact: 'medium', link: 'https://morgridge.org/community/teaching-learning/medical-devices/medical-devices-timeline/' },
  { year: '1951', title: 'Artificial Heart Valve', description: 'First artificial heart valve implantation surgery', category: 'design', impact: 'high', link: 'https://morgridge.org/community/teaching-learning/medical-devices/medical-devices-timeline/' },
  { year: '1952', title: 'First Pacemaker', description: 'First successful external cardiac pacemaker developed', category: 'design', impact: 'high', link: 'https://morgridge.org/community/teaching-learning/medical-devices/medical-devices-timeline/' },
  { year: '1958', title: 'Imaging Device for Tumors', description: 'Anger invents gamma camera for nuclear medicine imaging', category: 'design', impact: 'high', link: 'https://morgridge.org/community/teaching-learning/medical-devices/medical-devices-timeline/' },
  { year: '1958', title: 'First Implantable Pacemaker', description: 'First totally internal pacemaker using silicon transistors', category: 'design', impact: 'high', link: 'https://morgridge.org/community/teaching-learning/medical-devices/medical-devices-timeline/' },
  { year: '1959', title: 'Ultrasound Diagnostic Tool', description: 'Practical ultrasound technology for obstetrics and gynecology', category: 'design', impact: 'high', link: 'https://morgridge.org/community/teaching-learning/medical-devices/medical-devices-timeline/' },
  { year: '1950s', title: 'Artificial Hip Replacement', description: 'First artificial hip replacement procedure using engineering principles', category: 'design', impact: 'high', link: 'https://morgridge.org/community/teaching-learning/medical-devices/medical-devices-timeline/' },
  { year: '1960', title: 'First Internal Pacemaker', description: 'First totally internal pacemaker successfully implanted', category: 'design', impact: 'high', link: 'https://morgridge.org/community/teaching-learning/medical-devices/medical-devices-timeline/' },
  { year: '1962', title: 'PET Camera', description: 'First positron emission tomography camera for cancer detection', category: 'design', impact: 'high', link: 'https://morgridge.org/community/teaching-learning/medical-devices/medical-devices-timeline/' },
  { year: '1969', title: 'Portable Glucose Monitor', description: 'First home blood glucose monitor for diabetes patients', category: 'design', impact: 'high', link: 'https://morgridge.org/community/teaching-learning/medical-devices/medical-devices-timeline/' },
  { year: '1971', title: 'First Soft Contact Lens', description: 'Bausch & Lomb licenses first soft contact lens', category: 'design', impact: 'medium', link: 'https://morgridge.org/community/teaching-learning/medical-devices/medical-devices-timeline/' },
  { year: '1971', title: 'CT Scanner', description: 'First commercial CT scanner introduces computer-aided diagnostics', category: 'design', impact: 'high' },
  { year: '1972', title: 'First CT Scan', description: 'Hounsfield and Cormack develop computerized axial tomography scanner', category: 'design', impact: 'high', link: 'https://morgridge.org/community/teaching-learning/medical-devices/medical-devices-timeline/' },
  { year: '1972', title: 'MRI for Medical Purposes', description: 'Magnetic resonance imaging adapted for medical diagnosis', category: 'design', impact: 'high', link: 'https://morgridge.org/community/teaching-learning/medical-devices/medical-devices-timeline/' },
  { year: '1978', title: 'First Cochlear Implant', description: 'First cochlear implant surgery using multiple electrode system', category: 'design', impact: 'high', link: 'https://morgridge.org/community/teaching-learning/medical-devices/medical-devices-timeline/' },
  { year: '1979', title: 'Portable Insulin Pump', description: 'First insulin pump to mimic body\'s normal insulin release', category: 'design', impact: 'high', link: 'https://morgridge.org/community/teaching-learning/medical-devices/medical-devices-timeline/' },
  { year: '1970s', title: 'First Arthroscope', description: 'Fiber-optic arthroscope enables minimally invasive joint surgery', category: 'design', impact: 'high', link: 'https://morgridge.org/community/teaching-learning/medical-devices/medical-devices-timeline/' },
  { year: '1980s', title: 'Controlled Drug Delivery', description: 'Foundation of controlled drug delivery using polymer technology', category: 'design', impact: 'high', link: 'https://morgridge.org/community/teaching-learning/medical-devices/medical-devices-timeline/' },
  { year: '1982', title: 'First Permanent Artificial Heart', description: 'First permanent artificial heart implant, patient survives 112 days', category: 'design', impact: 'high', link: 'https://morgridge.org/community/teaching-learning/medical-devices/medical-devices-timeline/' },
  { year: '1985', title: 'Implantable Cardioverter Defibrillator', description: 'FDA approves ICD for monitoring and correcting abnormal heart rhythms', category: 'design', impact: 'high', link: 'https://morgridge.org/community/teaching-learning/medical-devices/medical-devices-timeline/' },
  { year: '1986', title: 'First Coronary Stent', description: 'First coronary stent implanted in human patient', category: 'design', impact: 'high', link: 'https://morgridge.org/community/teaching-learning/medical-devices/medical-devices-timeline/' },
  { year: '1987', title: 'Deep Brain Stimulation', description: 'First deep-brain electrical stimulation for Parkinson\'s disease', category: 'design', impact: 'high', link: 'https://morgridge.org/community/teaching-learning/medical-devices/medical-devices-timeline/' },
  { year: '2002', title: 'Combined CT and Radiation', description: 'First unit combining CT and radiation delivery for cancer treatment', category: 'design', impact: 'high', link: 'https://morgridge.org/community/teaching-learning/medical-devices/medical-devices-timeline/' },
  { year: '2009', title: 'DEKA Prosthetic Arm', description: 'Advanced prosthetic arm controlled by thought and muscle signals', category: 'design', impact: 'high', link: 'https://morgridge.org/community/teaching-learning/medical-devices/medical-devices-timeline/' },
  { year: '2010', title: 'Implantable Miniature Telescope', description: 'Small telescope implant for end-stage macular degeneration', category: 'design', impact: 'medium', link: 'https://morgridge.org/community/teaching-learning/medical-devices/medical-devices-timeline/' },

  // Laser & Photonics - Early Light Therapy (Pre-Laser)
  { year: '1500 BCE', title: 'Ancient Light Therapy', description: 'Egyptian and Indian healers use sunlight combined with plant extracts to treat skin conditions like vitiligo', category: 'laser', impact: 'medium', link: 'https://pubmed.ncbi.nlm.nih.gov/22739720/' },
  { year: '400 BCE', title: 'Hippocratic Heliotherapy', description: 'Hippocrates advocates sunbathing and natural light exposure for treating various ailments', category: 'laser', impact: 'medium', link: 'https://pubmed.ncbi.nlm.nih.gov/22739720/' },
  { year: '1850s', title: 'Nightingale Light Therapy', description: 'Florence Nightingale emphasizes natural light in hospitals, observing improved patient recovery in well-lit environments', category: 'laser', impact: 'medium', link: 'https://www.uvisahealth.com/articles/the-history-of-light-therapy-revolutionising-infection-treatment' },
  { year: '1893', title: 'Finsen Phototherapy', description: 'Niels Ryberg Finsen pioneers artificial UV light therapy for treating skin tuberculosis (lupus vulgaris)', category: 'laser', impact: 'high', link: 'https://pubmed.ncbi.nlm.nih.gov/22739720/' },
  { year: '1903', title: 'Nobel Prize for Phototherapy', description: 'Finsen awarded Nobel Prize in Medicine for his phototherapy work, establishing light as recognized medical treatment', category: 'laser', impact: 'high', link: 'https://pubmed.ncbi.nlm.nih.gov/22739720/' },
  { year: '1903', title: 'Rollier Heliotherapy Clinics', description: 'Auguste Rollier establishes sunbathing clinics in Swiss Alps, effectively treating skeletal tuberculosis with heliotherapy', category: 'laser', impact: 'high', link: 'https://en.wikipedia.org/wiki/Auguste_Rollier' },

  // Laser & Photonics - Technology Development
  { year: '1917', title: 'Theory of Stimulated Emission', description: 'Einstein proposes theory of stimulated emission, foundation of laser technology', category: 'laser', impact: 'high' },
  { year: '1954', title: 'First Maser', description: 'Townes develops first microwave amplification by stimulated emission', category: 'laser', impact: 'high' },
  { year: '1960', title: 'First Ruby Laser', description: 'Maiman creates first working laser using ruby crystal', category: 'laser', impact: 'high' },
  { year: '1961', title: 'First Helium-Neon Laser', description: 'First continuous-wave gas laser developed', category: 'laser', impact: 'high' },
  { year: '1962', title: 'First Semiconductor Laser', description: 'First diode laser using semiconductor materials', category: 'laser', impact: 'high' },
  { year: '1964', title: 'First CO2 Laser', description: 'First carbon dioxide laser, powerful for industrial and medical use', category: 'laser', impact: 'high' },
  { year: '1966', title: 'First Argon Ion Laser', description: 'First continuous-wave visible light laser', category: 'laser', impact: 'high' },
  { year: '1970', title: 'First Excimer Laser', description: 'First ultraviolet excimer laser developed', category: 'laser', impact: 'high' },

  // Laser & Photonics - Medical Applications
  { year: '1961', title: 'First Medical Laser Use', description: 'First laser used in ophthalmology for retinal photocoagulation', category: 'laser', impact: 'high' },
  { year: '1963', title: 'Laser Treatment for Retinal Disease', description: 'Ruby laser used to prevent blindness from diabetic retinopathy', category: 'laser', impact: 'high', link: 'https://morgridge.org/community/teaching-learning/medical-devices/medical-devices-timeline/' },
  { year: '1965', title: 'Argon Laser for Eye Surgery', description: 'Argon-ion laser designed specifically for eye surgery', category: 'laser', impact: 'high', link: 'https://morgridge.org/community/teaching-learning/medical-devices/medical-devices-timeline/' },
  { year: '1968', title: 'Laser Photocoagulation Clinical Use', description: 'Argon laser begins clinical use for diabetic retinopathy treatment', category: 'laser', impact: 'high', link: 'https://morgridge.org/community/teaching-learning/medical-devices/medical-devices-timeline/' },
  { year: '1987', title: 'First Laser Corneal Surgery', description: 'First excimer laser surgery on human cornea (LASIK precursor)', category: 'laser', impact: 'high', link: 'https://morgridge.org/community/teaching-learning/medical-devices/medical-devices-timeline/' },
  { year: '1995', title: 'First Excimer Laser PRK Approval', description: 'FDA approves Summit SVS Apex Excimer Laser System (PMA P930034) for photorefractive keratectomy - first laser vision correction approval', category: 'laser', impact: 'high', link: 'https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpma/pma.cfm?id=P930034' },
  { year: '1995', title: 'Photodynamic Therapy FDA Approval', description: 'FDA approves Photofrin (porfimer sodium) for esophageal cancer treatment using photodynamic therapy (PMA P930017)', category: 'laser', impact: 'high', link: 'https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpma/pma.cfm?id=P930017' },
  { year: '1998', title: 'PDT for Lung Cancer', description: 'FDA expands Photofrin approval for early-stage non-small cell lung cancer (PMA P930017/S003)', category: 'laser', impact: 'high', link: 'https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpma/pma.cfm?id=P930017S003' },
  { year: '2001', title: 'Femtosecond Laser for LASIK', description: 'FDA clears IntraLase femtosecond laser for creating corneal flaps - enabling blade-free "all-laser" LASIK', category: 'laser', impact: 'high', link: 'https://www.accessdata.fda.gov/cdrh_docs/pdf/P930034S015A.pdf' },
  { year: '2002', title: 'Class III Therapy Laser FDA Clearance', description: 'FDA 510(k) clearance for Class IIIb low-level laser therapy devices for pain management and tissue healing', category: 'laser', impact: 'high', link: 'https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmnsimplesearch.cfm' },
  { year: '2001', title: 'Laser Hair Removal FDA Clearance', description: 'FDA 510(k) clearance for long-pulsed laser systems for permanent hair reduction - Sciton Image and similar devices', category: 'laser', impact: 'medium', link: 'https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmnsimplesearch.cfm' },
  { year: '2003', title: 'Class IV Therapy Laser FDA Clearance', description: 'Avicenna Laser Technology receives first FDA 510(k) clearance for Class IV (7.5W) high-power therapy laser on December 11, 2003', category: 'laser', impact: 'high', link: 'https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmnsimplesearch.cfm' },
  { year: '2004', title: 'Fractional Laser Technology', description: 'Introduction of fractional CO2 lasers for skin resurfacing with reduced recovery - Reliant Fraxel system', category: 'laser', impact: 'high', link: 'https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmnsimplesearch.cfm' },
  { year: '2006', title: 'GreenLight Laser for Prostate', description: 'FDA 510(k) clearance (K062719) for GreenLight HPS 532nm laser system for benign prostatic hyperplasia (BPH) treatment', category: 'laser', impact: 'high', link: 'https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm?ID=K062719' },
  { year: '2006', title: 'Laser-Assisted Lipolysis Clearance', description: 'Cynosure SmartLipo receives first FDA 510(k) clearance for laser-assisted lipolysis/liposuction in November 2006', category: 'laser', impact: 'medium', link: 'https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmnsimplesearch.cfm' },
  { year: '2010', title: 'Femtosecond Laser Cataract Surgery', description: 'FDA 510(k) clearance (K094052) for LenSx femtosecond laser for cataract surgery - capsulotomy, corneal incisions, and lens fragmentation', category: 'laser', impact: 'high', link: 'https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm?ID=K094052' },
  { year: '2012', title: 'Picosecond Laser for Tattoo Removal', description: 'Picosecond lasers introduced for faster, more effective tattoo removal', category: 'laser', impact: 'medium' },
  { year: '2012', title: 'Picosecond Laser FDA Clearance', description: 'Cynosure PicoSure receives first FDA 510(k) clearance for picosecond laser for tattoo removal and benign pigmented lesions (December 2012)', category: 'laser', impact: 'high', link: 'https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmnsimplesearch.cfm' },
  { year: '2013', title: 'Laser Interstitial Thermal Therapy', description: 'FDA 510(k) clearance (K120561) for Monteris NeuroBlate LITT system for MRI-guided brain tumor ablation in April 2013', category: 'laser', impact: 'high', link: 'https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm?ID=K120561' },
  { year: '2018', title: 'Laser-Assisted Drug Delivery', description: 'FDA 510(k) clearances expand for ablative fractional laser systems enabling enhanced transdermal drug delivery', category: 'laser', impact: 'high', link: 'https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmnsimplesearch.cfm' },
  { year: '2020', title: 'Laser Therapy for Neurological Conditions', description: 'Research advances in transcranial photobiomodulation for brain injuries', category: 'laser', impact: 'high' },
  { year: '2021', title: 'Advanced Fractional Laser Systems', description: 'Next-generation fractional lasers with improved precision and safety', category: 'laser', impact: 'high' },

  // Historical - Regulations
  { year: '1906', title: 'Pure Food and Drug Act', description: 'First US federal consumer protection law', category: 'regulations', impact: 'medium', link: 'https://www.fda.gov/medical-devices/overview-device-regulation/history-medical-device-regulation-oversight-united-states' },
  { year: '1938', title: 'FDA Establishment', description: 'Food, Drug, and Cosmetic Act creates modern FDA', category: 'regulations', impact: 'high', link: 'https://www.fda.gov/about-fda/histories-fda-regulated-products/history-medical-and-radiation-emitting-device-regulation' },
  { year: '1976', title: 'Medical Device Amendments', description: 'FDA gains authority over medical devices with 510(k) and PMA pathways', category: 'regulations', impact: 'high', link: 'https://www.fda.gov/medical-devices/overview-device-regulation/history-medical-device-regulation-oversight-united-states' },
  { year: '1990', title: 'Safe Medical Devices Act', description: 'Mandatory reporting of device-related deaths and serious injuries', category: 'regulations', impact: 'high', link: 'https://www.fda.gov/medical-devices/overview-device-regulation/history-medical-device-regulation-oversight-united-states' },
  { year: '1992', title: 'Medical Device User Fee Act', description: 'First user fee program for medical device applications', category: 'regulations', impact: 'high', link: 'https://www.fda.gov/medical-devices/overview-device-regulation/history-medical-device-regulation-oversight-united-states' },
  { year: '1993', title: 'EU Medical Device Directive', description: 'First harmonized EU regulations for medical devices (MDD 93/42/EEC)', category: 'regulations', impact: 'high' },
  { year: '1997', title: 'FDA Modernization Act', description: 'Streamlines device approval process and establishes risk-based classification', category: 'regulations', impact: 'high', link: 'https://www.fda.gov/medical-devices/overview-device-regulation/history-medical-device-regulation-oversight-united-states' },
  { year: '2002', title: 'Medical Device User Fee and Modernization Act', description: 'MDUFMA establishes user fees and enhances post-market surveillance', category: 'regulations', impact: 'high', link: 'https://www.fda.gov/medical-devices/overview-device-regulation/history-medical-device-regulation-oversight-united-states' },
  { year: '2007', title: 'FDA Amendments Act', description: 'FDAAA strengthens post-market surveillance and device safety requirements', category: 'regulations', impact: 'high', link: 'https://www.fda.gov/medical-devices/overview-device-regulation/history-medical-device-regulation-oversight-united-states' },
  { year: '2012', title: 'FDA Safety and Innovation Act', description: 'FDASIA enhances device safety and establishes unique device identification (UDI)', category: 'regulations', impact: 'high', link: 'https://www.fda.gov/medical-devices/overview-device-regulation/history-medical-device-regulation-oversight-united-states' },
  { year: '2016', title: '21st Century Cures Act', description: 'Accelerates device innovation and establishes breakthrough device designation', category: 'regulations', impact: 'high', link: 'https://www.fda.gov/medical-devices/overview-device-regulation/history-medical-device-regulation-oversight-united-states' },
  { year: '2017', title: 'FDA Reauthorization Act', description: 'FDARA reauthorizes user fee programs and enhances device review processes', category: 'regulations', impact: 'high', link: 'https://www.fda.gov/medical-devices/overview-device-regulation/history-medical-device-regulation-oversight-united-states' },
  { year: '2017', title: 'EU MDR and IVDR Adopted', description: 'European Union adopts stricter Medical Device and IVD Regulations', category: 'regulations', impact: 'high' },
  { year: '2021', title: 'EU MDR Implementation', description: 'EU Medical Device Regulation becomes fully applicable, replacing MDD', category: 'regulations', impact: 'high' },
  { year: '2022', title: 'EU IVDR Implementation', description: 'EU In Vitro Diagnostic Regulation becomes fully applicable', category: 'regulations', impact: 'high' },
  { year: '2022', title: 'Medical Device User Fee Amendments V', description: 'MDUFA V reauthorizes user fee programs with enhanced review timelines', category: 'regulations', impact: 'high', link: 'https://www.fda.gov/medical-devices/overview-device-regulation/history-medical-device-regulation-oversight-united-states' },
  { year: '2023', title: 'EU MDR Transition Extension', description: 'Regulation extends transition periods to mitigate device shortages', category: 'regulations', impact: 'medium' },
  { year: '2024', title: 'FDA QMSR Final Rule', description: 'FDA issues final rule incorporating ISO 13485 into Quality Management System Regulation', category: 'regulations', impact: 'high', link: 'https://www.fda.gov/medical-devices/overview-device-regulation/history-medical-device-regulation-oversight-united-states' },
  { year: '2025', title: 'South Korea Digital Medical Products Act', description: 'South Korea implements regulations for digital medical devices and drug-digital combinations', category: 'regulations', impact: 'high' },
  { year: '2026', title: 'FDA QMSR Effective Date', description: 'FDA Quality Management System Regulation incorporating ISO 13485 becomes effective', category: 'regulations', impact: 'high', link: 'https://www.fda.gov/medical-devices/overview-device-regulation/history-medical-device-regulation-oversight-united-states' },

  // Global Regulatory Harmonization
  { year: '2011', title: 'IMDRF Established', description: 'International Medical Device Regulators Forum founded to promote global harmonization', category: 'regulations', impact: 'high' },
  { year: '2013', title: 'UDI System Implementation', description: 'FDA begins implementation of Unique Device Identification system for device traceability', category: 'regulations', impact: 'high', link: 'https://www.fda.gov/medical-devices/overview-device-regulation/history-medical-device-regulation-oversight-united-states' },
  { year: '2014', title: 'EU UDI Requirements', description: 'European Commission introduces UDI requirements for medical devices', category: 'regulations', impact: 'high' },
  { year: '2024', title: 'Global UDI Expansion', description: 'Brazil, Malaysia, Argentina, and Australia advance UDI implementation for device traceability', category: 'regulations', impact: 'high' },

  // Historical - Standards & QMS
  { year: '1947', title: 'ISO Founded', description: 'International Organization for Standardization established', category: 'standards', impact: 'high', link: 'https://www.iso.org/about-us.html' },
  { year: '1977', title: 'IEC 60601-1 First Edition', description: 'First edition of medical electrical equipment safety standard published', category: 'standards', impact: 'high' },
  { year: '1987', title: 'ISO 9000 Series', description: 'First international quality management standards published', category: 'standards', impact: 'high' },
  { year: '1992', title: 'ISO 10993 First Edition', description: 'Biological evaluation of medical devices standard series introduced', category: 'standards', impact: 'high' },
  { year: '1993', title: 'IEC 60825-1 First Edition', description: 'Laser product safety classification standard published', category: 'standards', impact: 'high' },
  { year: '1996', title: 'ISO 13485 First Edition', description: 'Medical device-specific QMS standard introduced', category: 'standards', impact: 'high' },
  { year: '2000', title: 'ISO 14971 First Edition', description: 'Risk management standard for medical devices', category: 'standards', impact: 'high' },
  { year: '2000', title: 'ISO 15223 First Edition', description: 'Standard for symbols used with medical device labels', category: 'standards', impact: 'medium' },
  { year: '2003', title: 'ISO 14155 First Edition', description: 'Good clinical practice standard for medical device investigations', category: 'standards', impact: 'high' },
  { year: '2006', title: 'IEC 62304 First Edition', description: 'Medical device software lifecycle processes standard published', category: 'standards', impact: 'high' },
  { year: '2007', title: 'IEC 62366 First Edition', description: 'Usability engineering standard for medical devices published', category: 'standards', impact: 'high' },

  // Recent Past (2010-2025)
  { year: '2011', title: 'Software as Medical Device', description: 'FDA recognizes standalone software as medical devices', category: 'design', impact: 'high' },
  { year: '2013', title: 'Cybersecurity Guidance', description: 'FDA issues first cybersecurity guidance for connected devices', category: 'regulations', impact: 'high' },
  { year: '2015', title: 'IEC 62304:2015', description: 'Updated software lifecycle standard with enhanced cybersecurity requirements', category: 'standards', impact: 'high' },
  { year: '2015', title: 'IEC 62366-1:2015', description: 'Updated usability engineering standard with improved process requirements', category: 'standards', impact: 'high' },
  { year: '2016', title: 'ISO 13485:2016', description: 'Major update aligning with risk-based thinking', category: 'standards', impact: 'high' },
  { year: '2017', title: 'EU MDR Adopted', description: 'Stricter Medical Device Regulation replaces MDD', category: 'regulations', impact: 'high' },
  { year: '2019', title: 'ISO 14971:2019', description: 'Updated risk management standard with benefit-risk analysis', category: 'standards', impact: 'high' },
  { year: '2021', title: 'IEC 81001-5-1 Published', description: 'Cybersecurity standard for health software and IT systems published', category: 'standards', impact: 'high' },
  { year: '2021', title: 'ISO 20417 Published', description: 'Standard for information to be supplied by medical device manufacturers', category: 'standards', impact: 'medium' },
  { year: '2021', title: 'AI/ML Action Plan', description: 'FDA releases framework for AI/ML-based devices', category: 'regulations', impact: 'high' },
  { year: '2024', title: 'QMSR Alignment', description: 'FDA 21 CFR 820 aligns with ISO 13485:2016', category: 'regulations', impact: 'high' },

  // Near Future (2025-2035) - with confidence levels
  { year: '2027', title: 'AI-Driven Design', description: 'AI tools automate design optimization, simulation, and risk analysis', category: 'design', impact: 'high', isFuture: true, confidenceLevels: [{ year: 2027, confidence: 52 }, { year: 2030, confidence: 78 }, { year: 2033, confidence: 94 }] },
  { year: '2028', title: 'Real-World Evidence', description: 'Continuous post-market surveillance using AI and big data becomes standard', category: 'regulations', impact: 'high', isFuture: true, confidenceLevels: [{ year: 2028, confidence: 48 }, { year: 2031, confidence: 75 }, { year: 2034, confidence: 92 }] },
  { year: '2029', title: 'Cybersecurity Standards Mandatory', description: 'IEC 81001-5-1 becomes mandatory for connected devices globally', category: 'standards', impact: 'high', isFuture: true, confidenceLevels: [{ year: 2029, confidence: 55 }, { year: 2032, confidence: 82 }, { year: 2035, confidence: 96 }] },
  { year: '2028', title: 'Digital Twins', description: 'Virtual device replicas enable predictive maintenance and personalized medicine', category: 'design', impact: 'high', isFuture: true, confidenceLevels: [{ year: 2028, confidence: 45 }, { year: 2031, confidence: 72 }, { year: 2034, confidence: 91 }] },
  { year: '2030', title: 'AI/ML Device Standards', description: 'New ISO/IEC standards for AI/ML-based medical devices and SaMD', category: 'standards', impact: 'high', isFuture: true, confidenceLevels: [{ year: 2030, confidence: 50 }, { year: 2033, confidence: 76 }, { year: 2036, confidence: 93 }] },
  { year: '2032', title: 'Quantum-Enhanced Medical Imaging', description: 'Quantum sensors revolutionize medical imaging with unprecedented resolution', category: 'design', impact: 'high', isFuture: true, confidenceLevels: [{ year: 2032, confidence: 35 }, { year: 2038, confidence: 68 }, { year: 2044, confidence: 89 }] },
  { year: '2031', title: 'Global UDI Harmonization', description: 'Single global UDI system implemented across all major markets', category: 'regulations', impact: 'high', isFuture: true, confidenceLevels: [{ year: 2031, confidence: 42 }, { year: 2035, confidence: 71 }, { year: 2039, confidence: 90 }] },
  { year: '2029', title: 'Advanced Laser Therapies', description: 'Next-generation laser systems for precision surgery and regenerative medicine', category: 'laser', impact: 'high', isFuture: true, confidenceLevels: [{ year: 2029, confidence: 58 }, { year: 2032, confidence: 84 }, { year: 2035, confidence: 95 }] },

  // Mid Future (2035-2045) - with confidence levels
  { year: '2036', title: 'Adaptive AI Devices', description: 'Self-learning medical devices that adapt to individual patients in real-time', category: 'design', impact: 'high', isFuture: true, confidenceLevels: [{ year: 2036, confidence: 38 }, { year: 2042, confidence: 65 }, { year: 2048, confidence: 87 }] },
  { year: '2040', title: 'Global Regulatory Harmonization', description: 'Single global regulatory pathway for medical devices (FDA, EU, Asia)', category: 'regulations', impact: 'high', isFuture: true, confidenceLevels: [{ year: 2040, confidence: 28 }, { year: 2047, confidence: 58 }, { year: 2054, confidence: 82 }] },
  { year: '2038', title: 'Autonomous Standards Validation', description: 'AI systems automatically validate designs against all applicable standards', category: 'standards', impact: 'high', isFuture: true, confidenceLevels: [{ year: 2038, confidence: 32 }, { year: 2044, confidence: 62 }, { year: 2050, confidence: 85 }] },
  { year: '2042', title: 'Biointegrated Devices', description: 'Seamless integration of electronics with biological tissue', category: 'design', impact: 'high', isFuture: true, confidenceLevels: [{ year: 2042, confidence: 25 }, { year: 2049, confidence: 55 }, { year: 2056, confidence: 80 }] },
  { year: '2041', title: 'Quantum Computing in Medical Devices', description: 'Quantum processors enable real-time complex medical calculations and diagnostics', category: 'design', impact: 'high', isFuture: true, confidenceLevels: [{ year: 2041, confidence: 22 }, { year: 2048, confidence: 52 }, { year: 2055, confidence: 78 }] },
  { year: '2039', title: 'Predictive Regulatory AI', description: 'AI systems predict device safety and efficacy before clinical trials', category: 'regulations', impact: 'high', isFuture: true, confidenceLevels: [{ year: 2039, confidence: 30 }, { year: 2045, confidence: 60 }, { year: 2051, confidence: 83 }] },
  { year: '2043', title: 'Standards for Bio-Devices', description: 'New standards for devices integrated with living biological systems', category: 'standards', impact: 'high', isFuture: true, confidenceLevels: [{ year: 2043, confidence: 26 }, { year: 2050, confidence: 56 }, { year: 2057, confidence: 81 }] },
  { year: '2037', title: 'Femtosecond Laser Precision', description: 'Ultra-precise femtosecond lasers enable molecular-level medical interventions', category: 'laser', impact: 'high', isFuture: true, confidenceLevels: [{ year: 2037, confidence: 40 }, { year: 2043, confidence: 70 }, { year: 2049, confidence: 88 }] },

  // Far Future (2045-2075) - with confidence levels
  { year: '2046', title: 'Nanomedical Devices', description: 'Molecular-scale devices for targeted therapy and diagnostics', category: 'design', impact: 'high', isFuture: true, confidenceLevels: [{ year: 2046, confidence: 18 }, { year: 2055, confidence: 45 }, { year: 2064, confidence: 72 }] },
  { year: '2045', title: 'Predictive Regulation', description: 'AI predicts safety issues before they occur, enabling proactive regulation', category: 'regulations', impact: 'high', isFuture: true, confidenceLevels: [{ year: 2045, confidence: 20 }, { year: 2053, confidence: 48 }, { year: 2061, confidence: 74 }] },
  { year: '2047', title: 'Bio-Standards', description: 'Standards for human-device interfaces at cellular and genetic levels', category: 'standards', impact: 'high', isFuture: true, confidenceLevels: [{ year: 2047, confidence: 17 }, { year: 2056, confidence: 44 }, { year: 2065, confidence: 71 }] },
  { year: '2048', title: 'Regenerative Devices', description: 'Devices that stimulate tissue regeneration and organ repair', category: 'design', impact: 'high', isFuture: true, confidenceLevels: [{ year: 2048, confidence: 19 }, { year: 2057, confidence: 46 }, { year: 2066, confidence: 73 }] },
];

type EraFilter = 'ancient' | 'historical' | 'recent' | 'future' | 'all';

const ERA_OPTIONS: { value: EraFilter; label: string; color: string; years: string }[] = [
  { value: 'ancient', label: 'Ancient', color: 'bg-amber-500', years: 'Pre-1800' },
  { value: 'historical', label: 'Historical', color: 'bg-gray-400', years: '1800-2010' },
  { value: 'recent', label: 'Recent Past', color: 'bg-blue-500', years: '2010-2025' },
  { value: 'future', label: 'Future', color: 'bg-emerald-500', years: '2025+' },
  { value: 'all', label: 'Full Timeline', color: 'bg-gradient-to-r from-amber-500 via-blue-500 to-emerald-500', years: 'All Eras' },
];

const ITEMS_PER_PAGE = 10;

export default function MedicalDeviceTimeline() {
  const [activeCategory, setActiveCategory] = useState<TimelineCategory | 'all'>('all');
  const [showFuture, setShowFuture] = useState(true);
  const [selectedEra, setSelectedEra] = useState<EraFilter>('recent');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  // Extract year for sorting (handle ranges, BCE dates, decade ranges, and use first confidence level year if available)
  const getYearForSorting = (event: TimelineEvent): number => {
    if (event.confidenceLevels && event.confidenceLevels.length > 0) {
      return event.confidenceLevels[0].year;
    }
    if (event.year.includes('-')) {
      return parseInt(event.year.split('-')[0]);
    }
    // Handle BCE dates (convert to negative for proper sorting)
    if (event.year.includes('BCE')) {
      const yearStr = event.year.replace(' BCE', '').trim();
      return -parseInt(yearStr);
    }
    // Handle decade ranges like "1280s" - use the base year
    if (event.year.endsWith('s') && event.year.length > 4) {
      const yearStr = event.year.replace('s', '').trim();
      return parseInt(yearStr);
    }
    // Handle CE dates
    if (event.year.includes('CE')) {
      const yearStr = event.year.replace(' CE', '').trim();
      return parseInt(yearStr);
    }
    return parseInt(event.year);
  };

  const filteredEvents = TIMELINE_DATA.filter(event => {
    if (activeCategory !== 'all' && event.category !== activeCategory) return false;
    if (!showFuture && event.isFuture) return false;
    return true;
  }).sort((a, b) => {
    // Sort chronologically by year
    return getYearForSorting(a) - getYearForSorting(b);
  });

  const categoryColors = {
    design: 'border-green-500 bg-green-50 text-green-700',
    regulations: 'border-red-500 bg-red-50 text-red-700',
    standards: 'border-blue-500 bg-blue-50 text-blue-700',
    laser: 'border-yellow-500 bg-yellow-50 text-yellow-700',
  };

  const categoryIcons = {
    design: FlaskConical,
    regulations: Scale,
    standards: ClipboardCheck,
    laser: Zap,
  };

  const getCurrentEra = (year: string) => {
    if (year.includes('-')) {
      const startYear = parseInt(year.split('-')[0]);
      if (startYear >= 2045) return 'far-future';
      if (startYear >= 2035) return 'mid-future';
      if (startYear >= 2025) return 'near-future';
    }
    // Handle BCE dates
    if (year.includes('BCE')) {
      return 'ancient';
    }
    // Handle CE dates and decade ranges
    let yearStr = year.replace(' CE', '').replace('s', '').trim();
    const y = parseInt(yearStr);
    if (y >= 2010) return 'recent';
    if (y < 1800) return 'ancient';
    return 'historical';
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-8">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-3">
          <h2 className="text-lg sm:text-2xl font-bold text-gray-900">Medical Device Evolution Timeline</h2>
        </div>

        {/* Filters - Horizontal scroll on mobile */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide snap-x snap-mandatory touch-pan-x">
          <button
            onClick={() => setActiveCategory('all')}
            className={`flex-shrink-0 snap-start px-3 md:px-4 py-1.5 md:py-2 rounded-lg font-medium text-sm transition-colors ${activeCategory === 'all'
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveCategory('design')}
            className={`flex-shrink-0 snap-start px-3 md:px-4 py-1.5 md:py-2 rounded-lg font-medium text-sm transition-colors ${activeCategory === 'design'
              ? 'bg-green-600 text-white'
              : 'bg-green-100 text-green-700 hover:bg-green-200'
              }`}
          >
            Design & Development
          </button>
          <button
            onClick={() => setActiveCategory('regulations')}
            className={`flex-shrink-0 snap-start px-3 md:px-4 py-1.5 md:py-2 rounded-lg font-medium text-sm transition-colors ${activeCategory === 'regulations'
              ? 'bg-red-600 text-white'
              : 'bg-red-100 text-red-700 hover:bg-red-200'
              }`}
          >
            Regulations
          </button>
          <button
            onClick={() => setActiveCategory('standards')}
            className={`flex-shrink-0 snap-start px-3 md:px-4 py-1.5 md:py-2 rounded-lg font-medium text-sm transition-colors ${activeCategory === 'standards'
              ? 'bg-blue-600 text-white'
              : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
              }`}
          >
            Standards & QMS
          </button>
          <button
            onClick={() => setActiveCategory('laser')}
            className={`flex-shrink-0 snap-start px-3 md:px-4 py-1.5 md:py-2 rounded-lg font-medium text-sm transition-colors ${activeCategory === 'laser'
              ? 'bg-yellow-600 text-white'
              : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
              }`}
          >
            Laser & Photonics
          </button>

          <div className="flex-shrink-0 ml-auto hidden md:flex items-center gap-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showFuture}
                onChange={(e) => setShowFuture(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded"
              />
              <span className="text-sm text-gray-700">Show Future Projections</span>
            </label>
          </div>
        </div>

        {/* Era Selector - Above Timeline */}
        <div className="mt-4 flex items-center gap-3">
          <span className="text-sm font-medium text-gray-600">Time Period:</span>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.98) 100%)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9)',
                border: '1px solid rgba(0,0,0,0.08)',
              }}
            >
              <div className={`w-2.5 h-2.5 rounded-full ${ERA_OPTIONS.find(e => e.value === selectedEra)?.color || 'bg-gray-400'}`} />
              <span className="text-sm text-gray-800">
                {ERA_OPTIONS.find(e => e.value === selectedEra)?.label}
              </span>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isDropdownOpen && (
              <div
                className="absolute top-full left-0 mt-1 w-56 rounded-lg overflow-hidden z-50"
                style={{
                  background: 'rgba(255,255,255,0.98)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)',
                  border: '1px solid rgba(0,0,0,0.06)',
                }}
              >
                {ERA_OPTIONS.map((era, idx) => (
                  <button
                    key={era.value}
                    onClick={() => {
                      setSelectedEra(era.value);
                      setVisibleCount(ITEMS_PER_PAGE);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 text-left transition-all duration-150 hover:bg-gray-50 ${selectedEra === era.value ? 'bg-blue-50' : ''} ${idx !== ERA_OPTIONS.length - 1 ? 'border-b border-gray-100' : ''}`}
                  >
                    <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${era.color}`} />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-800">{era.label}</div>
                      <div className="text-xs text-gray-500">{era.years}</div>
                    </div>
                    {selectedEra === era.value && (
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line - stops before the load more/show less buttons */}
        <div className="absolute left-4 md:left-8 top-0 w-0.5 bg-gradient-to-b from-gray-300 via-blue-300 to-purple-300" style={{ bottom: '60px' }}></div>

        {/* Events */}
        <div className="space-y-6">
          {(() => {
            // Filter by era first
            const eraFiltered = filteredEvents.filter(event => {
              if (selectedEra === 'all') return true;
              const era = getCurrentEra(event.year);
              if (selectedEra === 'ancient') return era === 'ancient';
              if (selectedEra === 'historical') return era === 'historical';
              if (selectedEra === 'recent') return era === 'recent';
              if (selectedEra === 'future') return event.isFuture;
              return true;
            });
            // Show only visibleCount items
            const displayedEvents = eraFiltered.slice(0, visibleCount);
            const hasMore = eraFiltered.length > visibleCount;
            const totalCount = eraFiltered.length;

            return (
              <>
                {displayedEvents.map((event, index) => {
                  const era = getCurrentEra(event.year);
                  const isAncient = era === 'ancient';
                  const isHistorical = era === 'historical';
                  const isRecent = era === 'recent';
                  const isFuture = event.isFuture;

                  return (
                    <div key={index} className="relative pl-10 md:pl-20">
                      {/* Dot on timeline */}
                      <div className={`absolute left-2 md:left-6 top-2 w-3 h-3 md:w-5 md:h-5 rounded-full border-2 md:border-4 ${isFuture
                        ? 'border-purple-400 bg-purple-100'
                        : isRecent
                          ? 'border-blue-500 bg-blue-200'
                          : isAncient
                            ? 'border-amber-500 bg-amber-200'
                            : 'border-gray-400 bg-gray-200'
                        }`}></div>

                      {/* Event Card */}
                      <div className={`border-l-4 rounded-lg p-2 md:p-4 transition-all hover:shadow-md ${categoryColors[event.category]} ${isFuture ? 'relative overflow-hidden' : ''
                        }`}>
                        {isFuture && (
                          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-transparent opacity-30 rounded-bl-full"></div>
                        )}
                        <div className="relative flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2 flex-wrap flex-1">
                            {(() => {
                              const IconComponent = categoryIcons[event.category];
                              return <IconComponent className={`w-5 h-5 ${isFuture ? 'text-purple-600' : ''}`} />;
                            })()}
                            <div className="flex items-center gap-1 md:gap-2 flex-wrap">
                              <span className={`px-1.5 md:px-2 py-0.5 md:py-1 rounded text-[10px] md:text-xs font-bold ${isFuture
                                ? 'bg-gradient-to-r from-purple-100 to-purple-50 text-purple-800 border border-purple-200'
                                : isRecent
                                  ? 'bg-blue-200 text-blue-900'
                                  : isAncient
                                    ? 'bg-amber-100 text-amber-900 border border-amber-300'
                                    : 'bg-gray-200 text-gray-900'
                                }`}>
                                {event.year}
                              </span>
                              {isFuture && (
                                <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-purple-50 border border-purple-200">
                                  <Lightbulb className="w-3 h-3 text-purple-600" />
                                  <span className="text-xs font-semibold text-purple-700">Future</span>
                                </div>
                              )}
                            </div>
                          </div>
                          {event.link && (
                            <a
                              href={event.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors ml-2"
                              title="Learn more"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                        <h3 className="font-bold text-sm md:text-base text-gray-900 mb-1 relative">{event.title}</h3>
                        <p className="text-xs md:text-sm text-gray-700 mb-2 relative">{event.description}</p>
                        {event.confidenceLevels && (
                          <>
                            {/* Desktop: Full confidence timeline */}
                            <div className="hidden md:block relative mt-3 pt-3 border-t border-purple-100">
                              <div className="text-xs font-semibold text-purple-700 mb-2">Confidence Timeline:</div>
                              <div className="space-y-2">
                                {event.confidenceLevels.map((level, idx) => {
                                  const confidence = level.confidence;
                                  return (
                                    <div key={idx} className="flex items-center gap-3">
                                      <div className="flex-1">
                                        <div className="flex items-center justify-between mb-1">
                                          <span className="text-xs font-medium text-gray-700">{level.year}</span>
                                          <span className="text-xs font-semibold text-purple-700">{confidence}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                                          <div
                                            className="h-full bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 rounded-full transition-all duration-300"
                                            style={{ width: `${confidence}%` }}
                                          ></div>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                            {/* Mobile: Compact inline badges */}
                            <div className="md:hidden flex items-center gap-1.5 mt-2 flex-wrap">
                              <span className="text-[10px] text-purple-600 font-medium">Confidence:</span>
                              {event.confidenceLevels.slice(0, 2).map((level, idx) => (
                                <span key={idx} className="px-1.5 py-0.5 bg-purple-50 rounded text-[10px] text-purple-700 font-medium">
                                  {level.year}: {level.confidence}%
                                </span>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}

                {/* Load More / Show Less Buttons */}
                {(hasMore || visibleCount > ITEMS_PER_PAGE) && (
                  <div className="flex items-center justify-center gap-3 pt-4">
                    {visibleCount > ITEMS_PER_PAGE && (
                      <button
                        onClick={() => setVisibleCount(ITEMS_PER_PAGE)}
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all"
                      >
                        <ChevronUp className="w-4 h-4" />
                        Show Less
                      </button>
                    )}
                    {hasMore && (
                      <button
                        onClick={() => setVisibleCount(prev => prev + ITEMS_PER_PAGE)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 hover:scale-[1.02]"
                        style={{
                          background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                          color: 'white',
                          boxShadow: '0 4px 12px rgba(30,41,59,0.25)',
                        }}
                      >
                        <ChevronDown className="w-4 h-4" />
                        Load More ({totalCount - visibleCount} remaining)
                      </button>
                    )}
                    {hasMore && (
                      <button
                        onClick={() => setVisibleCount(totalCount)}
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all"
                      >
                        Show All
                      </button>
                    )}
                  </div>
                )}
              </>
            );
          })()}
        </div>


        {/* Era Labels - Hidden on mobile */}
        <div className="hidden md:flex mt-8 pl-20 items-center justify-center gap-4 text-sm flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <span className="text-gray-600">Ancient (Pre-1800)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-400"></div>
            <span className="text-gray-600">Historical (1800-2010)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-gray-600">Recent Past (2010-2025)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-400"></div>
            <span className="text-gray-600">Future Projections (2025+)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

