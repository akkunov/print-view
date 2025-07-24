import { useState } from 'react';
import s from './Header.module.css';
import Text from '../text/Text';
import Logo from '../Logo';
import Button from '../button/Button';
import cn from 'classnames';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen((prev) => !prev);

    return (
        <header className={s.header}>
            <div className={s.headerContent}>
                <Text as={'a'} className={s.logoLink}>
                    <Logo />
                </Text>
                <nav
                    id="nav-list"
                    className={cn(s.nav, {
                        [s.navOpen]: menuOpen,
                    })}
                >
                    <ul className={s.navList}>
                        <li>
                            <a href="#" className={s.navItemText}>
                                Docs
                            </a>
                        </li>
                        <li>
                            <a href="#" className={s.navItemText}>
                                FAQ
                            </a>
                        </li>
                        <li>
                            <a href="#" className={s.navItemText}>
                                Settings
                            </a>
                        </li>
                    </ul>
                    <Button as="button" type="button" primary>
                        Donate
                    </Button>

                    <button className={s.burger} onClick={toggleMenu} aria-label="Toggle menu">
                        <span className={s.burgerLine}></span>
                        <span className={s.burgerLine}></span>
                        <span className={s.burgerLine}></span>
                    </button>
                </nav>
            </div>
        </header>
    );
}
