import { ChangeEvent, FC, FormEvent, useState } from 'react';
import s from './FieldGroup.module.css';
import Box from '../ui/box/Box';
import Input from '../ui/input/Input';
import cn from 'classnames';
import { createEnvProfile } from '../../fetch/FetchEnvProfiles';
import { EnvelopeProfile } from '../../fetch/FetchUpload';

const FieldGroup: FC = () => {
    const [formData, setFormData] = useState<EnvelopeProfile>({
        name: '',
        fontSize: 12,
        width: 220,
        height: 110,
        paddingTop: 0,
        paddingLeft: 0,
        lineHeight: 5,
        isRemoveLastWord: false,
        using: false,
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>, key: keyof EnvelopeProfile) => {
        const value = e.target.value;

        const parsedValue = key === 'name' ? value : Number(value);
        setFormData((prev) => ({
            ...prev,
            [key]: parsedValue,
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createEnvProfile(formData);

        // ✅ здесь уже можно отправить данные куда надо
        console.log('Форма отправлена:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box className={s.setting}>
                <span className={s.title}>Название конверта</span>
                <span>
                    <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange(e, 'name')}
                        className={s.input}
                        placeholder="Введите название"
                        required
                    />
                </span>

                <span className={s.title}>Размер шрифта</span>
                <span>
                    <Input
                        type="number"
                        value={formData.fontSize}
                        onChange={(e) => handleChange(e, 'fontSize')}
                        className={s.input}
                        placeholder="Размер шрифта"
                        required
                    />
                </span>

                <span className={s.title}>Размер конверта ММ</span>
                <div className={s.inputContainer}>
                    <Input
                        type="number"
                        value={formData.width}
                        onChange={(e) => handleChange(e, 'width')}
                        className={s.input}
                        placeholder="Ширина"
                        required
                    />
                    <Input
                        type="number"
                        value={formData.height}
                        onChange={(e) => handleChange(e, 'height')}
                        className={s.input}
                        placeholder="Высота"
                        required
                    />
                </div>

                <span className={s.title}>Отступы внутри</span>
                <div className={s.inputContainer}>
                    <Input
                        type="number"
                        value={formData.paddingTop}
                        onChange={(e) => handleChange(e, 'paddingTop')}
                        className={s.input}
                        placeholder="Сверху"
                        required
                    />
                    <Input
                        type="number"
                        value={formData.paddingLeft}
                        onChange={(e) => handleChange(e, 'paddingLeft')}
                        className={s.input}
                        placeholder="Слева"
                        required
                    />
                </div>

                <span className={s.title}>Отступ между линиями</span>
                <div className={s.inputContainer}>
                    <Input
                        type="number"
                        value={formData.lineHeight}
                        onChange={(e) => handleChange(e, 'lineHeight')}
                        className={s.input}
                        placeholder="Отступ"
                        required
                    />
                </div>

                <button className={cn(s.cBtn, s.cBtnPrimary, s.donateLink)} type="submit">
                    Создать
                </button>
            </Box>
        </form>
    );
};

export default FieldGroup;
