import s from './BoxContainer.module.css';
import React from 'react';

type Props = {
    getFile: (file: File) => void;
    isDragging: boolean;
    setIsDragging: (isDragging: boolean) => void;
    children: React.ReactNode;
};
const BoxContainer: React.FC<Props> = ({ getFile, setIsDragging, isDragging, children }) => {
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
        getFile(droppedFile);
    };
    return (
        <div
            className={`${s.box} ${isDragging ? s.dragActive : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            {children}
        </div>
    );
};

export default BoxContainer;
