import React, { FC } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import Header from 'components/Header/Header'
import { ThemeProvider, css } from '@emotion/react';
import { lightTheme, darkTheme, tealTheme } from 'assets/jss/themes'
import { wrapper } from 'lib/redux/store';
import { useSelector, shallowEqual } from 'react-redux';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
	const { theme } = useSelector(
		(state) => ({
			theme: state.theme
		}),
		shallowEqual
	);

	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta httpEquiv="x-ua-compatible" content="ie=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no"
				/>
				<meta	name="description" content="next-red-emo"	/>
				<title>{` ❤️ `}next-red-emo-mat</title>
				<meta name="theme-color" content="#008080" />
			</Head>
			<ThemeProvider 
				theme={
					theme.theme === 'dark' ? darkTheme :
					theme.theme === 'teal' ? tealTheme : lightTheme // default to light
				}
			>
				<Header />

				<Component {...pageProps} />

			</ThemeProvider>
		</>
	);
};

// this disables the ability to perform automatic static optimization,
// causing every page in the app to be server-side rendered.
// (cf. https://nextjs.org/docs/basic-features/typescript#custom-app)
// MyApp.getInitialProps = async ({ Component, router, ctx }: AppContext) => {
// 	let pageProps = {};

// 	// calls page's `getInitialProps` and fills `appProps.pageProps`
// 	if (Component.getInitialProps) {
// 		pageProps = await Component.getInitialProps(ctx);
// 	}

// 	return { pageProps };
// };

export default wrapper.withRedux(MyApp);