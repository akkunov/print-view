import { FC } from 'react';
import s from './Setting.module.css';
import FieldGroup from '../../component/fieldGroup/FieldGroup';
import EnvProfile from '../envProfile/EnvProfile';
import { EnvelopeProfile } from '../../fetch/FetchUpload';
type Props = {
    data: EnvelopeProfile[];
};
const SettingC: FC<Props> = ({ data }) => {
    return (
        <div className={s.container}>
            <EnvProfile data={data} />
            <FieldGroup />
        </div>
    );
};
export default SettingC;
