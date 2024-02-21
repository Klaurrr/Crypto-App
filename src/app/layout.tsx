import type { Metadata } from "next";

import "./styles/globals.scss";

export const metadata: Metadata = {
	title: "Coin Bank",
	description: "Crypto App by Egor Monoamines and Artem Catecholamines",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<div className="page">{children}</div>
			</body>
		</html>
	);
}
