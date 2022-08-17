import { useState } from 'react';
import { Layout } from '@components/layout';
import { useTranslation } from 'react-i18next';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  message: string;
  access_key?: string;
  subject?: string;
};

const Contact = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<Inputs>({
    mode: 'onTouched',
  });
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [message, setMessage] = useState<boolean | string>(false);
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data, null, 2),
    })
      .then(async (response) => {
        let json = await response.json();
        if (json.success) {
          setIsSuccess(true);
          setMessage(json.message);
          reset();
        } else {
          setIsSuccess(false);
          setMessage(json.message);
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        setMessage('Client Error. Please check the console.log for more info');
      });
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <h1 className="mt-12 mb-4 text-2xl font-extrabold tracking-tight sm:text-4xl">
            {t('contact.title')}
          </h1>
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 dark:bg-slate-700">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <input
                type="hidden"
                value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY}
                {...register('access_key')}
              />
              <input
                type="hidden"
                value={`CookieCutter sent a message from Mission Control`}
                {...register('subject')}
              />
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    type="name"
                    autoComplete="name"
                    placeholder="Your name"
                    required
                    className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none  sm:text-sm  ${
                      errors.name
                        ? 'border-red-600 focus:border-red-600 ring-red-100 dark:ring-0'
                        : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:ring-0'
                    }`}
                    {...register('name', {
                      required: 'Full name is required',
                      maxLength: {
                        value: 60,
                        message: 'Max length exceeded',
                      },
                    })}
                  />
                  {errors.name && (
                    <div className="mt-1 text-red-600" role="alert">
                      <small>{errors.name.message}</small>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Email address"
                    required
                    className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none  sm:text-sm  ${
                      errors.email
                        ? 'border-red-600 focus:border-red-600 ring-red-100 dark:ring-0'
                        : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:ring-0'
                    }`}
                    {...register('email', {
                      required: 'Enter your email',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Please enter a valid email',
                      },
                    })}
                  />
                  {errors.email && (
                    <div className="mt-1 text-red-600" role="alert">
                      <small>{errors.email.message}</small>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="comment"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Add your comment
                </label>
                <div>
                  <textarea
                    rows={3}
                    id="message"
                    className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm  ${
                      errors.message
                        ? 'border-red-600 focus:border-red-600 ring-red-100 dark:ring-0'
                        : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:ring-0'
                    }`}
                    placeholder="Add your message..."
                    defaultValue={''}
                    {...register('message', {
                      required: 'Enter your Message',
                    })}
                  />
                  {errors.message && (
                    <div className="mt-1 text-red-600" role="alert">
                      <small>{errors.message.message}</small>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  data-testid="contact-submit"
                  className="w-full contact-submit flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {isSubmitting ? (
                    <svg
                      className="w-5 h-5 mx-auto text-white dark:text-black animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
            </form>
            {isSubmitSuccessful && isSuccess && (
              <div
                className="mt-3 text-sm text-center text-green-500"
                data-testid="submission-success"
              >
                {message || 'Success. Message sent successfully'}
              </div>
            )}
            {isSubmitSuccessful && !isSuccess && (
              <div
                className="mt-3 text-sm text-center text-red-500"
                data-testid="submission-error"
              >
                {message || 'Something went wrong. Please try later.'}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
