import clsx from 'clsx';
import Link from 'next/link';
import { cva, VariantProps } from 'cva';
import { ButtonHTMLAttributes } from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

const button = cva(
  'font-medium rounded-[5px] shadow inline-block outline-2 hover:bg-transparent hover:outline',
  {
    variants: {
      variant: {
        primary: 'bg-blue text-white hover:text-blue outline-current',
        secondary: 'bg-red text-white hover:text-red outline-current',
        monochrome: 'bg-light-gray text-very-dark-blue outline-grayish-blue',
      },
      modifier: {
        outline: 'bg-transparent border border-current',
        'nav-cta':
          'tracking-widest uppercase px-[33px] py-[12px] text-[0.8125rem] hover:text-red',
      },
      size: {
        medium: 'text-sm',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    compoundVariants: [
      {
        modifier: 'outline',
        variant: 'primary',
        className: 'text-blue',
      },
      {
        modifier: undefined,
        size: 'medium',
        className: 'px-6 py-[14px]',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

interface ButtonAsButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
  href?: never;
}

interface ButtonAsAnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

type ButtonProps = VariantProps<typeof button> &
  (ButtonAsButtonProps | ButtonAsAnchorProps) & {
    children: React.ReactNode;
    loading?: boolean;
  };

const Button = ({
  children,
  variant,
  modifier,
  size,
  fullWidth,
  loading,
  ...buttonAttributes
}: ButtonProps) => {
  const classes = button({
    variant,
    modifier,
    size,
    fullWidth,
  });

  const ButtonChildren = () => (
    <>
      <span className={clsx('', loading && 'text-transparent')}>
        {children}
      </span>
      {loading && (
        <>
          <span className='absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2'>
            <ArrowPathIcon className='h-5 w-5 animate-spin' />
          </span>
          <span className='sr-only'>Loading</span>
        </>
      )}
    </>
  );

  if (typeof buttonAttributes.href === 'string') {
    return (
      <Link {...buttonAttributes} className={classes}>
        <ButtonChildren />
      </Link>
    );
  }

  return (
    <button {...buttonAttributes} className={classes}>
      <ButtonChildren />
    </button>
  );
};

export default Button;
