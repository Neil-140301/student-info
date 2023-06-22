import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		name: '',
		age: '',
	},
	reducers: {
		setName: (state, action) => {
			console.log('name', action.payload);
			state.name = action.payload;
		},
		setAge: (state, action) => {
			console.log('age', action.payload);
			state.age = action.payload;
		},
	},
});

export const { setName, setAge } = userSlice.actions;

export default userSlice.reducer;
