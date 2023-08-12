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

			<button className={`${style['app-header__login-btn']}`} type="button">
				login
				<svg
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
					focusable="false"
					height="24"
					viewBox="0 -960 960 960"
					width="24"
				>
					<path d="M440.23-502Q357-502 297.5-561.27 238-620.54 238-703.77 238-787 297.27-846q59.27-59 142.5-59 83.23 0 142.73 58.981Q642-787.037 642-704.212q0 83.237-59.27 142.725Q523.46-502 440.23-502Zm.235-136Q468-638 487-657.465q19-19.464 19-47Q506-732 486.948-751q-19.052-19-46.913-19Q413-770 393.5-750.938 374-731.875 374-704q0 27.05 19.465 46.525 19.464 19.475 47 19.475ZM74-86v-159q0-45.239 22.938-83.544Q119.874-366.849 161-387q47-25 115.5-45.5T430-454q16 0 39.5 2t33.5 3q-2 37 12 78.5t37 66.5q-28-7-58.5-10.5T433-318q-60 0-118 17t-86 32q-7.5 4-13.25 12T210-241v19l373 1v135H74Zm656 19-67-80v-169q-34-17-57-50.05t-23-73.742q0-57.17 39.941-97.189 39.941-40.019 97-40.019T817-536.981q40 40.019 40 97.189 0 41.472-22.5 74.396Q812-332.473 777-316v19l47 45-40 39 40 39-94 107Zm-10-330q19 0 31-12t12-31q0-19-12-31t-31-12q-19 0-31 12t-12 31q0 19 12 31t31 12ZM440-704h-.5.5Zm-7 386Z" />
				</svg>
			</button>
		</header>
	);
};

export default AppHeader;
