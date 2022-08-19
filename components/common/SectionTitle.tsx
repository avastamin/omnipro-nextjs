interface Props {
  children: string;
  className: string;
}

export const SectionTitle: React.FC<Props> = ({ children, className }) => {
  return (
    <h2 className={`text-2xl font-bold leading-7 ` + className}>{children}</h2>
  );
};
