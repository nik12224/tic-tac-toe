import styles from './game.module.css'
import { GameSymbol } from './game-symbol'

export function GameInfo({ isWin, winnerSequence, currentStep, winnerSymbol }) {
	return (
		<div className={styles['game-info']}>
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
