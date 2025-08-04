import { FC } from 'react';

import SettingC from '../widget/setting/Setting';
import { useLoaderData } from 'react-router-dom';
import { EnvelopeProfile } from 'fetch/FetchUpload';
import EnvProfile from '../component/envProfile/EnvProfile';

const Settings: FC = () => {
    const profile = useLoaderData();
    const data = profile as EnvelopeProfile[];
    console.log(data);

    return (
        <>
            <EnvProfile data={data} />
            <SettingC />
        </>
    );
};

export default Settings;
