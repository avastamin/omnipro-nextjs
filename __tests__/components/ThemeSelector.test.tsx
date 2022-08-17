import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ThemeSelector from '@components/ThemeSelector';
import '@testing-library/jest-dom';

/* Your test code using useTranslation */
describe('ThemeSelector', () => {
  beforeEach(() => {
    render(<ThemeSelector />);
  });
  it('renders theme read only Theme', () => {
    expect(screen.getByText('Theme')).toBeInTheDocument();
  });

  test('Should not render ul component on initial render', () => {
    expect(screen.queryByTestId('theme-options')).not.toBeInTheDocument();
  });
  test('Should render ul component on initial render', () => {
    const buttonTheme = screen.getByTestId('theme-toggler');
    fireEvent.click(buttonTheme);
    expect(screen.getByTestId('theme-options')).toBeInTheDocument();
  });
});
