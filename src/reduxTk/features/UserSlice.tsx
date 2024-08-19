import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface InitialState {
  accessToken: string | null;
}

const initialState: InitialState = {
  accessToken: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,

  reducers: {
    loginUser: (state, {payload}: PayloadAction<string>) => {
      state.accessToken = payload;
    },
  },
});

export const {loginUser} = userSlice.actions;
export default userSlice.reducer;
