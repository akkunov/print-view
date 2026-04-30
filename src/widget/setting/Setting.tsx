import { FC, useState } from 'react';
import s from './Setting.module.css';
import FieldGroup from '../../component/fieldGroup/FieldGroup';
import EnvProfile from '../envProfile/EnvProfile';
import NoteProfile from '../noteProfile/NoteProfile';
import { EnvelopeProfile } from '../../fetch/FetchUpload';

type Props = {
    envelope: EnvelopeProfile[];
    notification: EnvelopeProfile[];
};

type TabType = 'envProfile' | 'noteProfile';

const SettingC: FC<Props> = ({ envelope, notification }) => {
    const [activeTab, setActiveTab] = useState<TabType>('envProfile');

    const handleTabChange = (tab: TabType) => {
        setActiveTab(tab);
    };

    return (
        <div className={s.wrapper}>
            <div className={s.tabs}>
                <button
                    className={`${s.tab} ${activeTab === 'envProfile' ? s.active : ''}`}
                    onClick={() => handleTabChange('envProfile')}
                    type={'button'}
                >
                    Профиль конверта
                </button>
                <button
                    className={`${s.tab} ${activeTab === 'noteProfile' ? s.active : ''}`}
                    onClick={() => handleTabChange('noteProfile')}
                    type={'button'}
                >
                    Профиль уведомлений
                </button>
            </div>

            <div className={s.container}>
                <div className={`${s.tabContent} ${activeTab === 'envProfile' ? s.active : ''}`}>
                    <EnvProfile data={envelope} />
                </div>
                <div className={`${s.tabContent} ${activeTab === 'noteProfile' ? s.active : ''}`}>
                    <NoteProfile data={notification} />
                </div>

                <FieldGroup />
            </div>
        </div>
    );
};

export default SettingC;
