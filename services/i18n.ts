import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

// "Inline" English and Arabic translations.
// We can localize to any language and any number of languages.
const resources = {
  en: {
    translation: {
      nav: {
        existingCustomer: 'Existing customer?',
        pricing: 'Pricing',
        api: 'API',
        company: 'Company',
        signin: 'Sign in',
        signup: 'Sign up',
      },
      auth: {
        signIn: {
          title: 'Sign in to your account',
          signupTitle: 'Sign up for free',
          emailLabel: 'Email address',
          emailRequired: 'Email is required',
          emailRequiredMsg: 'Please enter a valid email',
          buttonLabel: 'Submit',
        },
        signUp: { title: 'Sign up for an account', cta: 'Get started' },
      },
      home: {
        title: 'Home',
      },
      about: {
        title: 'About',
        imageAlt: 'imageAlt text',
        content: 'About page content ',
      },
      pricing: {
        title: 'Pricing',
        imageAlt: 'imageAlt text',
        content: 'Pricing page content ',
      },
      api: {
        title: 'API',
        imageAlt: 'imageAlt text',
        content: 'API page content ',
      },
      company: {
        title: 'Company',
        imageAlt: 'imageAlt text',
        content: 'Company page content ',
      },
      contact: {
        title: 'Contact',
        imageAlt: 'imageAlt text',
        content: 'Contact page content ',
      },
      privacy: { title: 'Privacy' },
      terms: { title: 'Terms' },
      footer: {
        navItems: {
          support: {
            title: 'Support',
            Pricing: 'Pricing',
            Documentation: 'Documentation',
            API: 'API',
          },
          company: {
            title: 'Company',
            About: 'About',
            Partners: 'Partners',
            Contact: 'Contact',
          },
          legal: {
            title: 'Legal',
            Privacy: 'Privacy',
            Terms: 'Terms',
          },
        },
        subscribe: {
          title: 'Subscribe to our newsletter',
          content:
            'The latest news, articles, and resources, sent to your inbox weekly.',
        },
        copyright: '© 2022 cpdstore-nextjs, All rights reserved.',
      },
    },
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
  debug: false,
});

export default i18next;
