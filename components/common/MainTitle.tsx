interface Props {
  children: string;
}

export const MainTitle: React.FC<Props> = ({ children }) => {
  return <h1 className="text-5xl font-bold leading-14">{children}</h1>;
};
