import React, { useState } from 'react';
import { EnvelopeProfile } from '../../fetch/FetchUpload';
import Box from '../../component/ui/box/Box';
import s from './EnvProfile.module.css';

import { UpdateSvg } from '../../assets/svg/updateSvg';
import FieldGroup from 'component/fieldGroup/FieldGroup';

type Props = {
    data: EnvelopeProfile[];
};
const EnvProfile: React.FunctionComponent<Props> = ({ data }) => {
    const [activeProfileName, setActiveProfileName] = useState<string | null>(null);

    const toggleUpdate = (profileName: string) => {
        setActiveProfileName((prev) => (prev === profileName ? null : profileName));
    };
    
    return (
        <>
            {data && data.length > 0 &&
                data.map((item: EnvelopeProfile) => (
                    <Box key={item.name} className={s.setting}>
                        <div>
                            <span className={s.title}>{item.name}</span>
                            <button
                                className={s.transparentButton}
                                type={'button'}
                                onClick={() => toggleUpdate(item.name)}
                            >
                                <UpdateSvg />
                            </button>
                        </div>
                        {activeProfileName == item.name ? (
                            <FieldGroup data={item} />
                        ) : (
                            <>
                                <span className={s.text}>Размер шрифта {item.fontSize}px</span>

                                <h2 className={s.subtitle}>Размер конверта</h2>
                                <div>
                                    <span className={s.text}>Ширина {item.width}мм </span>
                                    <span className={s.text}>Высота {item.height}мм </span>
                                </div>
                                <h2 className={s.subtitle}>Оступы внутри</h2>
                                <div>
                                    <span className={s.text}>С лева {item.padding.left}мм </span>
                                    <span className={s.text}>С вверху {item.padding.top}мм </span>
                                </div>
                                <span className={s.text}>
                                    Отступы между линиями {item.lineHeight}px
                                </span>

                                <div className={s.checkBox}>
                                    <span className={s.text}>Удалить АД номер</span>
                                    <input
                                        type="checkbox"
                                        defaultChecked={item.isRemoveLastWord}
                                        id={item.name}
                                    />
                                </div>
                                <div className={s.checkBox}>
                                    <span className={s.text}>Использавть</span>
                                    <input
                                        type="checkbox"
                                        defaultChecked={item.isRemoveLastWord}
                                        id={`checkBox${item.name}`}
                                    />
                                </div>
                            </>
                        )}
                    </Box>
                ))}
        </>
    );
};

export default EnvProfile;
