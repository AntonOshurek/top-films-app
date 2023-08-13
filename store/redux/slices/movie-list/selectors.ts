/* types */
import type { ReduxState } from '@/types/store-types';

const selectorFilmsListIsLoading = (state: ReduxState) => state.movieList.isLoading;
const selectorFilmsListError = (state: ReduxState) => state.movieList.error;
const selectorFilmsListData = (state: ReduxState) => state.movieList.moviesData;

export { selectorFilmsListIsLoading, selectorFilmsListError, selectorFilmsListData };
