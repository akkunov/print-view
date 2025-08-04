import React from 'react';
import { EnvelopeProfile } from '../../fetch/FetchUpload';
import Box from '../ui/box/Box';
import s from './EnvProfile.module.css';
type Props = {
    data: EnvelopeProfile[];
};
const EnvProfile: React.FunctionComponent<Props> = ({ data }) => {
    return (
        <>
            {data &&
                data.map((item: EnvelopeProfile) => (
                    <Box key={item.name} className={s.setting}>
                        <span className={s.title}>{item.name}</span>
                        <h2 className={s.title}>Размер шрифта</h2>
                        <div>
                            <span className={s.text}>{item.fontSize}</span>
                        </div>
                        <h2 className={s.title}>Размер конверта</h2>
                        <div>
                            <span className={s.text}>{item.width}</span>
                            <span className={s.text}>{item.height}</span>
                        </div>

                        <span className={s.text}>{item.isRemoveLastWord}</span>

                        <span className={s.text}>{item.padding.left}</span>
                        <span className={s.text}>{item.padding.top}</span>
                        <span className={s.text}>{item.lineHeight}</span>
                    </Box>
                ))}
        </>
    );
};

export default EnvProfile;
