import { Table } from "react-bootstrap";

function HeadToHeadMatrix({matrixData}) {

    // Constructing the rows
    let tableRows = [];
    if (matrixData != undefined && matrixData != null && matrixData.count > 1) {
        for (let row=0; row<matrixData.count+1; row++) {
            let rowEntries = [];
            for (let col=0; col<matrixData.count+1; col++) {
                if (col == 0) {
                    rowEntries.push(row == 0 ? <td key={row + '-' + col}></td> : <td key={row + '-' + col}>{matrixData.tags[row-1]}</td>);
                    continue;
                }
                if (row == 0) {
                    rowEntries.push(<td key={row + '-' + col}>{matrixData.tags[col-1]}</td>);
                    continue;
                }
                let colPlayer = matrixData.tags[col-1];
                let rowPlayer = matrixData.tags[row-1];
    
                if (colPlayer == rowPlayer) {
                    rowEntries.push(<td key={row + '-' + col}></td>);
                    continue;
                }
                //alert("Building Row Entry\nRow: " + row + "\nCol: " + col + "\nRow Player: " + rowPlayer + "\nCol Player: " + colPlayer + "\nPlayer Data: \n" + JSON.stringify(matrixData, null, 2));

                rowEntries.push(<td key={row + '-' + col}>{matrixData.records[rowPlayer][colPlayer]} - {matrixData.records[colPlayer][rowPlayer]}</td>)
            }
            tableRows.push(
                <tr key={row}>{rowEntries}</tr>
            );
        }
    }
    return (
        <Table className="text-center" bordered>
            <tbody>
                {tableRows}
            </tbody>
        </Table>
    );
}

export default HeadToHeadMatrix;