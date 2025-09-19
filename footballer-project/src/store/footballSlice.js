import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// dummy api 
export const fetchFootballers = createAsyncThunk(
    "football/fetchFootballers",
    async ()=>{
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");

        return response.data.slice(0,10).map((player,index)=>({
            id:player.id,
            name:player.name,
            club:`Club ${index+1}`,
            country:`country ${index+1}`,
            goals:Math.floor(Math.random()*50),
            image:`https://i.pravatar.cc/150?img=${index + 10}`
        
        }));
    }
);

const footballSlice= createSlice({
    name:"football",
    initialState:{
        players:[],
        loading:false,
        error:null,
        
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchFootballers.pending,(state)=>{
            state.loading=true;
        })
        .addCase(fetchFootballers.fulfilled,(state,action)=>{
            state.loading=false;
            state.players=action.payload;
        })
        .addCase(fetchFootballers.rejected,(state,action)=>{
            state.loading= false;
            state.error= action.error.message;
        });
    },
});

export default footballSlice.reducer;