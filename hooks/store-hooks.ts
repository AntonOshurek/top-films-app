import {
	useSelector as useReduxSelector,
	useDispatch as useReduxDispatch,
	type TypedUseSelectorHook,
} from 'react-redux';
/* types */
import type { ReduxDispatch, ReduxState } from '@/types/store-types';

export const useDispatch = () => useReduxDispatch<ReduxDispatch>();
export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector;
