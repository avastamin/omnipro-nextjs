import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from '@testing-library/react';
import Contact from '@pages/company/contact';
import '@testing-library/jest-dom';

describe('Contact', () => {
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
    name: 'michelle',
    email: 'demo@mail.com',
    message: 'Message content',
  };
  beforeEach(() => {
    render(<Contact />);
  });
  it('should display required error when value is invalid', async () => {
    fireEvent.submit(screen.getByText(/Send Message/i));

    expect(await screen.findAllByRole('alert')).toHaveLength(3);
    //TODO:: We can also add button disable and onSubmit didn't call test
  });
  it('should display matching error when email is invalid', async () => {
    fireEvent.input(screen.getByPlaceholderText(/Email address/i), {
      target: {
        value: 'test',
      },
    });
    fireEvent.input(screen.getByLabelText('Name'), {
      target: {
        value: user.name,
      },
    });
    fireEvent.input(screen.getByPlaceholderText(/Add your message.../i), {
      target: {
        value: user.message,
      },
    });
    fireEvent.submit(screen.getByText(/Send Message/i));

    expect(await screen.findAllByRole('alert')).toHaveLength(1);
    //expect(mockLogin).not.toBeCalled();
    expect(screen.getByLabelText('Name').value).toBe(user.name);
    expect(screen.getByPlaceholderText(/Email address/i).value).toBe('test');
    expect(screen.getByPlaceholderText(/Add your message.../i).value).toBe(
      user.message
    );
  });

  it('should display max length error when name is too long', async () => {
    fireEvent.input(screen.getByPlaceholderText(/Email address/i), {
      target: {
        value: user.email,
      },
    });
    fireEvent.input(screen.getByLabelText('Name'), {
      target: {
        value:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
    });
    fireEvent.input(screen.getByPlaceholderText(/Add your message.../i), {
      target: {
        value: user.message,
      },
    });
    fireEvent.submit(screen.getByText(/Send Message/i));

    expect(await screen.findAllByRole('alert')).toHaveLength(1);

    expect(screen.getByLabelText('Name').value).toBe(
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    );
    expect(screen.getByPlaceholderText(/Email address/i).value).toBe(
      user.email
    );
    expect(screen.getByPlaceholderText(/Add your message.../i).value).toBe(
      user.message
    );
  });
  it('should not display error when value is valid', async () => {
    await act(() => {
      /* fire events that update state */
      fireEvent.input(screen.getByPlaceholderText(/Email address/i), {
        target: {
          value: user.email,
        },
      });
      fireEvent.input(screen.getByLabelText('Name'), {
        target: {
          value: user.name,
        },
      });
      fireEvent.input(screen.getByPlaceholderText(/Add your message.../i), {
        target: {
          value: user.message,
        },
      });
      fireEvent.submit(screen.getByText(/Send Message/i));
    });

    expect(screen.queryAllByRole('alert')).toHaveLength(0);
    await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(0));
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(screen.getByLabelText('Name').value).toBe('');
    expect(screen.getByPlaceholderText(/Email address/i).value).toBe('');
    expect(screen.getByPlaceholderText(/Add your message.../i).value).toBe('');
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
      fireEvent.input(screen.getByPlaceholderText(/Email address/i), {
        target: {
          value: user.email,
        },
      });
      fireEvent.input(screen.getByLabelText('Name'), {
        target: {
          value: user.name,
        },
      });
      fireEvent.input(screen.getByPlaceholderText(/Add your message.../i), {
        target: {
          value: user.message,
        },
      });
      fireEvent.submit(screen.getByText(/Send Message/i));
    });

    expect(screen.queryAllByRole('alert')).toHaveLength(0);
    await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(0));
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(screen.getByLabelText('Name').value).toBe(user.name);
    expect(screen.getByPlaceholderText(/Email address/i).value).toBe(
      user.email
    );
    expect(screen.getByPlaceholderText(/Add your message.../i).value).toBe(
      user.message
    );
    expect(screen.getByTestId('submission-error')).toBeInTheDocument();
  });
  it('should not display error when value is valid but promise rejected', async () => {
    global.fetch = jest.fn(() => Promise.reject());
    await act(() => {
      /* fire events that update state */
      fireEvent.input(screen.getByPlaceholderText(/Email address/i), {
        target: {
          value: user.email,
        },
      });
      fireEvent.input(screen.getByLabelText('Name'), {
        target: {
          value: user.name,
        },
      });
      fireEvent.input(screen.getByPlaceholderText(/Add your message.../i), {
        target: {
          value: user.message,
        },
      });
      fireEvent.submit(screen.getByText(/Send Message/i));
    });

    expect(screen.queryAllByRole('alert')).toHaveLength(0);
    await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(0));
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(screen.getByLabelText('Name').value).toBe(user.name);
    expect(screen.getByPlaceholderText(/Email address/i).value).toBe(
      user.email
    );
    expect(screen.getByPlaceholderText(/Add your message.../i).value).toBe(
      user.message
    );
    expect(screen.getByTestId('submission-error')).toBeInTheDocument();
  });
});
