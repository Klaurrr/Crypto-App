import ReactQueryProvider from "@/shared/configs/ReactQueryProvider";

import "./styles/globals.scss";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ReactQueryProvider>
			<html lang="en">
				<body>
					<div className="page">{children}</div>
				</body>
			</html>
		</ReactQueryProvider>
	);
}
