/* Instruments */
import { movieList } from './slices';

const rootReducer = {
	movieList: movieList.reducer,
};

export { rootReducer };
