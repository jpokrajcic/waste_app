import { render, screen } from '@testing-library/react';
import PageTitle from './PageTitle';

describe('PageTitle', () => {
  test('renders title and description', () => {
    render(<PageTitle title="Test Title" description="Test Description" />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Test Title'
    );
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  test('renders disclaimer when provided', () => {
    render(
      <PageTitle
        title="Title"
        description="Description"
        disclaimer="This is a disclaimer"
      />
    );
    expect(screen.getByText('This is a disclaimer')).toBeInTheDocument();
    expect(screen.getByText('This is a disclaimer').className).toContain(
      'disclaimer'
    );
  });

  test('does not render disclaimer when not provided', () => {
    render(<PageTitle title="Title" description="Description" />);
    const disclaimer = screen.queryByText('This is a disclaimer');
    expect(disclaimer).not.toBeInTheDocument();
  });
});
