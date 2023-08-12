/* styles */
import style from './app-nav.module.css';

const AppNav = () => {
	return (
		<nav className={`${style['app-nav']}`}>
			<ul className={`${style['app-nav__list']}`}>
				<li className={`${style['app-nav__item']}`}>
					<a className={`${style['app-nav__link']}`} href="#">
						Films
					</a>
				</li>
				<li className={`${style['app-nav__item']}`}>
					<a className={`${style['app-nav__link']}`} href="#">
						Serials
					</a>
				</li>
				<li className={`${style['app-nav__item']}`}>
					<a className={`${style['app-nav__link']}`} href="#">
						new
					</a>
				</li>
				<li className={`${style['app-nav__item']}`}>
					<a className={`${style['app-nav__link']}`} href="#">
						timeline
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default AppNav;
