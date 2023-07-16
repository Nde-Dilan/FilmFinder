import { createSlice } from "@reduxjs/toolkit"; 
const initialState = {
    user:{},
    isAuthenticated:false,
    sessionId:"",
}


const authSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser:(state,action)=>{

        }
    }
});

export const {setUser} = authSlice.actions;
//to connect tothe redux store
export default authSlice.reducer;
//Same thing as doing it inside the component
export const userSelector = (state)=> state.user

