import s from './Upload.module.css';
import React from 'react';
import { useRef, useState } from 'react';
import DeleteSvg from '../../assets/svg/deleteSvg';
import DriveSvg from '../../assets/svg/drive';
import { SendSvg } from '../../assets/svg/sendSvg';
import { uploadFile } from '../../fetch/FetchUpload';
import BoxContainer from '../boxContainer/BoxContainer';
import { isExcelFile } from '../../services/excel.validate';

type IError = {
    status?: number | string;
    message: string;
};
export default function Upload() {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [isUploading, setIsUploading] = useState<boolean>(false);
    const [error, setError] = useState<IError | null>(null);

    const handleUploadClick = () => inputRef.current?.click();

    const deleteFile = () => {
        setFile(null);
        setError(null);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile && isExcelFile(selectedFile)) {
            setFile(selectedFile);
            setError(null);
        }
    };

    const handleDrop = (file: File) => {
        if (file && isExcelFile(file)) {
            setFile(file);
            setError(null);
        } else {
            setError({
                message: 'Неправильный тип файла, пожалуйста выберите файла типа excel',
            });
            setFile(null);
        }
    };

    const handleUploadFile = async (file: File | null) => {
        if (!file) return;
        setError(null);
        setIsUploading(true);
        const res = await uploadFile(file);
        setIsUploading(false);
        if (res.success) {
            setFile(null);
            const pdfUrl = URL.createObjectURL(res.pdfBlob);
            window.open(pdfUrl);
        } else {
            const { message, status } = res.error;
            setError({ status, message });
        }
    };

    return (
        <div className={s.container}>
            <BoxContainer
                isDragging={isDragging}
                setIsDragging={setIsDragging}
                getFile={handleDrop}
            >
                <div className={s.upload} onClick={handleUploadClick}>
                    <a>
                        <DriveSvg />
                    </a>
                    <span className={`${s.uploadText} ${error?.message ? s.errorMessage : ''}`}>
                        {error?.message
                            ? error.message
                            : isUploading
                              ? 'Uploading...'
                              : isDragging
                                ? 'Drop file here'
                                : 'Browse or Drop file to upload'}
                    </span>
                </div>

                <div className={s.selectedFile} role="button">
                    <button
                        className={s.transparentButton}
                        type={'button'}
                        onClick={() => handleUploadFile(file)}
                    >
                        <SendSvg />
                    </button>

                    <label htmlFor={'delete'}>
                        {file ? file.name : 'No selected File - '}
                        <button
                            className={s.transparentButton}
                            onClick={deleteFile}
                            id={'delete'}
                            type="button"
                        >
                            <DeleteSvg />
                        </button>
                    </label>
                </div>

                <input
                    ref={inputRef}
                    type="file"
                    accept=".xlsx,.xls,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                />
            </BoxContainer>
        </div>
    );
}
