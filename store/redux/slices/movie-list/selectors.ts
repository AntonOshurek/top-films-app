/* types */
import type { ReduxState } from '@/types/store-types';

export const selectorFilmsListIsLoading = (state: ReduxState) => state.movieList.isLoading;
