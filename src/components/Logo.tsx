import type { FC } from 'react';
import clsx from 'clsx';

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className }) => {
  return <div className={clsx('', className)}>Logo</div>;
};
export default Logo;
