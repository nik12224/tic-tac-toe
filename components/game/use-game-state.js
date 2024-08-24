import { useState } from 'react'
import { SYMBOL_O, SYMBOL_X } from './constants'

const computeWinner = cells => {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	]

	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i]
		if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
			return [a, b, c]
		}
	}
}

const initialCellsState = [null, null, null, null, null, null, null, null, null]

export function useGameState() {
	const [cells, setCells] = useState(initialCellsState)
	const [currentStep, setCurrentStep] = useState(SYMBOL_O)
	const [winnerSequence, setWinnerSequence] = useState(undefined)
	const [isWin, setIsWin] = useState(false)

	const winnerSymbol = winnerSequence ? cells[winnerSequence[0]] : undefined

	const handleCellClick = index => {
		if (cells[index] || winnerSequence) {
			return
		}

		const cellsCopy = cells.slice()
		cellsCopy[index] = currentStep
		const winner = computeWinner(cellsCopy)

		setCells(cellsCopy)
		setCurrentStep(currentStep === SYMBOL_O ? SYMBOL_X : SYMBOL_O)
		setWinnerSequence(winner)

		if (!winner) {
			if (cellsCopy.every(cell => Boolean(cell))) {
				setIsWin(true)
			}
		}
	}

	const handleCleanClick = () => {
		setCells(initialCellsState) // обновить масив
		setCurrentStep(SYMBOL_O) // символ начала игры
		setWinnerSequence(undefined) // нет выйгрышной комбинации
		setIsWin(false)
	}

	return {
		cells,
		currentStep,
		winnerSequence,
		isWin,
		handleCellClick,
		handleCleanClick,
		winnerSymbol,
	}
}
