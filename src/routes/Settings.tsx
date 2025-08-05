import { FC } from 'react';

import SettingC from '../widget/setting/Setting';
import { useLoaderData } from 'react-router-dom';
import { EnvelopeProfile } from 'fetch/FetchUpload';
import Container from '../component/ui/container/Container';

const Settings: FC = () => {
    const profile = useLoaderData();
    const data = profile as EnvelopeProfile[];
    return (
        <Container>
            <SettingC data={data} />
        </Container>
    );
};

export default Settings;
