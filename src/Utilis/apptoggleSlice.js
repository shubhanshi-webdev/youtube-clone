import { createSlice } from "@reduxjs/toolkit";

const apptoggleSlice = createSlice({
    name: 'appToggle',
    initialState: {
        isToggleMenu : true
    },
    reducers: {
        toggleMenu : (state) => {
            state.isToggleMenu = !state.isToggleMenu
        }
    }
})

export default apptoggleSlice.reducer;
export const { toggleMenu} = apptoggleSlice.actions;