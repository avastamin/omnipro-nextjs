import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Image from 'next/image';
const footerNavigation = {
  support: [
    { name: 'Pricing', href: '/pricing' },
    { name: 'API', href: '/app/api' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/company/contact' },
  ],
  legal: [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
  ],
};

function Footer() {
  const { t } = useTranslation();
  return (
    <footer
      className="bg-gray-50 dark:bg-gray-dark dark:border-t dark:border-slate-700"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:pt-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-3 gap-8 xl:col-span-2">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 dark:text-custom-dark tracking-wider uppercase">
                {t('footer.navItems.support.title')}
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {footerNavigation.support.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href}>
                      <a className="text-base text-gray-500 dark:text-custom-dark hover:text-gray-900">
                        {t(`footer.navItems.support.${item.name}`)}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-400 dark:text-custom-dark tracking-wider uppercase">
                {t('footer.navItems.company.title')}
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href}>
                      <a className="text-base text-gray-500 dark:text-custom-dark hover:text-gray-900">
                        {t(`footer.navItems.company.${item.name}`)}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 dark:text-custom-dark tracking-wider uppercase">
                {t('footer.navItems.legal.title')}
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {footerNavigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href}>
                      <a className="text-base text-gray-500 dark:text-custom-dark hover:text-gray-900">
                        {t(`footer.navItems.legal.${item.name}`)}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 xl:mt-0">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-400 dark:text-custom-dark">
              {t('footer.subscribe.title')}
            </h3>
            <p className="mt-4 text-base text-gray-500 dark:text-custom-dark">
              {t('footer.subscribe.content')}
            </p>
            <form className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:placeholder-gray-400"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="subscribe-btn w-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-6 sm:mt-12  pt-8 mx-auto text-center">
          <p className="mt-8 text-base text-gray-400 dark:text-custom-dark md:mt-0 md:order-1">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
