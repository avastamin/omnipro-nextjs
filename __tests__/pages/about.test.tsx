import { render, screen } from '@testing-library/react';
import About from '@pages/about';
import '@testing-library/jest-dom';

/* Your test code using useTranslation */
describe('About', () => {
  beforeEach(() => {
    render(<About />);
  });
  it('renders a heading', () => {
    const heading = screen.getByText('about.title');
    const content = screen.getByText('about.content');

    expect(heading).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });
});
