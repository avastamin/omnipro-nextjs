import { Layout } from '@components/layout';
import DemoForm from '@components/DemoForm';

const Demo = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <h1 className="mt-12 mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          Demo Form
        </h1>
        <p className="dark:text-slate-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi totam
          obcaecati dolor dignissimos sequi dolorem aut vero, aperiam culpa
          laudantium consequuntur rem temporibus molestiae error quia, delectus,
          eos assumenda asperiores!
        </p>
        <DemoForm login={() => alert('Alert goes here')} />
      </div>
    </Layout>
  );
};

export default Demo;
