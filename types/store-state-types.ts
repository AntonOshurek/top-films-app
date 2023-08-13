interface IMovieListStoreState {
	isLoading: boolean;
	error: string[] | null;
	moviesData: { [name: string]: string | number }[] | null;
}

export type { IMovieListStoreState };
