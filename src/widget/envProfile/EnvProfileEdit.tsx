// src/widget/envProfile/components/useEnvProfiles.tsx
import React from 'react';

import cn from 'classnames';
import s from './EnvProfile.module.css';
import type { EnvelopeProfile } from '../../fetch/FetchUpload.ts';
import Input from '../../component/ui/input/Input';

type Props = {
    profile: EnvelopeProfile;
    onChange: (profileName: string, field: keyof EnvelopeProfile, value: string) => void;
    onSave: () => void;
};

const EnvProfileEdit: React.FC<Props> = ({ profile, onChange, onSave }) => {
    const handleChange = (field: keyof EnvelopeProfile, value: string) => {
        onChange(profile.id, field, value);
    };

    return (
        <>
            <span className={s.text}>Название </span>
            <span>
                <Input
                    type="text"
                    aria-label="name"
                    className={s.input}
                    placeholder="Название"
                    value={profile.name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleChange('name', e.target.value)
                    }
                />
            </span>
            <span className={s.text}>Размер шрифта </span>
            <span>
                <Input
                    type="number"
                    aria-label="font-size parametr"
                    className={s.input}
                    placeholder="Размер шрифта"
                    value={profile.fontSize}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleChange('fontSize', e.target.value)
                    }
                />
            </span>
            <span className={s.text}>Размер конверта ММ</span>
            <div className={s.inputContainer}>
                <Input
                    type="number"
                    aria-label="envelop-width parametr"
                    className={s.input}
                    placeholder="Ширина конверта"
                    value={profile.width}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleChange('width', e.target.value)
                    }
                />
                <Input
                    type="number"
                    aria-label="envelop-heigth parametr"
                    className={s.input}
                    placeholder="Высоты конверта"
                    value={profile.height}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleChange('height', e.target.value)
                    }
                />
            </div>
            <span className={s.text}>Отступы внутри </span>
            <div className={s.inputContainer}>
                <Input
                    type="number"
                    aria-label="padding-left parametr"
                    className={s.input}
                    placeholder="Отступ с лева"
                    value={profile.paddingLeft}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleChange('paddingLeft', e.target.value)
                    }
                />
                <Input
                    type="number"
                    aria-label="padding-top parametr"
                    className={s.input}
                    placeholder="Отступ с вверху"
                    value={profile.paddingTop}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleChange('paddingTop', e.target.value)
                    }
                />
            </div>

            <span className={s.text}> Отступ между линиями </span>
            <div className={s.inputContainer}>
                <Input
                    type="number"
                    aria-label="line-height parametr"
                    className={s.input}
                    placeholder="Отступ между линиями"
                    value={profile.lineHeight}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleChange('lineHeight', e.target.value)
                    }
                />
            </div>
            <button
                className={cn(s.cBtn, s.cBtnPrimary, s.donateLink)}
                onClick={onSave}
                type="button"
            >
                Сохранить
            </button>
        </>
    );
};

export default EnvProfileEdit;
