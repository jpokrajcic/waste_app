import { render, screen, fireEvent } from '@testing-library/react';
import SkipGrid from './SkipGrid';

describe('SkipGrid', () => {
  const skipSizesMock = [
    {
      size: 4,
      hire_period_days: 7,
      price_before_vat: 120,
      allows_heavy_waste: true,
      roadAllowed: true,
    },
    {
      size: 6,
      hire_period_days: 14,
      price_before_vat: 180,
      allows_heavy_waste: false,
      roadAllowed: false,
    },
  ];

  test('renders all skip cards with correct info', () => {
    render(
      <SkipGrid
        skipSizes={skipSizesMock}
        selectedSkip={null}
        setSelectedSkip={() => {}}
      />
    );
    expect(screen.getByText('4 Yard Skip')).toBeInTheDocument();
    expect(screen.getByText('7 day hire period')).toBeInTheDocument();
    expect(screen.getByText('£120')).toBeInTheDocument();

    expect(screen.getByText('6 Yard Skip')).toBeInTheDocument();
    expect(screen.getByText('14 day hire period')).toBeInTheDocument();
    expect(screen.getByText('£180')).toBeInTheDocument();
  });

  test('shows warning for skips not allowed on the road', () => {
    render(
      <SkipGrid
        skipSizes={skipSizesMock}
        selectedSkip={null}
        setSelectedSkip={() => {}}
      />
    );
    expect(screen.getByText('Not Allowed On The Road')).toBeInTheDocument();
  });

  test('disables select button and card for skips not allowing heavy waste', () => {
    render(
      <SkipGrid
        skipSizes={skipSizesMock}
        selectedSkip={null}
        setSelectedSkip={() => {}}
      />
    );
    const disabledBtn = screen.getByText('Not Suitable for Heavy Waste');
    expect(disabledBtn).toBeDisabled();
    const disabledCard = disabledBtn.closest('.skip-card');
    expect(disabledCard.className).toContain('disabled');
  });

  test('calls setSelectedSkip when a suitable skip card is clicked', () => {
    const setSelectedSkip = vi.fn();
    render(
      <SkipGrid
        skipSizes={skipSizesMock}
        selectedSkip={null}
        setSelectedSkip={setSelectedSkip}
      />
    );
    fireEvent.click(screen.getByText('4 Yard Skip').closest('.skip-card'));
    expect(setSelectedSkip).toHaveBeenCalledWith(skipSizesMock[0]);
  });

  test('does not call setSelectedSkip when an unsuitable skip card is clicked', () => {
    const setSelectedSkip = vi.fn();
    render(
      <SkipGrid
        skipSizes={skipSizesMock}
        selectedSkip={null}
        setSelectedSkip={setSelectedSkip}
      />
    );
    fireEvent.click(screen.getByText('6 Yard Skip').closest('.skip-card'));
    expect(setSelectedSkip).not.toHaveBeenCalled();
  });

  test('shows "Selected" on button for selected skip', () => {
    render(
      <SkipGrid
        skipSizes={skipSizesMock}
        selectedSkip={skipSizesMock[0]}
        setSelectedSkip={() => {}}
      />
    );
    expect(screen.getByText('Selected')).toBeInTheDocument();
  });
});
