import s from './Upload.module.css';
import React from 'react';
import { useRef, useState } from 'react';
import DeleteSvg from '../../assets/svg/deleteSvg';
import DriveSvg from '../../assets/svg/drive';
import { SendSvg } from '../../assets/svg/sendSvg';

type Info = {
    message: string;
    rows: [][];
};
export default function Upload() {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [isUploading, setIsUploading] = useState(false);

    const handleUploadClick = () => {
        inputRef.current?.click();
    };

    const deleteFile = () => {
        console.log('deleting file');
        setFile(null);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile && isExcelFile(selectedFile)) {
            setFile(selectedFile);
            uploadFile(selectedFile).then((result) => {
                console.log(result);
            });
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);

        const droppedFile = e.dataTransfer.files?.[0];
        if (droppedFile && isExcelFile(droppedFile)) {
            setFile(droppedFile);
            uploadFile(droppedFile)
                .then(() => console.log('Файл загружен'))
                .catch((err) => console.error('Ошибка при загрузке файла', err));
        }
    };

    const isExcelFile = (file: File) => {
        const acceptedTypes = [
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'application/vnd.ms-excel',
        ];
        return acceptedTypes.includes(file.type);
    };

    const uploadFile = async (file: File): Promise<Info | undefined | null> => {
        const formData = new FormData();
        formData.append('file', file);
        console.log(formData.getAll('file'));

        try {
            setIsUploading(true);

            const res = await fetch('http://10.2.194.57:3001/api/upload', {
                method: 'POST',
                body: formData,
            });

            if (!res.ok) return null;
            const json: Info = await res.json();
            console.log(json);
            alert(JSON.stringify(json));
            return json;
        } catch (error) {
            console.error('Upload failed:', error);
            alert('Ошибка при загрузке файла');
            throw error;
        } finally {
            setIsUploading(false);
            setFile(null);
        }
    };

    return (
        <div className={s.container}>
            <div
                className={`${s.box} ${isDragging ? s.dragActive : ''}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <div className={s.upload} onClick={handleUploadClick}>
                    <a>
                        <DriveSvg />
                    </a>
                    <span className={s.uploadText}>
                        {isUploading
                            ? 'Uploading...'
                            : isDragging
                              ? 'Drop file here'
                              : 'Browse or Drop file to upload'}
                    </span>
                </div>

                <div className={s.selectedFile} role="button">
                    <button className={s.transparentButton} type={'button'}>
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
            </div>
        </div>
    );
}
