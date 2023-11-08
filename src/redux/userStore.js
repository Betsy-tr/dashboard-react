import { createSlice } from "@reduxjs/toolkit";

export const sliceUser = createSlice({
    
    name : "user" , 
    initialState : null ,
    reducers : {

            initUser : (state , action) => { 

                return action.payload 
            },
            resetUser : (state , action) => {
                
                return null
            }
    }
})

export const { initUser , resetUser } = player.actions 
export default sliceUser.reducer