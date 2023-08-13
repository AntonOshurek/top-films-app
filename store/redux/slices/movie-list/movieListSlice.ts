/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { movieListState } from '../../states/movie-list-state';

export const movieList = createSlice({
	name: 'movie-list',
	initialState: movieListState,

	reducers: {
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
		setError: (state, action: PayloadAction<string[]>) => {
			state.error = action.payload;
		},
		setFilmsList: (state, action: PayloadAction<{ [name: string]: string | number }[]>) => {
			state.moviesData = action.payload;
		},
	},
});
