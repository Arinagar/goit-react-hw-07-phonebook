import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'phone-contacts',

  initialState: { items: [] },

  reducers: {
    addContact(state, { payload }) {
      state.items = [...state.items, payload];
    },
    deleteContact(state, { payload }) {
      state.items = state.items.filter(contact => contact.id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
