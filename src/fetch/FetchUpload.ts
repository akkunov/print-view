const API_URL: string = 'http://10.2.194.57:3001/api/upload';

type UploadError = {
    message: string;
    type?: number;
    status: number;
};

type UploadResult = { success: true; pdfBlob: Blob } | { success: false; error: UploadError };

export const uploadFile = async (file: File): Promise<UploadResult> => {
    const formData = new FormData();
    formData.append('file', file);

    try {
        const res = await fetch(API_URL, {
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
