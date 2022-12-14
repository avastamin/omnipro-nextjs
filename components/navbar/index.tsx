import { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import { useTranslation } from 'react-i18next';
import {
  MenuIcon,
  XIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline';
import clsx from 'clsx';
import Image from 'next/image';
import ThemeSelector from '../ThemeSelector';
import CPDStoreLogo from '../../public/CPD-Store-Logo.png';
import Button from '@components/common/Button';

function Navbar() {
  const { t } = useTranslation();
  let [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0);
    }
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header
      className={clsx(' transition duration-500', {
        'dark:bg-gray-dark dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-800':
          isScrolled,
        'dark:bg-transparent ': !isScrolled,
      })}
    >
      <Popover className="relative bg-white dark:bg-gray-dark">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-4 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a>
                <span className="sr-only">siteLogo</span>
                <div className="relative w-52 h-20">
                  <Image
                    src={CPDStoreLogo}
                    alt="reSpeak Logo"
                    layout="fill"
                    width="195px"
                    height="69px"
                  />
                </div>
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden flex items-center">
            <ThemeSelector className="relative z-10 mr-4" />
            <Popover.Button className="bg-white dark:bg-custom-blue rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-body-dark hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group
            as="nav"
            className="hidden md:flex space-x-10 items-center"
          >
            <Link href="/courses">
              <a className="text-base font-medium text-body-dark dark:text-custom-dark hover:text-gray-900">
                {t('nav.courses')}
              </a>
            </Link>
            <Link href="/blog">
              <a className="text-base font-medium text-body-dark dark:text-custom-dark hover:text-gray-900">
                {t('nav.blog')}
              </a>
            </Link>
            <Link href="/about">
              <a className="text-base font-medium text-body-dark dark:text-custom-dark hover:text-gray-900">
                {t('nav.about')}
              </a>
            </Link>
            <Link href="/speak-for-us">
              <a className="text-base font-medium text-body-dark dark:text-custom-dark hover:text-gray-900">
                {t('nav.speakForUs')}
              </a>
            </Link>
            <Link href="/contact">
              <a className="text-base font-medium text-body-dark dark:text-custom-dark hover:text-gray-900">
                {t('nav.contact')}
              </a>
            </Link>
            <Link href="/search">
              <a className="text-base font-medium text-body-dark dark:text-custom-dark hover:text-gray-900">
                <SearchIcon className="h-6 w-6" aria-hidden="true" />
              </a>
            </Link>
            <Link href="/login">
              <a className="text-base font-medium text-body-dark dark:text-custom-dark hover:text-gray-900">
                <UserIcon className="h-6 w-6" aria-hidden="true" />
              </a>
            </Link>
            <Link href="/join-cpd-club">
              <a className="text-base font-medium text-body-dark dark:text-custom-dark hover:text-gray-900">
                <Button className="px-8 py-1.5 font-medium">
                  {t('nav.joinCpdClub')}
                </Button>
              </a>
            </Link>
          </Popover.Group>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50 dark:divide-slate-500 dark:bg-gray-dark">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div className="h-12 w-20 relative">
                    <Image
                      src="https://tailwindui.com/img/logos/workflow-mark-purple-600-to-indigo-600.svg"
                      alt="reSpeak Logo"
                      layout="fill"
                    />
                  </div>

                  <div className="-mr-2">
                    <Popover.Button className="bg-white dark:bg-custom-blue rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-body-dark hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="py-6 px-5">
                <div className="grid grid-cols-2 gap-4">
                  <Link href="/pricing">
                    <a className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-white">
                      {t('nav.pricing')}
                    </a>
                  </Link>
                  <Link href="/app/api">
                    <a className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-white">
                      {t('nav.api')}
                    </a>
                  </Link>
                  <Link href="/company">
                    <a className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-white">
                      {t('nav.company')}
                    </a>
                  </Link>
                </div>
                <div className="mt-6">
                  <Link href="/app/sign-up">
                    <a className="w-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700">
                      {t('nav.signup')}
                    </a>
                  </Link>
                  <p className="mt-6 text-center text-base font-medium text-body-dark ">
                    {t('nav.existingCustomer')}
                    <Link href="/app/sign-in">
                      <a className="text-gray-900 dark:text-white">
                        {' '}
                        {t('nav.signin')}
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  );
}

export default Navbar;
