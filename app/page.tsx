'use client';
import { useDispatch } from '@/hooks/store-hooks';
import { ThunkGetFilmsList } from '@/store/redux/slices/movie-list/thunks';

/* Components */

export default function IndexPage() {
	const dispatch = useDispatch();
	dispatch(ThunkGetFilmsList());

	return (
		<div>
			<h2>foobar</h2>
		</div>
	);
}
