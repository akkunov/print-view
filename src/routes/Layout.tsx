import Header from '../component/header/Header';
import { Outlet } from 'react-router-dom';
import { FC } from 'react';

const Layout: FC = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                width: '100vw',
            }}
        >
            <Header />
            <section
                style={{
                    backgroundColor: 'var(--hero-background-color)',
                    width: '100%',
                    flex: 1, //
                    overflow: 'auto',
                }}
            >
                <Outlet />
            </section>
        </div>
    );
};

export default Layout;
