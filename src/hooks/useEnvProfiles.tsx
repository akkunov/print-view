// src/widget/envProfile/hooks/useEnvProfiles.ts
import { useState, useEffect } from 'react';
import type { EnvelopeProfile } from '../fetch/FetchUpload';
import { fetchEnvProfiles } from '../fetch/FetchEnvProfiles';

export const useEnvProfiles = (initialData: EnvelopeProfile[]) => {
    const [items, setItems] = useState<EnvelopeProfile[]>(initialData);
    const [activeProfileName, setActiveProfileName] = useState<string | null>(null);

    const handleChange = (localId: string, field: keyof EnvelopeProfile, value: string) => {
        let Value;
        if (field === 'name') {
            Value = value;
        } else Value = Number(value);
        setItems((prev) =>
            prev.map((item) => (item.id === localId ? { ...item, [field]: Value } : item))
        );
    };

    const handleSave = () => {
        setActiveProfileName(null);
    };

    const handleToggleRemoveLastWord = (localId: string) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === localId ? { ...item, isRemoveLastWord: !item.isRemoveLastWord } : item
            )
        );
    };

    const handleSetUsingProfile = (localId: string) => {
        setItems((prev) =>
            prev.map((item) =>
                item.id === localId ? { ...item, using: true } : { ...item, using: false }
            )
        );
    };
    const handleDelete = (localId: string) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== localId));
    };

    const toggleUpdate = (localId: string) => {
        setActiveProfileName((prev) => (prev === localId ? null : localId));
    };

    useEffect(() => {
        fetchEnvProfiles(items);
    }, [items]);

    return {
        items,
        activeProfileName,
        handleChange,
        handleSave,
        handleToggleRemoveLastWord,
        handleSetUsingProfile,
        handleDelete,
        toggleUpdate,
    };
};
