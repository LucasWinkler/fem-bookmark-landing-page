import type { FC } from 'react';

import Logo from 'components/Logo';
import Link from 'next/link';
import Container from 'components/Container';
import Button from 'components/Button';
import clsx from 'clsx';

const Header: FC = () => {
  return (
    <>
      <header className='py-12'>
        <Container className='flex items-center justify-between'>
          <Link className='text-very-dark-blue' href='/'>
            <Logo />
          </Link>
          <nav className='text-[0.8125rem]'>
            <ul className='flex items-center justify-between gap-11 text-very-dark-blue'>
              <li className=''>
                <Link
                  className='uppercase tracking-widest transition-colors duration-150 ease-in hover:text-red'
                  href='/'>
                  Features
                </Link>
              </li>
              <li className=''>
                <Link
                  className='uppercase tracking-widest transition-colors duration-150 ease-in hover:text-red'
                  href='/'>
                  Pricing
                </Link>
              </li>
              <li className=''>
                <Link
                  className='uppercase tracking-widest transition-colors duration-150 ease-in hover:text-red'
                  href='/'>
                  Contact
                </Link>
              </li>
              <li className=''>
                <Button variant='secondary' modifier='nav-cta' href='/'>
                  Login
                </Button>
              </li>
            </ul>
          </nav>
        </Container>
      </header>
    </>
  );
};

export default Header;
