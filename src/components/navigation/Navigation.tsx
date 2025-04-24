import { NavLink, NavLinkRenderProps } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css'

const linkClass = ({ isActive }: NavLinkRenderProps) => {
  return clsx(css.link, isActive && css.active);
}

const Navigation = () => {
  return (
    <nav className={css.navbar}>
      <NavLink to="/" className={linkClass}>
        Home
      </NavLink>
      <NavLink to="/movies" className={linkClass}>
        Movies
      </NavLink>
    </nav>
  )
}

export default Navigation;