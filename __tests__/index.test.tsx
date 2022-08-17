import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';

/* Your test code using useTranslation */
describe('Home', () => {
  beforeEach(() => {
    render(<Home />);
  });
  it('renders a heading', () => {
    const heading = screen.getByText('home.title');

    expect(heading).toBeInTheDocument();
  });
});
