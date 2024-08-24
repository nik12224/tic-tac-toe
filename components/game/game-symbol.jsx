import { SYMBOL_O, SYMBOL_X } from './constants'

export function GameSymbol({ symbol }) {
	const getSymbolClassName = symbol => {
		if (symbol === SYMBOL_O) return 'text-green-600'
		if (symbol === SYMBOL_X) return 'text-red-600'
		return ''
	}

	return <span className={`text-xl ${getSymbolClassName(symbol)}`}>{symbol}</span>
}
