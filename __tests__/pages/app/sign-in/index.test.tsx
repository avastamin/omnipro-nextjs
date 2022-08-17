import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from '@testing-library/react';
import SignIn from '@pages/app/sign-in';

/* Your test code using useTranslation */
describe('Sign in', () => {
  beforeAll(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            success: true,
            message: 'Email sent successfully!',
          }),
      })
    );
  });
  afterAll(() => {
    global.fetch.mockClear();
    delete global.fetch;
  });
  const user = {
    email: 'demo@mail.com',
    password: '123456',
  };
  beforeEach(() => {
    render(<SignIn />);
  });
  it('renders a heading', () => {
    const heading = screen.getByText('auth.signIn.title');
    expect(heading).toBeInTheDocument();
    expect(screen.getByAltText('reSpeak Logo')).toBeInTheDocument();
  });
  it('should display required error when value is invalid', async () => {
    fireEvent.submit(screen.getByText(/Sign in/i));
    expect(await screen.findAllByRole('alert')).toHaveLength(2);
    //TODO:: We can also add button disable and onSubmit didn't call test
  });
  it('should display matching error when email is invalid', async () => {
    fireEvent.input(screen.getByLabelText('Email address'), {
      target: {
        value: 'test',
      },
    });
    fireEvent.input(screen.getByLabelText('Password'), {
      target: {
        value: user.password,
      },
    });

    fireEvent.submit(screen.getByText(/Sign in/i));
    expect(await screen.findAllByRole('alert')).toHaveLength(1);
    expect(screen.getByLabelText('Email address').value).toBe('test');
    expect(screen.getByLabelText('Password').value).toBe(user.password);
  });
  it('should not display error when value is valid', async () => {
    await act(() => {
      /* fire events that update state */
      fireEvent.input(screen.getByLabelText('Email address'), {
        target: {
          value: user.email,
        },
      });
      fireEvent.input(screen.getByLabelText('Password'), {
        target: {
          value: user.password,
        },
      });
      fireEvent.submit(screen.getByText(/Sign in/i));
    });

    expect(screen.queryAllByRole('alert')).toHaveLength(0);
    await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(0));
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(screen.getByLabelText('Email address').value).toBe('');
    expect(screen.getByLabelText('Password').value).toBe('');
    expect(screen.getByTestId('submission-success')).toBeInTheDocument();
  });
  it('should not display error when value is valid but promise is not success', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      })
    );
    await act(() => {
      /* fire events that update state */
      fireEvent.input(screen.getByLabelText('Email address'), {
        target: {
          value: user.email,
        },
      });
      fireEvent.input(screen.getByLabelText('Password'), {
        target: {
          value: user.password,
        },
      });
      fireEvent.submit(screen.getByText(/Sign in/i));
    });
    expect(screen.queryAllByRole('alert')).toHaveLength(0);
    await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(0));
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(screen.getByLabelText('Email address').value).toBe(user.email);
    expect(screen.getByLabelText('Password').value).toBe(user.password);
    expect(screen.getByTestId('submission-error')).toBeInTheDocument();
  });
  it('should not display error when value is valid but promise rejected', async () => {
    global.fetch = jest.fn(() => Promise.reject());
    await act(() => {
      /* fire events that update state */
      fireEvent.input(screen.getByLabelText('Email address'), {
        target: {
          value: user.email,
        },
      });
      fireEvent.input(screen.getByLabelText('Password'), {
        target: {
          value: user.password,
        },
      });
      fireEvent.submit(screen.getByText(/Sign in/i));
    });

    expect(screen.queryAllByRole('alert')).toHaveLength(0);
    await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(0));
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(screen.getByLabelText('Email address').value).toBe(user.email);
    expect(screen.getByLabelText('Password').value).toBe(user.password);
    expect(screen.getByTestId('submission-error')).toBeInTheDocument();
  });
});
