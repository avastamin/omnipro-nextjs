import React from 'react';
import { render, screen } from '@testing-library/react';
import { Layout } from '@components/layout';
import '@testing-library/jest-dom';

/* Your test code using useTranslation */
describe('Layout', () => {
  it('renders layout', () => {
    const { container } = render(
      <Layout>
        <p>demo</p>
      </Layout>
    );
    expect(container.querySelector('main')).toBeInTheDocument();
    expect(screen.getByText(/demo/i)).toBeInTheDocument();
  });
});
