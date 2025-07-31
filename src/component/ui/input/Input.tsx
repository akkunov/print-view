import { FC, InputHTMLAttributes } from 'react';

interface CustomProps {
    label?: string;
    error?: string;
}

type InputProps = CustomProps & InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({ label, error, ...rest }) => (
    <>
        {label && <label htmlFor={rest.id}>{label}</label>}
        <input {...rest} />
        {error && <span style={{ color: 'red' }}>{error}</span>}
    </>
);

export default Input;
