import { FC } from 'react';

import SettingC from '../widget/setting/Setting';
import { useLoaderData } from 'react-router-dom';
import { EnvelopeProfile } from 'fetch/FetchUpload';
import Container from '../component/ui/container/Container';

const Settings: FC = () => {
    const { env, note } = useLoaderData() as {
        env: EnvelopeProfile[];
        note: EnvelopeProfile[];
    };
    console.log(env);
    console.log(note);

    return (
        <Container>
            <SettingC envelope={env} notification={note} />
        </Container>
    );
};

export default Settings;
