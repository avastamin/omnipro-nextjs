interface Props {
  children: string;
}

export const SectionTitle: React.FC<Props> = ({ children }) => {
  return <h2 className="text-2xl font-bold leading-7">{children}</h2>;
};
