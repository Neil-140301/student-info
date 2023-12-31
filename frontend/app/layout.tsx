'use client';

import 'react-chatbot-kit/build/main.css';
import './globals.css';
import { Inter } from 'next/font/google';
import { Provider } from 'react-redux';
import appStore from './chatbot/appStore';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Student Info',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Provider store={appStore}>{children}</Provider>
			</body>
		</html>
	);
}
