'use client';

import { useState } from 'react';
import { CheckCircle, Circle, ChevronRight, ChevronLeft } from 'lucide-react';

export interface StepperStep {
  id: string;
  title: string;
  description?: string;
  content: React.ReactNode;
  completed?: boolean;
}

interface StepperProps {
  steps: StepperStep[];
  onStepChange?: (stepId: string) => void;
  showProgress?: boolean;
  allowNavigation?: boolean;
}

export default function Stepper({ steps, onStepChange, showProgress = true, allowNavigation = true }: StepperProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

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

  const progress = ((currentStep + 1) / steps.length) * 100;

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

      {/* Step Indicators */}
      <div className="flex items-center justify-between mb-8 overflow-x-auto pb-4">
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
          {completedSteps.has(currentStep) && (
            <button
              onClick={() => markStepComplete(currentStep)}
              className="px-4 py-2 bg-green-100 text-green-700 rounded-lg text-sm font-medium hover:bg-green-200"
            >
              Mark Complete
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

