interface IProps {
  type: 'submit' | 'button' | 'reset' | undefined;
  className: string;
  processing: boolean | undefined;
  children: string | undefined;
}
export default function Button({
  type = 'submit',
  className = '',
  processing,
  children,
}: IProps) {
  return (
    <button
      type={type}
      className={
        `inline-flex items-center bg-secondary border border-transparent rounded-full text-body-dark tracking-widest hover:bg-[#D9A237] active:bg-[#D9A237] transition ease-in-out duration-150 ${
          processing && 'opacity-25'
        } ` + className
      }
      disabled={processing}
    >
      {children}
    </button>
  );
}
