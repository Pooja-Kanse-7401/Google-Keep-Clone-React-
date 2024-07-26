import { createSlice } from "@reduxjs/toolkit";

const storedData = () => {
    try {
        const recevdData = localStorage.getItem("storedNote");
        if (recevdData === null) {
            return [];
        }
        return JSON.parse(recevdData);
    } catch (err) {
        console.error("Could not load state from local storage", err);
        return [];
    }
};

const storedState = (state) => {
    try {
        const recevdData = JSON.stringify(state);
        localStorage.setItem("storedNote", recevdData);
    } catch (err) {
        console.error("Could not save state to local storage", err);
    }
};

const initialState = {
    notes: storedData()
}

const noteSlice = createSlice({
    name: "note",
    initialState,
    reducers: {
        addNotes: (state, action) => {
            state.notes.push(action.payload)
            storedState(state.notes) 
        },

        removeNotes: (state, action) => {
            state.notes = state.notes.filter((note) => note.id !== action.payload);
            storedState(state.notes)
        },
        updateNotes: (state, action) => {

            const { id, text, title } = action.payload;

            console.log("slice id : ", id)
            console.log("slice text : ", text)
            const note = state.notes.find(note => note.id === id);
            if (note) {
                note.text = text;
                note.title = title;
            }
            storedState(state.notes)
        }
    }

})

export const { addNotes, removeNotes, updateNotes } = noteSlice.actions
export default noteSlice.reducer;