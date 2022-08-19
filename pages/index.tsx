import type { NextPage } from 'next';
import { Layout } from '@components/layout';
import { MainTitle } from '@components/common/MainTitle';
import { SectionTitle } from '@components/common/SectionTitle';
import Button from '@components/common/Button';
import Card from '@components/common/Card';
import { useTranslation } from 'react-i18next';

const Home: NextPage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 my-4">
        <MainTitle>{t('home.title')}</MainTitle>
        <SectionTitle>{t('home.title')}</SectionTitle>
        <p className="text-lg my-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </p>
        <Button className="text-1.5xl h-[69px] px-8">
          START DOING CPD THE RIGHT WAY
        </Button>
        <div className="my-16 mx-16">
          <Card
            title="INVIDUNT UT LABORE ET DOLORE MAGNA"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            imageSrc="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
            imageAlt="Image alt goes here"
            link="#"
          />
          <Card
            title="Lorem Ipsum is simply dummy text"
            content="Lorem Ipsum has been the industry."
            imageSrc="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
            imageAlt="Image alt goes here"
            link="#"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
