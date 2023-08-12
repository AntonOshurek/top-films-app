'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
/* styles */
import style from './footer-nav.module.css';

const FooterNav = () => {
	const pathName = usePathname();

	return (
		<section className={`${style['footer-nav']}`}>
			<h2 className={`${style['footer-nav__title']}`}>Page navigation</h2>

			<ul className={`${style['footer-nav__list']}`}>
				<li className={`${style['footer-nav__item']}`}>
					<Link
						className={`${style['footer-nav__link']} ${
							pathName === '/' ? style['footer-nav__link--active'] : ''
						}`}
						href="/"
					>
						Films
					</Link>
				</li>
				<li className={`${style['footer-nav__item']}`}>
					<a className={`${style['footer-nav__link']}`} href="#">
						Serials
					</a>
				</li>
				<li className={`${style['footer-nav__item']}`}>
					<a className={`${style['footer-nav__link']}`} href="#">
						new
					</a>
				</li>
				<li className={`${style['footer-nav__item']}`}>
					<a className={`${style['footer-nav__link']}`} href="#">
						timeline
					</a>
				</li>
			</ul>
		</section>
	);
};

export default FooterNav;
