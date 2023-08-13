/* types */
import type { ReduxThunkAction } from '@/types/store-types';
/* Instruments */
import { movieList } from './movieListSlice';

export const ThunkGetFilmsList = (): ReduxThunkAction => (dispatch) => {
	dispatch(movieList.actions.setLoading(true));

	const url =
		'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDJhNjEyZmExMTE4MzIyM2FiOWY5ZTc1MDJmODM2MyIsInN1YiI6IjYzYTg3MDJiZTRiNTc2MDBhMDUxZGUzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Lo5QY_UXEx9a0VuNiffwBxgf3wfFje9HuVDZJRRMkbY',
		},
	};

	new Promise((resolve) => {
		fetch(url, options)
			.then((res) => {
				resolve(res.json());
				// dispatch(movieList.actions.setFilmsList(res.data));
			})
			.catch((err) => {
				console.log(err);
				dispatch(movieList.actions.setError(err));
			});
	}).then((res) => {
		console.log(res);
	});
};
