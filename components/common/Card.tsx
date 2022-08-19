import Link from 'next/link';
import { SectionTitle } from './SectionTitle';

interface IProps {
  title: string;
  content: string;
  imageSrc: string;
  imageAlt: string;
}
export default function Card({ title, content, imageSrc, imageAlt }: IProps) {
  return (
    <div className="group relative max-w-sm border border-neutral-100 hover:shadow-3xl">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="py-10 px-9">
        <div>
          <SectionTitle>{title}</SectionTitle>
          <p className="mt-2.5 mb-10 text-lg text-body-dark">{content}</p>
        </div>
        <div className="text-secondary text-lg font-bold uppercase">
          <Link href="#">View Post</Link>
        </div>
      </div>
    </div>
  );
}
