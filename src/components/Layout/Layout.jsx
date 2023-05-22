import React, { Suspense } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'movies'}>Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={<ColorRing />}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </div>
  );
}
