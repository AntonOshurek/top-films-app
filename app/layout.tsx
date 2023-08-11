import type { Metadata } from 'next';
/* Components */
import { AppHeader, AppFooter } from '@/components';
/* store */
import { Providers } from '@/lib/providers';
/* styles */
import './global-styles/globals.css';
import './style-variables/color-variables.css';
import './style-variables/width-variables.css';
import './style-variables/font-variables.css';

export const metadata: Metadata = {
	title: 'TopFilms',
	description: 'App for showing for you top fils from all of the world!',
};

export default function RootLayout(props: React.PropsWithChildren) {
	return (
		<Providers>
			<html lang="en">
				<body className="body">
					<AppHeader />
					<main className="main container">{props.children}</main>
					<AppFooter />
				</body>
			</html>
		</Providers>
	);
}
