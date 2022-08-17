import { render, screen } from '@testing-library/react';
import Pricing from '@pages/pricing';
import '@testing-library/jest-dom';

/* Your test code using useTranslation */
describe('Pricing', () => {
  beforeEach(() => {
    render(<Pricing />);
  });
  it('renders a heading', () => {
    const heading = screen.getByText('pricing.title');
    const content = screen.getByText('pricing.content');

    expect(heading).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });
});
