import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

// "Inline" English and Arabic translations.
// We can localize to any language and any number of languages.
const resources = {
  en: {
    translation: {
      nav: {
        courses: 'Courses',
        blog: 'Blog',
        about: 'About',
        speakForUs: 'Speak for us',
        contact: 'Contact',
        joinCpdClub: 'Join CPD Club',
        existingCustomer: 'Existing customer?', //check it's usability
        pricing: 'Pricing', //check it's usability
        api: 'API', //check it's usability
        company: 'Company', //check it's usability
        signin: 'Sign in', //check it's usability
        signup: 'Sign up', //check it's usability
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
          explore: {
            title: 'Explore',
            Home: 'Home',
            Courses: 'Courses',
            Support: 'Support',
            'CPD Club': 'CPD Club',
          },
          contact: {
            title: 'Contact',
            address:
              'OmniPro Limited 20-22 Wenlock Road London, England N1 7GU',
            tel: 'T: +44 (0) 20 3582 6965',
            email: 'e: info@cpdstore.co.uk',
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
