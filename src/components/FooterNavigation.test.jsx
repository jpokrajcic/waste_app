import FooterNavigation from './FooterNavigation';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';

describe('FooterNavigation', () => {
  const selectedSkip = {
    size: 8,
    hire_period_days: 14,
    price_before_vat: 250,
  };

  test('renders selected skip info and enables Continue when selectedSkip is provided', () => {
    render(<FooterNavigation selectedSkip={selectedSkip} />);
    const infoDiv = screen.getByText(/Selected skip:/).parentElement;
    expect(infoDiv.className).toContain('selected-info');
    expect(infoDiv.className).not.toContain('selected-info-hidden');
    expect(
      screen.getByText('8 yard skip - 14 days hire - £250 (pre VAT)')
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Continue/i })).toBeEnabled();
  });

  test('hides selected skip info and disables Continue when selectedSkip is not provided', () => {
    render(<FooterNavigation />);
    const infoDiv = screen.getByText(/Selected skip:/).parentElement;
    expect(infoDiv.className).toContain('selected-info-hidden');
    expect(screen.getByRole('button', { name: /Continue/i })).toBeDisabled();
  });

  test('renders Back button always', () => {
    render(<FooterNavigation />);
    expect(screen.getByRole('button', { name: /Back/i })).toBeInTheDocument();
  });

  test('calls backClickHandler when Back button is clicked', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    render(<FooterNavigation selectedSkip={selectedSkip} />);
    fireEvent.click(screen.getByRole('button', { name: /Back/i }));
    expect(consoleSpy).toHaveBeenCalledWith('Back clicked');
    consoleSpy.mockRestore();
  });

  test('calls continueClickHandler when Continue button is clicked and selectedSkip is provided', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    render(<FooterNavigation selectedSkip={selectedSkip} />);
    fireEvent.click(screen.getByRole('button', { name: /Continue/i }));
    expect(consoleSpy).toHaveBeenCalledWith(
      'Continue clicked with selected skip:',
      selectedSkip
    );
    consoleSpy.mockRestore();
  });

  test('does not call continueClickHandler when Continue button is clicked and selectedSkip is not provided', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    render(<FooterNavigation />);
    fireEvent.click(screen.getByRole('button', { name: /Continue/i }));
    // Should not log because button is disabled
    expect(consoleSpy).not.toHaveBeenCalledWith(
      expect.stringContaining('Continue clicked')
    );
    consoleSpy.mockRestore();
  });

  test('renders correct details for different selectedSkip values', () => {
    const skip = { size: 4, hire_period_days: 7, price_before_vat: 120 };
    render(<FooterNavigation selectedSkip={skip} />);
    expect(
      screen.getByText('4 yard skip - 7 days hire - £120 (pre VAT)')
    ).toBeInTheDocument();
  });
});
