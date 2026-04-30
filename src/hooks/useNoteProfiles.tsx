// src/widget/envProfile/hooks/useEnvProfiles.ts
import { useState, useEffect } from 'react';
import type { EnvelopeProfile } from '../fetch/FetchUpload';
import { fetchNoteProfiles } from '../fetch/FetchNoteProfiles';

export const useNoteProfiles = (initialData: EnvelopeProfile[]) => {
    const [items, setItems] = useState(initialData);
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
        setItems((prevItems) =>
            prevItems.map((item) => ({
                ...item,
                using: item.id === localId,
            }))
        );
    };

    const handleDelete = (localId: string) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== localId));
    };

    const toggleUpdate = (localId: string) => {
        setActiveProfileName((prev) => (prev === localId ? null : localId));
    };

    useEffect(() => {
        fetchNoteProfiles(items);
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
