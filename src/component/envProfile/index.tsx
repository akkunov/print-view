import React from 'react';
import { EnvelopeProfile } from '../../fetch/FetchUpload';

type Props = {
    data: EnvelopeProfile[];
};
const EnvProfile: React.FunctionComponent<Props> = ({ data }) => {
    return (
        <div>
            {data &&
                data.map((item: EnvelopeProfile) => (
                    <React.Fragment key={item.name}>
                        <span>{item.name}</span>
                        <span>{item.width}</span>
                        <span>{item.height}</span>
                        <span>{item.isRemoveLastWord}</span>
                        <span>{item.fontSize}</span>
                        <span>{item.padding.left}</span>
                        <span>{item.padding.top}</span>
                        <span>{item.lineHeight}</span>
                    </React.Fragment>
                ))}
        </div>
    );
};

export default EnvProfile;
