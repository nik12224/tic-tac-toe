import { GameCell } from './game-cell'
import { GameInfo } from './game-info'
import styles from './game.module.css'
import { useGameState } from './use-game-state'

export default function Game() {
	const {
		cells,
		currentStep,
		winnerSequence,
		isWin,
		handleCellClick,
		handleCleanClick,
		winnerSymbol,
	} = useGameState()

	return (
		<div className={styles['game']}>
			<GameInfo isWin={isWin} winnerSymbol={winnerSymbol} currentStep={currentStep} />
			<div className={styles['game-field']}>
				{cells.map((symbol, index) => {
					const isWinner = winnerSequence?.includes(index)
					return <GameCell key={index} symbol={symbol} onClick={() => handleCellClick(index)} />
				})}
			</div>
			<div className={styles['game-clean']}>
				<button onClick={handleCleanClick}>Сбросить</button>
			</div>
		</div>
	)
}
