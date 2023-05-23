import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    data: [],
    loading: false,
    error: null
}

// Creamos un slice de usuarios utilizando createSlice de Redux Toolkit
const userSlice = createSlice({
    name: 'userListStore',
    initialState,
    reducers: {
        initializeUserList: (state, action) => {
            state.data = (action.payload);
        },

        deleteUserList: (state) => {
            state.data = {};
        }
    }
});



// Exportamos las acciones y el reducer de usuarios para su uso en otros componentes de la aplicación
export const { initializeUserList, deleteUserList } = userSlice.actions;
export default userSlice.reducer;


// export const userSlice = createSlice({
//     name: 'userList',
//     initialState,
//     reducers: {
//         addUser: (state, action) => {
//             state.push(action.payload);
//         },
//         updateUser: (state, action) => {
//             state = action.payload;
//         }
//     }
// });

// export default userSlice.reducer

