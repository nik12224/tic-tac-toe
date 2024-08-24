import { GameSymbol } from './game-symbol'

export function GameInfo({ isWin, winnerSequence, currentStep, winnerSymbol }) {
	return (
		<div className="mb-2.5">
			{isWin ? (
				'Ничья'
			) : (
				<>
					{winnerSequence ? 'Победитель: ' : 'Ход: '}
					{<GameSymbol symbol={winnerSymbol ?? currentStep} />}
				</>
			)}
		</div>
	)
}
