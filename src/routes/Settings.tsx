import { FC } from 'react';

const Settings: FC = () => {
    return (
        <div>
            <h3>Размер конверта ММ</h3>
            <label htmlFor="fonSize">Размер шрифта </label>
            <input type="number" id="fonSize" aria-label="font-size parametr" />

            <h3>Размер конверта ММ</h3>
            <label htmlFor="envWidth">Ширина конверта</label>
            <input type="number" id="envWidth" aria-label="envelop-width parametr" />

            <label htmlFor="envHeigth">Высота конверта</label>
            <input type="number" id="envHeigth" aria-label="envelop-heigth parametr" />

            <span>Отступы внутри конверта</span>
            <label htmlFor="paddingTop">Отступ с вверху </label>
            <input type="number" id="paddingTop" aria-label="padding-top parametr" />

            <label htmlFor="paddingLeft">Отступ с лева</label>
            <input type="number" id="paddingLeft" aria-label="padding-left parametr" />
        </div>
    );
};

export default Settings;
