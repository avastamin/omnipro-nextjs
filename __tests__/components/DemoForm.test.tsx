import React from 'react';
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from '@testing-library/react';
import DemoForm from '@components/DemoForm';

const mockLogin = jest.fn((email, password) => {
  return Promise.resolve({ email, password });
});

describe('DemoForm', () => {
  beforeEach(() => {
    render(<DemoForm login={mockLogin} />);
  });

  it('should display required error when value is invalid', async () => {
    fireEvent.submit(screen.getByRole('button'));

    expect(await screen.findAllByRole('alert')).toHaveLength(2);
    expect(mockLogin).not.toBeCalled();
  });

  it('should display matching error when email is invalid', async () => {
    fireEvent.input(screen.getByRole('textbox', { name: /email/i }), {
      target: {
        value: 'test',
      },
    });

    fireEvent.input(screen.getByLabelText('password'), {
      target: {
        value: 'password',
      },
    });

    fireEvent.submit(screen.getByRole('button'));

    expect(await screen.findAllByRole('alert')).toHaveLength(1);
    expect(mockLogin).not.toBeCalled();
    expect(screen.getByRole('textbox', { name: /email/i }).value).toBe('test');
    expect(screen.getByLabelText('password').value).toBe('password');
  });

  it('should display min length error when password is invalid', async () => {
    fireEvent.input(screen.getByRole('textbox', { name: /email/i }), {
      target: {
        value: 'test@mail.com',
      },
    });

    fireEvent.input(screen.getByLabelText('password'), {
      target: {
        value: 'pass',
      },
    });

    fireEvent.submit(screen.getByRole('button'));

    expect(await screen.findAllByRole('alert')).toHaveLength(1);
    expect(mockLogin).not.toBeCalled();
    expect(screen.getByRole('textbox', { name: /email/i }).value).toBe(
      'test@mail.com'
    );
    expect(screen.getByLabelText('password').value).toBe('pass');
  });

  it('should not display error when value is valid', async () => {
    await act(() => {
      /* fire events that update state */
      fireEvent.input(screen.getByRole('textbox', { name: /email/i }), {
        target: {
          value: 'test@mail.com',
        },
      });

      fireEvent.input(screen.getByLabelText('password'), {
        target: {
          value: 'password',
        },
      });
      fireEvent.submit(screen.getByRole('button'));
    });

    await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(0));
    expect(mockLogin).toBeCalledWith('test@mail.com', 'password');
    expect(screen.getByRole('textbox', { name: /email/i }).value).toBe('');
    expect(screen.getByLabelText('password').value).toBe('');
  });
});
