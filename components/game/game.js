import { GameCell } from './game-cell'
import { GameInfo } from './game-info'
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
		<div className="flex flex-col items-center w-40 mx-auto my-24 border border-black p-5">
			<GameInfo isWin={isWin} winnerSymbol={winnerSymbol} currentStep={currentStep} />
			<div className="grid pt-px pl-px grid-cols-[repeat(3,_30px)] grid-rows-game-field">
				{cells.map((symbol, index) => {
					const isWinner = winnerSequence?.includes(index)
					return <GameCell key={index} symbol={symbol} onClick={() => handleCellClick(index)} />
				})}
			</div>
			<div className="cursor-pointer mt-2.5 bg-transparent border border-gray-400 py-1 px-3 rounded">
				<button onClick={handleCleanClick}>Сбросить</button>
			</div>
		</div>
	)
}
