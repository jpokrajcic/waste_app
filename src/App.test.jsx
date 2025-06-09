import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
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
          ]),
      })
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('renders static components', () => {
    render(<App />);
    expect(screen.getByTestId('progress-step-indicator')).toBeInTheDocument();
    expect(screen.getByTestId('page-title')).toBeInTheDocument();
    expect(screen.getByTestId('skip-grid')).toBeInTheDocument();
    expect(screen.getByTestId('footer-nav')).toBeInTheDocument();
  });

  test('fetches and displays skip sizes', async () => {
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText('4 Yard Skip')).toBeInTheDocument();
      expect(screen.getByText('6 Yard Skip')).toBeInTheDocument();
    });
  });

  test('handles fetch error gracefully', async () => {
    global.fetch = vi.fn(() => Promise.reject('API is down'));
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    render(<App />);
    await waitFor(() => {
      expect(errorSpy).toHaveBeenCalledWith(
        'Error fetching skip sizes:',
        'API is down'
      );
    });
    errorSpy.mockRestore();
  });
});
