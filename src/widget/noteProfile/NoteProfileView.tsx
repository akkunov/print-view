// src/widget/envProfile/components/NoteProfileView.tsx
import React from 'react';

import s from './NoteProfile.module.css';
import { UpdateSvg } from '../../assets/svg/updateSvg';
import type { EnvelopeProfile } from '../../fetch/FetchUpload.ts';
import DeleteSvg from '../../assets/svg/deleteSvg';

type Props = {
    profile: EnvelopeProfile;
    onDelete: (name: string) => void;
    onToggleEdit: (name: string) => void;
    onToggleRemoveLastWord: (name: string) => void;
    onSetUsingProfile: (name: string) => void;
};

const NoteProfileView: React.FC<Props> = ({
    profile,
    onDelete,
    onToggleEdit,
    onToggleRemoveLastWord,
    onSetUsingProfile,
}) => {
    return (
        <>
            <div className={s.profileHeader}>
                <span className={s.title}>{profile.name}</span>
                <span className={s.actionGroup}>
                    <button type="button" onClick={() => onDelete(profile.id)}>
                        <DeleteSvg />
                    </button>
                    <button type="button" onClick={() => onToggleEdit(profile.id)}>
                        <UpdateSvg />
                    </button>
                </span>
            </div>

            <span className={s.text}>Размер шрифта {profile.fontSize}px</span>

            <h2 className={s.subtitle}>Размер конверта</h2>
            <div>
                <span className={s.text}>Ширина {profile.width}мм </span>
                <span className={s.text}>Высота {profile.height}мм </span>
            </div>
            <h2 className={s.subtitle}>Отступы внутри</h2>
            <div>
                <span className={s.text}>С лева {profile.paddingLeft}мм </span>
                <span className={s.text}>С вверху {profile.paddingTop}мм </span>
            </div>
            <span className={s.text}>Отступы между линиями {profile.lineHeight}px</span>

            <div className={s.checkBox}>
                <span className={s.text}>Удалить АД номер</span>
                <input
                    type="checkbox"
                    checked={profile.isRemoveLastWord}
                    id={profile.id}
                    onChange={() => onToggleRemoveLastWord(profile.id)}
                />
            </div>
            <div className={s.checkBox}>
                <span className={s.text}>Использовать</span>
                <input
                    type="checkbox"
                    checked={profile.using}
                    id={`checkBox${profile.id}`}
                    onChange={() => onSetUsingProfile(profile.id)}
                />
            </div>
        </>
    );
};

export default NoteProfileView;
