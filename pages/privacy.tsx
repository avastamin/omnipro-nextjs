import { useTranslation } from 'react-i18next';
import { Layout } from '@components/layout';
const Privacy = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <h1 className="mt-12 font-manrope text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          {t('privacy.title')}
        </h1>
      </div>
    </Layout>
  );
};

export default Privacy;
