import { Fragment } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { CiTrash } from 'react-icons/ci';
import { CiDeliveryTruck } from 'react-icons/ci';
import { CiMemoPad } from 'react-icons/ci';
import { CiCalendarDate } from 'react-icons/ci';
import { CiCreditCard1 } from 'react-icons/ci';

const STEPS = [
  { icon: <CiLocationOn />, label: 'Postcode', completed: true },
  { icon: <CiTrash />, label: 'Waste Type', completed: true },
  {
    icon: <CiDeliveryTruck />,
    label: 'Select Skip',
    completed: false,
    current: true,
  },
  { icon: <CiMemoPad />, label: 'Permit Check', completed: false },
  { icon: <CiCalendarDate />, label: 'Choose Date', completed: false },
  { icon: <CiCreditCard1 />, label: 'Payment', completed: false },
];

function ProgressStepIndicator() {
  return (
    <header className="step-indicator" data-testid="progress-step-indicator">
      {STEPS.map((step, index) => (
        <Fragment key={index}>
          <div
            className={`step ${
              step.completed
                ? 'completed'
                : step.current
                ? 'current'
                : 'remaining'
            }`}
          >
            <span className="step-icon">{step.icon}</span>
            <span className="step-label">{step.label}</span>
          </div>
          {index < STEPS.length - 1 && (
            <div
              className={`step-separator ${step.completed ? 'completed' : ''}`}
            ></div>
          )}
        </Fragment>
      ))}
    </header>
  );
}

export default ProgressStepIndicator;
