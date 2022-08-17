import { render, screen } from '@testing-library/react';
import Privacy from '@pages/privacy';
import '@testing-library/jest-dom';

/* Your test code using useTranslation */
describe('Privacy', () => {
  beforeEach(() => {
    render(<Privacy />);
  });
  it('renders a heading', () => {
    const heading = screen.getByText('privacy.title');

    expect(heading).toBeInTheDocument();
  });
});
