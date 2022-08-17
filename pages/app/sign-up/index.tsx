import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  email: string;
  access_key?: string;
  subject?: string;
};

const SignUp = () => {
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
    <>
      <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-dark">
        <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
          <Link href="/">
            <a>
              <span className="sr-only">siteLogo</span>
              <div className="mx-auto h-12 sm:h-14 w-48 sm:w-60 relative">
                <Image
                  src="https://tailwindui.com/img/logos/workflow-mark-purple-600-to-indigo-600.svg"
                  alt="reSpeak Logo"
                  width="230"
                  height="57"
                  layout="responsive"
                />
              </div>
            </a>
          </Link>

          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            {t('auth.signUp.title')}
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 dark:bg-slate-700">
            <form
              className="mt-4 sm:flex sm:max-w-xl"
              onSubmit={handleSubmit(onSubmit)}
            >
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
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="email-address"
                autoComplete="email"
                required
                placeholder="Enter your email"
                {...register('email', {
                  required: 'Enter your email',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Please enter a valid email',
                  },
                })}
                className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none  sm:text-sm  ${
                  errors.email
                    ? 'border-red-600 focus:border-red-600 ring-red-100 dark:ring-0'
                    : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:ring-0'
                }`}
              />

              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  data-testid="submit"
                  className="w-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
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
                    t('auth.signUp.cta')
                  )}
                </button>
              </div>
            </form>
            {errors.email && (
              <div className="mt-1 text-red-600" role="alert">
                <small>{errors.email.message}</small>
              </div>
            )}
          </div>
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
    </>
  );
};

export default SignUp;
