import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../JoyOfGrow-logos.svg';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Logo/>
      </div>
      <div className={classes.title}>
        <h3>Welcome to Joy Of Grow</h3>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/home' activeClassName={classes.active}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' activeClassName={classes.active}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
