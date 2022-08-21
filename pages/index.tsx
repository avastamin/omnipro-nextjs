import type { NextPage } from 'next';
import { Layout } from '@components/layout';
import { MainTitle } from '@components/common/MainTitle';
import { SectionTitle } from '@components/common/SectionTitle';
import Button from '@components/common/Button';
import Card from '@components/common/Card';
import { useTranslation } from 'react-i18next';

const posts = [
  {
    id: 1,
    title: 'INVIDUNT UT LABORE ET DOLORE MAGNA',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: 'image alt goes here',
    link: '#',
  },
  {
    id: 2,
    title: 'Lorem Ipsum is simply dummy text',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
    imageAlt: 'image alt goes here',
    link: '#',
  },
  {
    id: 3,
    title: 'Where can I get some?',
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look ev",
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
    imageAlt: 'image alt goes here',
    link: '#',
  },
];
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
        <div className="relative space-x-2">
          <Button size="small" className="uppercase">
            Checkout
          </Button>
          <Button size="medium" className="uppercase">
            Checkout
          </Button>
          <Button size="large" className="uppercase">
            Checkout
          </Button>
          <Button size="large" className="uppercase">
            START DOING CPD THE RIGHT WAY
          </Button>
        </div>

        <div className="my-16 mx-16 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {posts.map((post) => {
            return (
              <Card
                key={post.id}
                title={post.title}
                content={post.content}
                imageSrc={post.imageSrc}
                imageAlt={post.imageAlt}
                link={post.link}
              />
            );
          })}
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
