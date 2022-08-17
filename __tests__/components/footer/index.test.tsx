import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Footer from '@components/footer';
import '@testing-library/jest-dom';

/* Your test code using useTranslation */
describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('renders all elements', () => {
    expect(
      screen.getByText('footer.navItems.support.title')
    ).toBeInTheDocument();
    expect(
      screen.getByText('footer.navItems.support.Pricing')
    ).toBeInTheDocument();
    expect(screen.getByText('footer.navItems.support.API')).toBeInTheDocument();
    expect(
      screen.getByText('footer.navItems.company.title')
    ).toBeInTheDocument();
    expect(screen.getByText('footer.navItems.legal.title')).toBeInTheDocument();
    expect(screen.getByText('footer.subscribe.title')).toBeInTheDocument();
    expect(screen.getByText('footer.subscribe.content')).toBeInTheDocument();
    expect(screen.getByLabelText('Email address')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
    expect(screen.getByText('Subscribe')).toBeInTheDocument();
    expect(screen.getByText('footer.copyright')).toBeInTheDocument();
  });
  //TODO:: InComplete, finish this test
  it('Footer calls onSubmit with email when submit is clicked', async () => {
    const userEmail = 'demo@mail.com';

    const emailInput = screen.getByLabelText('Email address');
    await userEvent.type(emailInput, userEmail);
    expect(emailInput.value).toBe(userEmail);
  });
});
