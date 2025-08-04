import { NVELOPEPROFILEURL, UPLOAD } from './API_URL';

type UploadError = {
    message: string;
    type?: number;
    status: number;
};

export type EnvelopeProfile = {
    name: string;
    width: number;
    height: number;
    lineHeight: number;
    fontSize: number;
    isRemoveLastWord: boolean;
    padding: {
        top: number;
        left: number;
    };
};

type UploadResult = { success: true; pdfBlob: Blob } | { success: false; error: UploadError };

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
        const uploadError = error as UploadError;
        return {
            success: false,
            error: uploadError,
        };
    }
};

export const getAllEnvProfile = async (): Promise<EnvelopeProfile | UploadError> => {
    try {
        const res = await fetch(NVELOPEPROFILEURL, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        });
        const data = await res.json();
        if (!res.ok) {
            throw new Error('EnvelopeProfile returned no response', data);
        }
        return data;
    } catch (error) {
        const uploadError = error as UploadError;
        return uploadError;
    }
};
