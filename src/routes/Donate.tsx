import { FC } from 'react';
import Container from '../component/ui/container/Container';
import s from './Donate.module.css';

const Donate: FC = () => {
    return (
        <Container className={s.container}>
            <img src="/donate.jpeg" alt="" className={s.img} />
        </Container>
    );
};

export default Donate;
