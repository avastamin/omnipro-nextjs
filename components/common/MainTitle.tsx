interface Props {
  children: string;
  className: string;
}

export const MainTitle: React.FC<Props> = ({ children, className }) => {
  return (
    <h1 className={`text-5xl font-bold leading-14` + className}>{children}</h1>
  );
};
