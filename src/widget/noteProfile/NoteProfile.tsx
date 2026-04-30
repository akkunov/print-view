// src/widget/envProfile/NoteProfile.tsx
import React from 'react';
import { EnvelopeProfile } from '../../fetch/FetchUpload';
import Box from '../../component/ui/box/Box';
import s from './NoteProfile.module.css';
import NoteProfileEdit from './NoteProfileEdit';
import NoteProfileView from './NoteProfileView';
import { useNoteProfiles } from '../../hooks/useNoteProfiles';

type Props = {
    data: EnvelopeProfile[];
};

const NoteProfile: React.FunctionComponent<Props> = ({ data }) => {
    const {
        items,
        activeProfileName,
        handleChange,
        handleSave,
        handleToggleRemoveLastWord,
        handleSetUsingProfile,
        handleDelete,
        toggleUpdate,
    } = useNoteProfiles(data);

    return (
        <>
            {items &&
                items.length > 0 &&
                items.map((item: EnvelopeProfile) => (
                    <Box key={item.id} className={s.setting}>
                        {activeProfileName === item.id ? (
                            <NoteProfileEdit
                                profile={item}
                                onChange={handleChange}
                                onSave={handleSave}
                            />
                        ) : (
                            <NoteProfileView
                                profile={item}
                                onDelete={handleDelete}
                                onToggleEdit={toggleUpdate}
                                onToggleRemoveLastWord={handleToggleRemoveLastWord}
                                onSetUsingProfile={handleSetUsingProfile}
                            />
                        )}
                    </Box>
                ))}
        </>
    );
};

export default NoteProfile;
