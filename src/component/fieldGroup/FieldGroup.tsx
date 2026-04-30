import { ChangeEvent, FC, FormEvent, useState } from 'react';
import s from './FieldGroup.module.css';
import Box from '../ui/box/Box';
import Input from '../ui/input/Input';
import cn from 'classnames';
import { createEnvProfile } from '../../fetch/FetchEnvProfiles';
import { EnvelopeProfile } from '../../fetch/FetchUpload';

// Define form field configuration type
type FormFieldConfig = {
    key: keyof EnvelopeProfile;
    label: string;
    type: 'text' | 'number' | 'checkbox';
    placeholder?: string;
    required?: boolean;
    className?: string;
};

// Form field configurations
const formFields: FormFieldConfig[] = [
    {
        key: 'name',
        label: 'Название конверта',
        type: 'text',
        placeholder: 'Введите название',
        required: true,
    },
    {
        key: 'fontSize',
        label: 'Размер шрифта',
        type: 'number',
        placeholder: 'Размер шрифта',
        required: true,
    },
    {
        key: 'width',
        label: 'Размер конверта ММ',
        type: 'number',
        placeholder: 'Ширина',
        required: true,
    },
    { key: 'height', label: '', type: 'number', placeholder: 'Высота', required: true },
    {
        key: 'paddingTop',
        label: 'Отступы внутри',
        type: 'number',
        placeholder: 'Сверху',
        required: true,
    },
    { key: 'paddingLeft', label: '', type: 'number', placeholder: 'Слева', required: true },
    {
        key: 'lineHeight',
        label: 'Отступ между линиями',
        type: 'number',
        placeholder: 'Отступ',
        required: true,
    },
    { key: 'isRemoveLastWord', label: 'Удалить последнее слово', type: 'checkbox' },
    { key: 'using', label: 'Использовать', type: 'checkbox' },
];

// Reusable FormField component
const FormField: FC<{
    config: FormFieldConfig;
    value: string | number | boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>, key: keyof EnvelopeProfile) => void;
}> = ({ config, value, onChange }) => {
    return (
        <>
            {config.label && <span className={s.title}>{config.label}</span>}
            <span className={config.className || ''}>
                {config.type === 'checkbox' ? (
                    <input
                        type="checkbox"
                        checked={value as boolean}
                        onChange={(e) => onChange(e, config.key)}
                    />
                ) : (
                    <Input
                        type={config.type}
                        value={value as string | number}
                        onChange={(e) => onChange(e, config.key)}
                        className={s.input}
                        placeholder={config.placeholder}
                        required={config.required}
                    />
                )}
            </span>
        </>
    );
};

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
        const checked = e.target.checked;

        // Handle different input types
        let parsedValue: string | number | boolean;

        if (e.target.type === 'checkbox') {
            parsedValue = checked;
        } else if (key === 'name') {
            parsedValue = value;
        } else {
            parsedValue = Number(value);
        }

        setFormData((prev) => ({
            ...prev,
            [key]: parsedValue,
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createEnvProfile(formData);
        console.log('Форма отправлена:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box className={s.setting}>
                {formFields.map((field) => (
                    <FormField
                        key={field.key}
                        config={field}
                        value={formData[field.key]}
                        onChange={handleChange}
                    />
                ))}

                <button className={cn(s.cBtn, s.cBtnPrimary, s.donateLink)} type="submit">
                    Создать
                </button>
            </Box>
        </form>
    );
};

export default FieldGroup;
