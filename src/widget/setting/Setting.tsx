import { FC } from 'react';
import Box from '../../component/ui/box/Box';
import Input from '../../component/ui/input/Input';
import s from './Setting.module.css';

const SettingC: FC = () => {
    return (
        <div className={s.container}>
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
            </Box>

            <Box className={s.setting}>
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
            </Box>

            <Box className={s.setting}>
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
        </div>
    );
};
export default SettingC;
