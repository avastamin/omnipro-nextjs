import type { NextPage } from 'next';
import { Layout } from '@components/layout';
import { useTranslation } from 'react-i18next';

const Home: NextPage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <h1 className="mt-12 font-manrope text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          {t('home.title')}
        </h1>
      </div>
    </Layout>
  );
};

export default Home;
