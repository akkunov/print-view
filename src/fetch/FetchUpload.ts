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

type UploadResult =
    | { success: true; pdfEnv: Blob; pdfNote: Blob; pdfNote2: Blob }
    | { success: false; error: ErrorResponse };

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

        const { pdfBuffer, pdfNoteBuffer, pdfNoteBuffer2 } = await res.json();

        // base64 → Blob
        const pdfEnv = new Blob([Uint8Array.from(atob(pdfBuffer), (c) => c.charCodeAt(0))], {
            type: 'application/pdf',
        });
        const pdfNote = new Blob([Uint8Array.from(atob(pdfNoteBuffer), (c) => c.charCodeAt(0))], {
            type: 'application/pdf',
        });
        const pdfNote2 = new Blob([Uint8Array.from(atob(pdfNoteBuffer2), (c) => c.charCodeAt(0))], {
            type: 'application/pdf',
        });

        return { success: true, pdfEnv, pdfNote, pdfNote2 };
    } catch (error) {
        const uploadError = error as ErrorResponse;
        return {
            success: false,
            error: uploadError,
        };
    }
};
