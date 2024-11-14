export default function GameOver({ winner, onRestart }) {
    return <div id="game-over">
        <h2>Игра Закончена!</h2>
        {winner && <p>{winner} выиграл!</p>}
        {!winner && <p>Ничья!</p>}
        <p>
            <button onClick={onRestart}>Начать Заново!</button>
        </p>
    </div>
}