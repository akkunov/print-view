import { UPLOAD } from './API_URL';

export type ErrorResponse = {
    message: string;
    type?: number;
    status: number;
};

export type EnvelopeProfile = {
    name: string;
    width: number;
    height: number;
    fontSize: number;
    lineHeight: number;
    isRemoveLastWord: boolean;
    using: boolean;
    paddingTop: number;
    paddingLeft: number;
};

type UploadResult = { success: true; pdfBlob: Blob } | { success: false; error: ErrorResponse };

export const uploadFile = async (file: File): Promise<UploadResult> => {
    const formData = new FormData();
    formData.append('file', file);

    try {
        const res = await fetch(UPLOAD, {
            method: 'POST',
            body: formData,
        });

        if (!res.ok) {
            const data = await res.json();
            return {
                success: false,
                error: { ...data.error },
            };
        }

        const pdfBlob = await res.blob();
        return { success: true, pdfBlob };
    } catch (error) {
        const uploadError = error as ErrorResponse;
        return {
            success: false,
            error: uploadError,
        };
    }
};
