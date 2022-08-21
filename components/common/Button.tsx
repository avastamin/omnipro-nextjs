interface IProps {
  type?: 'submit' | 'button' | 'reset' | undefined;
  size?: 'small' | 'medium' | 'large' | undefined;
  className?: string;
  processing?: boolean | undefined;
  children: string | undefined;
}
export default function Button({
  type = 'submit',
  size,
  className = '',
  processing,
  children,
}: IProps) {
  let btnCSS;
  if (size) {
    if (size === 'small') {
      btnCSS = ' px-3 py-2';
    } else if (size === 'medium') {
      btnCSS = ' px-5 py-3';
    } else {
      btnCSS = ' px-7 py-5';
    }
  }

  return (
    <button
      type={type}
      className={
        `text-lg inline-flex items-center bg-secondary border border-transparent rounded-full text-body-dark tracking-normal hover:bg-[#D9A237] active:bg-[#D9A237] transition ease-in-out duration-150 ${
          processing && 'opacity-25'
        } ` +
        btnCSS +
        ' ' +
        className
      }
      disabled={processing}
    >
      {children}
    </button>
  );
}
