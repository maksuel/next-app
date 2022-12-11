import '@/styles/globals.css'
import { ReactNode } from 'react'

interface Props {
	children: ReactNode
}

export default function Layout({ children }: Props) {
	return (
		<html>
			<head></head>
			<body className="bg-black text-white">{children}</body>
		</html>
	)
}
