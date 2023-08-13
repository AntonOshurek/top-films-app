import type { IMovieListStoreState } from '@/types/store-state-types';

const movieListState: IMovieListStoreState = {
	isLoading: false,
	error: null,
	moviesData: null,
};

export { movieListState };
