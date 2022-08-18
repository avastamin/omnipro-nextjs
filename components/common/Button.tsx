interface IProps {
  type: 'submit' | 'button' | 'reset' | undefined;
  className: string;
  processing: boolean | undefined;
  children: string;
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
        `inline-flex items-center px-8 bg-secondary border border-transparent rounded-full text-1.5xl h-[69px] text-body-dark tracking-widest hover:bg-[#D9A237] active:bg-[#D9A237] transition ease-in-out duration-150 ${
          processing && 'opacity-25'
        } ` + className
      }
      disabled={processing}
    >
      {children}
    </button>
  );
}
