

function SetRecordElement ({setData}) {

    let player1 = setData.players.p1;
    let player2 = setData.players.p2;
    let tournamentName = setData.tournament.name;
    let tournamentURL = setData.tournament.url;

    return (
        <tr>
            <td>
                <div className="d-flex">
                    <div className="px-1 flex-grow-1 text-end"><span className="fst-italic">{player1.sponsor}</span> | {player1.tag}</div>
                    <div className="px-1">{player1.score} - {player2.score}</div>
                    <div className="px-1 flex-grow-1 text-start"><span className="fst-italic">{player2.sponsor}</span> | {player2.tag}</div>
                    <div className="px-1 flex-grow-1 text-center">[<a href={tournamentURL} target="_blank">{tournamentName}</a>]</div>
                </div>
            </td>
        </tr>
    );
}

export default SetRecordElement;