// userSlice.js

import { createSlice } from '@reduxjs/toolkit';

const loadUserFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('user');
    return serializedState ? JSON.parse(serializedState) : { id: null }; // Ajoutez la gestion de l'ID de l'utilisateur ici
  } catch (e) {
    console.error('Could not load user from localStorage', e);
    return { id: null }; // Ajoutez la gestion de l'ID de l'utilisateur ici
  }
};

const saveUserToLocalStorage = (user) => {
  try {
    const serializedState = JSON.stringify(user);
    localStorage.setItem('user', serializedState);
  } catch (e) {
    console.error('Could not save user to localStorage', e);
  }
};

const initialState = loadUserFromLocalStorage();

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state = action.payload;
      saveUserToLocalStorage(state);
      return state;
    },
    clearUser() {
      localStorage.removeItem('user');
      return { id: null }; // Assurez-vous que l'utilisateur est correctement déconnecté
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
