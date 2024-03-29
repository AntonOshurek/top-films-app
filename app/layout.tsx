import type { Metadata } from 'next';
import { PT_Sans } from 'next/font/google';
/* Components */
import { AppHeader, AppFooter } from '@/components';
/* store */
import { Providers } from '@/store/providers';
/* styles */
import '@/styles/global-styles/globals.css';
import '@/styles/style-variables/color-variables.css';
import '@/styles/style-variables/width-variables.css';
import '@/styles/style-variables/font-variables.css';

const ptSans = PT_Sans({
	subsets: ['latin'],
	display: 'swap',
	weight: ['400', '700'],
	fallback: ['Arial'],
	style: 'normal',
	variable: '--basic-font',
});

export const metadata: Metadata = {
	title: 'TopFilms',
	description: 'App for showing for you top fils from all of the world!',
};

export default function RootLayout(props: React.PropsWithChildren) {
	return (
		<Providers>
			<html lang="en" className={`${ptSans.className} ${ptSans.variable}`}>
				<body className="body">
					<AppHeader />
					<main className="main container">{props.children}</main>
					<AppFooter />
				</body>
			</html>
		</Providers>
	);
}
