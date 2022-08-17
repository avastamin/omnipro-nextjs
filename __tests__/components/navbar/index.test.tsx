import { render, screen } from '@testing-library/react';
import Navbar from '@components/navbar';
import '@testing-library/jest-dom';

/* Your test code using useTranslation */
describe('Navbar', () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  it('renders Navbar', () => {
    expect(screen.getByText('siteLogo')).toBeInTheDocument();
  });
  test('shows the logo', () => {
    expect(screen.getByAltText('reSpeak Logo')).toBeInTheDocument();
    expect(screen.getByText('nav.pricing')).toBeInTheDocument();
    expect(screen.getByText('nav.api')).toBeInTheDocument();
    expect(screen.getByText('nav.company')).toBeInTheDocument();
    expect(screen.getByText('nav.signup')).toBeInTheDocument();
  });
});
