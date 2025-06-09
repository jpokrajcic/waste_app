import { render, screen } from '@testing-library/react';
import ProgressStepIndicator from './ProgressStepIndicator';

describe('ProgressStepIndicator', () => {
  test('renders all step labels', () => {
    render(<ProgressStepIndicator />);
    expect(screen.getByText('Postcode')).toBeInTheDocument();
    expect(screen.getByText('Waste Type')).toBeInTheDocument();
    expect(screen.getByText('Select Skip')).toBeInTheDocument();
    expect(screen.getByText('Permit Check')).toBeInTheDocument();
    expect(screen.getByText('Choose Date')).toBeInTheDocument();
    expect(screen.getByText('Payment')).toBeInTheDocument();
  });

  test('renders correct number of steps and separators', () => {
    render(<ProgressStepIndicator />);
    // 6 steps
    expect(document.querySelectorAll('.step-icon').length).toBe(6); // icons rendered as SVGs
    // 5 separators (between 6 steps)
    expect(document.querySelectorAll('.step-separator').length).toBe(5);
  });

  test('applies correct classes for completed, current, and remaining steps', () => {
    render(<ProgressStepIndicator />);
    const steps = document.querySelectorAll('.step');
    expect(steps[0].className).toContain('completed');
    expect(steps[1].className).toContain('completed');
    expect(steps[2].className).toContain('current');
    expect(steps[3].className).toContain('remaining');
    expect(steps[4].className).toContain('remaining');
    expect(steps[5].className).toContain('remaining');
  });

  test('applies completed class to separators after completed steps', () => {
    render(<ProgressStepIndicator />);
    const separators = document.querySelectorAll('.step-separator');
    // First two separators should have 'completed' class
    expect(separators[0].className).toContain('completed');
    expect(separators[1].className).toContain('completed');
    // The rest should not
    expect(separators[2].className).not.toContain('completed');
    expect(separators[3].className).not.toContain('completed');
    expect(separators[4].className).not.toContain('completed');
  });
});
