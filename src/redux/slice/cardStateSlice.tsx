import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchCards = createAsyncThunk(
    'cardState/fetchCards',
    async function (_, { rejectWithValue }) {
        try {
            const response = await fetch('https://api.itbook.store/1.0/new');
            if (!response.ok) {
                throw new Error('Something goes wrong!');
            }
            const data = await response.json();
            return data;
        }
        catch (error) {
            return rejectWithValue((error as Error).message);
        }

    }
);

export const cardStateSlice = createSlice({
    name: 'cardState',
    initialState: {
        cards: [],
        status: null,
        error: null
    },
    reducers: {
    },
    extraReducers: (builder) => {
        return builder.addCase(fetchCards.pending, (state: any) => {
            state.status = 'loading';
            state.error = null;
        }),
            builder.addCase(fetchCards.fulfilled, (state: any, { payload }: { payload: any }) => {
                state.status = 'resolved';
                state.error = null;
                state.cards = payload;
            }),
            builder.addCase(fetchCards.rejected, (state: any, { payload }: { payload: any }) => {
                state.status = 'rejected';
                state.error = payload;
                state.cards = [];
            })
    }
});

export const { } = cardStateSlice.actions;

export default cardStateSlice.reducer;