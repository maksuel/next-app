import { createContext, useContext } from 'react'
import { Props, Value } from './interfaces'

const defaultValue: Value = {
	source: ''
}

export const AppContext = createContext<Value>(defaultValue)

export default function AppProvider({ children }: Props) {
	const source = 'src/pages/index.tsx'
	return (
		<AppContext.Provider value={{ source }}>{children}</AppContext.Provider>
	)
}

export const useAppContext = () => useContext(AppContext)
