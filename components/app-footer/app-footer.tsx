/* components */
import { FooterNav } from '../';
/* styles */
import style from './app-footer.module.css';

const AppFooter = () => {
	return (
		<footer className={`${style['app-footer']} container`}>
			<FooterNav />

			<p>© copyright 1998 Exampland Emperor</p>
		</footer>
	);
};

export default AppFooter;
