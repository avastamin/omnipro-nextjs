import { Layout } from '@components/layout';
import { useTranslation } from 'react-i18next';
const Pricing = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <h1 className="mt-12 mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          {t('pricing.title')}
        </h1>
        <p className="dark:text-slate-500"> {t('pricing.content')}</p>
      </div>
    </Layout>
  );
};

export default Pricing;
