import type { TNote } from "@/types/models";

import { getRandomNoteId } from "@/lib/utils";
import { useState } from "react";

import { AddNoteModal } from "@/components/add-note-modal";
import { NotesList } from "@/components/notes-list";
import { View } from "react-native";

const Notes = () => {
    const [notes, setNotes] = useState<TNote[]>([
        { id: "1", content: "Note One" },
        { id: "2", content: "Note Two" },
        { id: "3", content: "Note Three" },
    ]);

    const handleSaveNote = (content: string) => {
        setNotes(notes => {
            return [...notes, { id: getRandomNoteId(), content }];
        });
    };

    return (
        <View style={{ flex: 1, padding: 20, backgroundColor: "#ffffff" }}>
            <NotesList notes={notes} />
            <AddNoteModal onSave={handleSaveNote} />
        </View>
    );
};

export default Notes;
