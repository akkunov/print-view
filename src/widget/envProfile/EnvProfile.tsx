import React, { useEffect, useState } from 'react';
import { EnvelopeProfile } from '../../fetch/FetchUpload';
import Box from '../../component/ui/box/Box';
import s from './EnvProfile.module.css';

import { UpdateSvg } from '../../assets/svg/updateSvg';
import Input from '../../component/ui/input/Input';
import cn from 'classnames';
import DeleteSvg from '../../assets/svg/deleteSvg';
import { fetchEnvProfiles } from '../../fetch/FetchEnvProfiles';

type Props = {
    data: EnvelopeProfile[];
};
const EnvProfile: React.FunctionComponent<Props> = ({ data }) => {
    const [activeProfileName, setActiveProfileName] = useState<string | null>(null);
    const [items, setItems] = useState<EnvelopeProfile[]>(data);
    const handleChange = (profileName: string, field: keyof EnvelopeProfile, value: string) => {
        const numValue = Number(value);
        setItems((prev) =>
            prev.map((item) => (item.name === profileName ? { ...item, [field]: numValue } : item))
        );
    };
    const handleSave = () => {
        setActiveProfileName(null);
    };

    const handleToggleRemoveLastWord = (profileName: string) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.name === profileName
                    ? { ...item, isRemoveLastWord: !item.isRemoveLastWord }
                    : item
            )
        );
    };

    const handleSetUsingProfile = (profileName: string) => {
        setItems((prevItems) =>
            prevItems.map((item) => ({
                ...item,
                using: item.name === profileName,
            }))
        );
    };
    const handleDelete = (profileName: string) => {
        setItems((prevItems) => prevItems.filter((item) => item.name !== profileName));
    };
    const toggleUpdate = (profileName: string) => {
        setActiveProfileName((prev) => (prev === profileName ? null : profileName));
    };

    useEffect(() => {
        fetchEnvProfiles(items);
    }, [items]);
    return (
        <>
            {items &&
                items.length > 0 &&
                items.map((item: EnvelopeProfile) => (
                    <Box key={item.name} className={s.setting}>
                        <div>
                            <span className={s.title}>{item.name}</span>
                            <span className={s.actionGroup}>
                                <button type="button" onClick={() => handleDelete(item.name)}>
                                    <DeleteSvg />
                                </button>
                                <button type={'button'} onClick={() => toggleUpdate(item.name)}>
                                    <UpdateSvg />
                                </button>
                            </span>
                        </div>
                        {activeProfileName == item.name ? (
                            <>
                                <span className={s.text}>Размер шрифта </span>
                                <span>
                                    <Input
                                        type={'number'}
                                        aria-label="font-size parametr"
                                        className={s.input}
                                        placeholder={'Размер шрифта'}
                                        value={item.fontSize}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                            handleChange(item.name, 'fontSize', e.target.value)
                                        }
                                    />
                                </span>
                                <span className={s.text}>Размер конверта ММ</span>
                                <div className={s.inputContainer}>
                                    <Input
                                        type={'number'}
                                        aria-label="envelop-width parametr"
                                        className={s.input}
                                        placeholder={'Ширина конверта'}
                                        value={item.width}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                            handleChange(item.name, 'width', e.target.value)
                                        }
                                    />
                                    <Input
                                        type={'number'}
                                        aria-label="envelop-heigth parametr"
                                        className={s.input}
                                        placeholder={'Высоты конверта'}
                                        value={item.height}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                            handleChange(item.name, 'height', e.target.value)
                                        }
                                    />
                                </div>
                                <span className={s.text}>Отступы внутри </span>
                                <div className={s.inputContainer}>
                                    <Input
                                        type={'number'}
                                        aria-label="padding-left parametr"
                                        className={s.input}
                                        placeholder={'Отступ с лева'}
                                        value={item.paddingLeft}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                            handleChange(item.name, 'paddingLeft', e.target.value)
                                        }
                                    />
                                    <Input
                                        type={'number'}
                                        aria-label="padding-top parametr"
                                        className={s.input}
                                        placeholder={'Отступ с вверху'}
                                        value={item.paddingTop}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                            handleChange(item.name, 'paddingTop', e.target.value)
                                        }
                                    />
                                </div>

                                <span className={s.text}> Отступ между линиями </span>
                                <div className={s.inputContainer}>
                                    <Input
                                        type={'number'}
                                        aria-label="line-height parametr"
                                        className={s.input}
                                        placeholder={'Отступ между линиями'}
                                        value={item.lineHeight}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                            handleChange(item.name, 'lineHeight', e.target.value)
                                        }
                                    />
                                </div>
                                <button
                                    className={cn(s.cBtn, s.cBtnPrimary, s.donateLink)}
                                    onClick={handleSave}
                                    type="button"
                                >
                                    Сохранить
                                </button>
                            </>
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
                                    <span className={s.text}>С лева {item.paddingLeft}мм </span>
                                    <span className={s.text}>С вверху {item.paddingTop}мм </span>
                                </div>
                                <span className={s.text}>
                                    Отступы между линиями {item.lineHeight}px
                                </span>

                                <div className={s.checkBox}>
                                    <span className={s.text}>Удалить АД номер</span>
                                    <input
                                        type="checkbox"
                                        checked={item.isRemoveLastWord}
                                        id={item.name}
                                        onChange={() => handleToggleRemoveLastWord(item.name)}
                                    />
                                </div>
                                <div className={s.checkBox}>
                                    <span className={s.text}>Использавть</span>
                                    <input
                                        type="checkbox"
                                        checked={item.using}
                                        id={`checkBox${item.name}`}
                                        onChange={() => handleSetUsingProfile(item.name)}
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
