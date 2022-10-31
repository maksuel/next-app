import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document {
	render() {
		return (
			<Html>
				<Head />
				<body className="bg-black text-white">
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
