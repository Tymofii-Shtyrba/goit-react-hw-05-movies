import React, { Suspense } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { NavLink, Outlet } from 'react-router-dom';
import { StyledLayout, StyledNavList } from './Layout.styled';

export default function Layout() {
  return (
    <StyledLayout>
      <header>
        <nav>
          <StyledNavList>
            <li>
              <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'movies'}>Movies</NavLink>
            </li>
          </StyledNavList>
        </nav>
      </header>
      <main>
        <Suspense fallback={<ColorRing />}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </StyledLayout>
  );
}
