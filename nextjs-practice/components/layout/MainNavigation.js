
import Link from 'next/Link';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>React-Next Meetups App </div>
            <nav>
                <ul>
                    <li>
                        <Link href='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link href='/new-meetup'>Add New Meetup</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default MainNavigation;