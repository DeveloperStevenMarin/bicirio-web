import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    data: [],
    loading: false,
    error: null
}

// Creamos un slice de usuarios utilizando createSlice de Redux Toolkit
const stationSlice = createSlice({
    name: 'stationListStore',
    initialState,
    reducers: {
        initializeStationList: (state, action) => {
            state.data = (action.payload);
        },

        deleteStationList: (state) => {
            state.data = {};
        }
    }
});



// Exportamos las acciones y el reducer de usuarios para su uso en otros componentes de la aplicación
export const { initializeStationList, deleteStationList } = stationSlice.actions;
export default stationSlice.reducer;
