import '../styles/navBar-style.css';

function NavBar(props) {

    return (
        <div className="navBar">
            <h1 className="game-title">Memory Game</h1>
            <div className="scores-div">
                <span className="current-score">Score: {props.currentScore}</span>
                <span className="best-score">Best Score: {props.bestScore}</span>
            </div>
        </div>
    )
}

export {
    NavBar
}