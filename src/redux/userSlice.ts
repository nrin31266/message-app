// redux/userSlice.ts
import { MyInfo } from '@/models/UserModel';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';



const initialState: MyInfo = {
    id: "",
    email: "",
    createdAt: "",
    enabled: false,
    roles: [],
    updatedAt: "",
    username: "",
    profile: {
        avatar: "",
        createdAt: "",
        dob: "",
        firstName: "",
        gender: "",
        lastName: "",
        id: "",
        phone: "",
        updatedAt: ""
    }
};

const userSlice = createSlice({
  name: 'user',
  initialState: {data: initialState},
  reducers: {
    setUser: (state, action: PayloadAction<MyInfo>) => {
        console.log(action.payload)
      state.data = action.payload;
    },
    clearUser: (state) => {
      state.data = initialState;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export const userReducer = userSlice.reducer;

export const userSelector = (state:any) => state.user.data;