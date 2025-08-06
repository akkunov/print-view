import { ENVELOPEPROFILEURL } from './API_URL';
import { EnvelopeProfile, ErrorResponse } from './FetchUpload';

export const getAllEnvProfile = async (): Promise<EnvelopeProfile | ErrorResponse> => {
    try {
        const res = await fetch(ENVELOPEPROFILEURL, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        });
        const data = await res.json();
        if (!res.ok) {
            throw new Error('EnvelopeProfile returned no response', data.error);
        }
        return data;
    } catch (error) {
        const uploadError = error as ErrorResponse;
        return uploadError;
    }
};

export const fetchEnvProfiles = async (
    data: EnvelopeProfile[]
): Promise<EnvelopeProfile | ErrorResponse> => {
    try {
        console.log(data);
        const response = await fetch(ENVELOPEPROFILEURL, {
            headers: { 'Content-Type': 'application/json' },
            method: 'PATCH',
            body: JSON.stringify(data),
        });

        const json = await response.json();
        if (!response.ok) {
            throw new Error(json.error);
        }
        return json;
    } catch (error) {
        const errorResponse = error as ErrorResponse;
        return errorResponse;
    }
};

export const createEnvProfile = async (
    data: EnvelopeProfile
): Promise<EnvelopeProfile | ErrorResponse> => {
    try {
        console.log(data);
        const res = await fetch(ENVELOPEPROFILEURL, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(data),
        });
        const json = await res.json();
        if (!res.ok) {
            throw new Error(json.error);
        }
        return json as EnvelopeProfile;
    } catch (error) {
        const errorResponse = error as ErrorResponse;
        return errorResponse;
    }
};
