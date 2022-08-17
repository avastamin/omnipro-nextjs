import { render, screen } from '@testing-library/react';
import Company from '@pages/company';
import '@testing-library/jest-dom';

/* Your test code using useTranslation */
describe('Company', () => {
  beforeEach(() => {
    render(<Company />);
  });
  it('renders a heading', () => {
    const heading = screen.getByText('company.title');
    const content = screen.getByText('company.content');

    expect(heading).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });
});
