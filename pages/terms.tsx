import { useTranslation } from 'react-i18next';
import { Layout } from '@components/layout';
const Terms = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <h1 className="mt-12 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          {t('terms.title')}
        </h1>
      </div>
    </Layout>
  );
};

export default Terms;
