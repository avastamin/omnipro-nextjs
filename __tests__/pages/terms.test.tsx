import { render, screen } from '@testing-library/react';
import Terms from '../../pages/terms';
import '@testing-library/jest-dom';

/* Your test code using useTranslation */
describe('Privacy', () => {
  beforeEach(() => {
    render(<Terms />);
  });
  it('renders a heading', () => {
    const heading = screen.getByText('terms.title');

    expect(heading).toBeInTheDocument();
  });
});
