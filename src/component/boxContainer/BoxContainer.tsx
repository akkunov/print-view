import s from './BoxContainer.module.css';
import { useRef } from 'react';

function BoxContainer() {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleUploadClick = () => {
        inputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            console.log('Selected file:', file);
        }
    };

    return (
        <div className={s.box}>
            <div className={s.upload} onClick={handleUploadClick}>
                <a>
                    <svg
                        width="176"
                        height="127"
                        viewBox="0 0 176 127"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M48.4167 126.873C37.6029 126.174 27.3279 122.616 19.0589 116.706C10.79 110.796 4.94973 102.837 2.3722 93.9656C-0.205331 85.0942 0.611625 75.7637 4.70642 67.3065C8.80121 58.8493 15.9645 51.6979 25.1733 46.8733C27.1328 34.0072 34.5926 22.1833 46.1566 13.6144C57.7206 5.0454 72.5964 0.318619 88 0.318619C103.404 0.318619 118.279 5.0454 129.843 13.6144C141.407 22.1833 148.867 34.0072 150.827 46.8733C160.036 51.6979 167.199 58.8493 171.294 67.3065C175.388 75.7637 176.205 85.0942 173.628 93.9656C171.05 102.837 165.21 110.796 156.941 116.706C148.672 122.616 138.397 126.174 127.583 126.873V127H48.4167V126.873ZM95.9167 73.6667H119.667L88 40.3333L56.3333 73.6667H80.0833V100.333H95.9167V73.6667Z"
                            fill="#1E77CC"
                        />
                    </svg>
                </a>
                <span className={s.uploadText}>Browse Files to upload</span>
            </div>
            <div className={s.selectedFile} role="button">
                <svg
                    width="25"
                    height="25"
                    viewBox="0 0 44 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6 53.6667H38C39.4145 53.6667 40.771 53.1048 41.7712 52.1046C42.7714 51.1044 43.3333 49.7478 43.3333 48.3333V16.3333L27.3333 0.333344H6C4.58551 0.333344 3.22896 0.895246 2.22876 1.89544C1.22857 2.89563 0.666666 4.25219 0.666666 5.66668V48.3333C0.666666 49.7478 1.22857 51.1044 2.22876 52.1046C3.22896 53.1048 4.58551 53.6667 6 53.6667ZM24.6667 5.66668L38 19H24.6667V5.66668ZM12.6667 24.3333C13.1921 24.3335 13.7124 24.4372 14.1978 24.6384C14.6832 24.8397 15.1242 25.1346 15.4956 25.5062C15.8671 25.8779 16.1617 26.3191 16.3626 26.8047C16.5635 27.2902 16.6668 27.8105 16.6667 28.336C16.6665 28.8615 16.5628 29.3818 16.3616 29.8672C16.1603 30.3526 15.8654 30.7936 15.4938 31.165C15.1221 31.5364 14.6809 31.831 14.1953 32.0319C13.7098 32.2329 13.1895 32.3362 12.664 32.336C11.6028 32.3357 10.5852 31.9137 9.83502 31.1631C9.08488 30.4125 8.66365 29.3946 8.664 28.3333C8.66435 27.2721 9.08626 26.2545 9.83691 25.5044C10.5876 24.7542 11.6054 24.333 12.6667 24.3333ZM14 37.6667L18.2587 41.3013L24.6667 29.6667L35.3333 45.6667H8.66667L14 37.6667Z"
                        fill="#1E77CC"
                    />
                </svg>
                <span>
                    No selected File -{' '}
                    <svg
                        width="30"
                        height="30"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M16 50.6667C16 53.6 18.4 56 21.3334 56H42.6667C45.6 56 48 53.6 48 50.6667V18.6667H16V50.6667ZM50.6667 10.6667H41.3334L38.6667 8H25.3334L22.6667 10.6667H13.3334V16H50.6667V10.6667Z"
                            fill="#1D1F20"
                        />
                    </svg>
                </span>
            </div>

            <input
                ref={inputRef}
                type="file"
                accept=".xlsx,.xls,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
                onChange={handleFileChange}
                style={{ display: 'none' }}
            />
        </div>
    );
}

export default BoxContainer;
