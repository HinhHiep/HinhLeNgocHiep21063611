import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//get data from mockapi
export const fetchData = createAsyncThunk('fetchData', async () => {
  const response = await fetch('https://645b025d65bd868e9328990d.mockapi.io/bike');
    const data = await response.json();
    console.log(data);
    return data;
});

export const addData = createAsyncThunk('addData', async ({name, price}) => {
    const response = await fetch('https://645b025d65bd868e9328990d.mockapi.io/bike', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, price, imageURL: 'https://i.ibb.co/LN0S5x7/bike1.png'}),
    });
    const data = await response.json();
    return data;
});

//slice
const slice = createSlice({
    name: 'bike',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });

            builder
            .addCase(addData.pending, (state) => {
                state.loading = true;
            })
            .addCase(addData.fulfilled, (state, action) => {
                state.data.push(action.payload);
                state.loading = false;
            })
            .addCase(addData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
    });

    export default slice.reducer;