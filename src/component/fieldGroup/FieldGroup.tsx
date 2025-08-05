import { FC } from 'react';
import s from './FieldGroup.module.css';
import Box from '../ui/box/Box';
import Input from '../ui/input/Input';
import { EnvelopeProfile } from '../../fetch/FetchUpload';

type Props = {
    data?: EnvelopeProfile;
};
const FieldGroup: FC<Props> = () => {
    return (
        <Box className={s.setting}>
            <span className={s.title}>Размер шрифта </span>
            <span>
                <Input
                    type={'number'}
                    aria-label="font-size parametr"
                    className={s.input}
                    placeholder={'Размер шрифта'}
                />
            </span>
            <span className={s.title}>Размер конверта ММ</span>
            <div className={s.inputContainer}>
                <Input
                    type={'number'}
                    aria-label="envelop-width parametr"
                    className={s.input}
                    placeholder={'Ширина конверта'}
                />
                <Input
                    type={'number'}
                    aria-label="envelop-heigth parametr"
                    className={s.input}
                    placeholder={'Высоты конверта'}
                />
            </div>
            <span className={s.title}>Отступы внутри </span>
            <div className={s.inputContainer}>
                <Input
                    type={'number'}
                    aria-label="padding-top parametr"
                    className={s.input}
                    placeholder={'Отступ с вверху'}
                />
                <Input
                    type={'number'}
                    aria-label="padding-left parametr"
                    className={s.input}
                    placeholder={'Отступ с лева'}
                />
            </div>

            <span className={s.title}> Отступ между линиями </span>
            <div className={s.inputContainer}>
                <Input
                    type={'number'}
                    aria-label="line-height parametr"
                    className={s.input}
                    placeholder={'Отступ между линиями'}
                />
            </div>
        </Box>
    );
};

export default FieldGroup;
