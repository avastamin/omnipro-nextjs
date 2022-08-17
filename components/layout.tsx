import Navbar from './navbar';
import Footer from './footer';

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="antialiased text-gray-500 dark:text-custom-dark">
      <Navbar />
      <main className="min-h-[75vh] py-1 px-4 sm:px-0">{children}</main>
      <Footer />
    </div>
  );
};
