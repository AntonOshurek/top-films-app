/* components */
import { LoginBtn } from '../';
/* styles */
import style from './app-header.module.css';

const AppHeader = () => {
	return (
		<header className={`${style['app-header']} container`}>
			<h1 className={`${style['app-header__title']}`}>Top Films App</h1>

			<nav>
				<ul>
					<li>
						<a href="#">Films</a>
					</li>
				</ul>
			</nav>

			<LoginBtn />
		</header>
	);
};

export default AppHeader;
