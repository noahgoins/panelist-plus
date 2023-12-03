import { useState } from "react";

import { Button, Card, CardBody, Col, Form, Row, Tab, Table, Tabs } from "react-bootstrap";
import SetRecordElement from "./SetRecordElement";
import HeadToHeadMatrix from "./HeadToHeadMatrix";


// ResultsPanel must be passed a results object which includes every bit of data it might need.
function ResultsPanel({tempSetData, results}) {

    const [matrixData, setMatrixData] = useState(null);
    const [selectedPlayers, setSelectedPlayers] = useState(new Set());

    function handlePlayerCheck(event) {
        let player = event.target.id;
        let status = event.target.checked;
        status ? selectedPlayers.add(player) : selectedPlayers.delete(player);

        /*
        var tempMatrix = {
            count: 0,
            tags: [],
            records : {}
        };
        tempMatrix.count = selectedPlayers.size;
        for (let player of selectedPlayers.values()) {
            tempMatrix.tags.push(player);
            tempMatrix.records[player] = matrixData.players.records[player];
        }

        setSubMatrixPlayers(tempMatrix);
        */
    }

    // TEMP
    var tempSerializedQueryData = {
        count: 25,
        players: ['Player1','Player2','Player3','Player4','Player5','Player6','Player7','Player8','Player9','Player10','Player11','Player12','Player13','Player14','Player15','Player16','Player17','Player18','Player19','Player20','Player21','Player22','Player23','Player24','Player25'],
        records: {"Player1":{"Player2":0,"Player3":0,"Player4":0,"Player5":0,"Player6":0,"Player7":0,"Player8":0,"Player9":0,"Player10":0,"Player11":0,"Player12":0,"Player13":0,"Player14":0,"Player15":0,"Player16":0,"Player17":0,"Player18":0,"Player19":0,"Player20":0,"Player21":0,"Player22":0,"Player23":0,"Player24":0,"Player25":0,},"Player2":{"Player1":0,"Player3":0,"Player4":0,"Player5":0,"Player6":0,"Player7":0,"Player8":0,"Player9":0,"Player10":0,"Player11":0,"Player12":0,"Player13":0,"Player14":0,"Player15":0,"Player16":0,"Player17":0,"Player18":0,"Player19":0,"Player20":0,"Player21":0,"Player22":0,"Player23":0,"Player24":0,"Player25":0,},"Player3":{"Player1":0,"Player2":0,"Player4":0,"Player5":0,"Player6":0,"Player7":0,"Player8":0,"Player9":0,"Player10":0,"Player11":0,"Player12":0,"Player13":0,"Player14":0,"Player15":0,"Player16":0,"Player17":0,"Player18":0,"Player19":0,"Player20":0,"Player21":0,"Player22":0,"Player23":0,"Player24":0,"Player25":0,},"Player4":{"Player1":0,"Player2":0,"Player3":0,"Player5":0,"Player6":0,"Player7":0,"Player8":0,"Player9":0,"Player10":0,"Player11":0,"Player12":0,"Player13":0,"Player14":0,"Player15":0,"Player16":0,"Player17":0,"Player18":0,"Player19":0,"Player20":0,"Player21":0,"Player22":0,"Player23":0,"Player24":0,"Player25":0,},"Player5":{"Player1":0,"Player2":0,"Player3":0,"Player4":0,"Player6":0,"Player7":0,"Player8":0,"Player9":0,"Player10":0,"Player11":0,"Player12":0,"Player13":0,"Player14":0,"Player15":0,"Player16":0,"Player17":0,"Player18":0,"Player19":0,"Player20":0,"Player21":0,"Player22":0,"Player23":0,"Player24":0,"Player25":0,},"Player6":{"Player1":0,"Player2":0,"Player3":0,"Player4":0,"Player5":0,"Player7":0,"Player8":0,"Player9":0,"Player10":0,"Player11":0,"Player12":0,"Player13":0,"Player14":0,"Player15":0,"Player16":0,"Player17":0,"Player18":0,"Player19":0,"Player20":0,"Player21":0,"Player22":0,"Player23":0,"Player24":0,"Player25":0,},"Player7":{"Player1":0,"Player2":0,"Player3":0,"Player4":0,"Player5":0,"Player6":0,"Player8":0,"Player9":0,"Player10":0,"Player11":0,"Player12":0,"Player13":0,"Player14":0,"Player15":0,"Player16":0,"Player17":0,"Player18":0,"Player19":0,"Player20":0,"Player21":0,"Player22":0,"Player23":0,"Player24":0,"Player25":0,},"Player8":{"Player1":0,"Player2":0,"Player3":0,"Player4":0,"Player5":0,"Player6":0,"Player7":0,"Player9":0,"Player10":0,"Player11":0,"Player12":0,"Player13":0,"Player14":0,"Player15":0,"Player16":0,"Player17":0,"Player18":0,"Player19":0,"Player20":0,"Player21":0,"Player22":0,"Player23":0,"Player24":0,"Player25":0,},"Player9":{"Player1":0,"Player2":0,"Player3":0,"Player4":0,"Player5":0,"Player6":0,"Player7":0,"Player8":0,"Player10":0,"Player11":0,"Player12":0,"Player13":0,"Player14":0,"Player15":0,"Player16":0,"Player17":0,"Player18":0,"Player19":0,"Player20":0,"Player21":0,"Player22":0,"Player23":0,"Player24":0,"Player25":0,},"Player10":{"Player1":0,"Player2":0,"Player3":0,"Player4":0,"Player5":0,"Player6":0,"Player7":0,"Player8":0,"Player9":0,"Player11":0,"Player12":0,"Player13":0,"Player14":0,"Player15":0,"Player16":0,"Player17":0,"Player18":0,"Player19":0,"Player20":0,"Player21":0,"Player22":0,"Player23":0,"Player24":0,"Player25":0,},"Player11":{"Player1":0,"Player2":0,"Player3":0,"Player4":0,"Player5":0,"Player6":0,"Player7":0,"Player8":0,"Player9":0,"Player10":0,"Player12":0,"Player13":0,"Player14":0,"Player15":0,"Player16":0,"Player17":0,"Player18":0,"Player19":0,"Player20":0,"Player21":0,"Player22":0,"Player23":0,"Player24":0,"Player25":0,},"Player12":{"Player1":0,"Player2":0,"Player3":0,"Player4":0,"Player5":0,"Player6":0,"Player7":0,"Player8":0,"Player9":0,"Player10":0,"Player11":0,"Player13":0,"Player14":0,"Player15":0,"Player16":0,"Player17":0,"Player18":0,"Player19":0,"Player20":0,"Player21":0,"Player22":0,"Player23":0,"Player24":0,"Player25":0,},"Player13":{"Player1":0,"Player2":0,"Player3":0,"Player4":0,"Player5":0,"Player6":0,"Player7":0,"Player8":0,"Player9":0,"Player10":0,"Player11":0,"Player12":0,"Player14":0,"Player15":0,"Player16":0,"Player17":0,"Player18":0,"Player19":0,"Player20":0,"Player21":0,"Player22":0,"Player23":0,"Player24":0,"Player25":0,},"Player14":{"Player1":0,"Player2":0,"Player3":0,"Player4":0,"Player5":0,"Player6":0,"Player7":0,"Player8":0,"Player9":0,"Player10":0,"Player11":0,"Player12":0,"Player13":0,"Player15":0,"Player16":0,"Player17":0,"Player18":0,"Player19":0,"Player20":0,"Player21":0,"Player22":0,"Player23":0,"Player24":0,"Player25":0,},"Player15":{"Player1":0,"Player2":0,"Player3":0,"Player4":0,"Player5":0,"Player6":0,"Player7":0,"Player8":0,"Player9":0,"Player10":0,"Player11":0,"Player12":0,"Player13":0,"Player14":0,"Player16":0,"Player17":0,"Player18":0,"Player19":0,"Player20":0,"Player21":0,"Player22":0,"Player23":0,"Player24":0,"Player25":0,},"Player16":{"Player1":0,"Player2":0,"Player3":0,"Player4":0,"Player5":0,"Player6":0,"Player7":0,"Player8":0,"Player9":0,"Player10":0,"Player11":0,"Player12":0,"Player13":0,"Player14":0,"Player15":0,"Player17":0,"Player18":0,"Player19":0,"Player20":0,"Player21":0,"Player22":0,"Player23":0,"Player24":0,"Player25":0,},"Player17":{"Player1":0,"Player2":0,"Player3":0,"Player4":0,"Player5":0,"Player6":0,"Player7":0,"Player8":0,"Player9":0,"Player10":0,"Player11":0,"Player12":0,"Player13":0,"Player14":0,"Player15":0,"Player16":0,"Player18":0,"Player19":0,"Player20":0,"Player21":0,"Player22":0,"Player23":0,"Player24":0,"Player25":0,},"Player18":{"Player1":0,"Player2":0,"Player3":0,"Player4":0,"Player5":0,"Player6":0,"Player7":0,"Player8":0,"Player9":0,"Player10":0,"Player11":0,"Player12":0,"Player13":0,"Player14":0,"Player15":0,"Player16":0,"Player17":0,"Player19":0,"Player20":0,"Player21":0,"Player22":0,"Player23":0,"Player24":0,"Player25":0,},"Player19":{"Player1":0,"Player2":0,"Player3":0,"Player4":0,"Player5":0,"Player6":0,"Player7":0,"Player8":0,"Player9":0,"Player10":0,"Player11":0,"Player12":0,"Player13":0,"Player14":0,"Player15":0,"Player16":0,"Player17":0,"Player18":0,"Player20":0,"Player21":0,"Player22":0,"Player23":0,"Player24":0,"Player25":0,},"Player20":{"Player1":0,"Player2":0,"Player3":0,"Player4":0,"Player5":0,"Player6":0,"Player7":0,"Player8":0,"Player9":0,"Player10":0,"Player11":0,"Player12":0,"Player13":0,"Player14":0,"Player15":0,"Player16":0,"Player17":0,"Player18":0,"Player19":0,"Player21":0,"Player22":0,"Player23":0,"Player24":0,"Player25":0,},"Player21":{"Player1":0,"Player2":0,"Player3":0,"Player4":0,"Player5":0,"Player6":0,"Player7":0,"Player8":0,"Player9":0,"Player10":0,"Player11":0,"Player12":0,"Player13":0,"Player14":0,"Player15":0,"Player16":0,"Player17":0,"Player18":0,"Player19":0,"Player20":0,"Player22":0,"Player23":0,"Player24":0,"Player25":0,},"Player22":{"Player1":0,"Player2":0,"Player3":0,"Player4":0,"Player5":0,"Player6":0,"Player7":0,"Player8":0,"Player9":0,"Player10":0,"Player11":0,"Player12":0,"Player13":0,"Player14":0,"Player15":0,"Player16":0,"Player17":0,"Player18":0,"Player19":0,"Player20":0,"Player21":0,"Player23":0,"Player24":0,"Player25":0,},"Player23":{"Player1":0,"Player2":0,"Player3":0,"Player4":0,"Player5":0,"Player6":0,"Player7":0,"Player8":0,"Player9":0,"Player10":0,"Player11":0,"Player12":0,"Player13":0,"Player14":0,"Player15":0,"Player16":0,"Player17":0,"Player18":0,"Player19":0,"Player20":0,"Player21":0,"Player22":0,"Player24":0,"Player25":0,},"Player24":{"Player1":0,"Player2":0,"Player3":0,"Player4":0,"Player5":0,"Player6":0,"Player7":0,"Player8":0,"Player9":0,"Player10":0,"Player11":0,"Player12":0,"Player13":0,"Player14":0,"Player15":0,"Player16":0,"Player17":0,"Player18":0,"Player19":0,"Player20":0,"Player21":0,"Player22":0,"Player23":0,"Player25":0,},"Player25":{"Player1":0,"Player2":0,"Player3":0,"Player4":0,"Player5":0,"Player6":0,"Player7":0,"Player8":0,"Player9":0,"Player10":0,"Player11":0,"Player12":0,"Player13":0,"Player14":0,"Player15":0,"Player16":0,"Player17":0,"Player18":0,"Player19":0,"Player20":0,"Player21":0,"Player22":0,"Player23":0,"Player24":0,},}
    };

    function generateMatrix() {
        // Normally we would perform a query here and then transform the data into the object style need but 
        // instead we are going to use pregenerated test data for testing.
        let serializedQueryData = tempSerializedQueryData;

        var tempMatrix = {
            count: 0,
            tags: [],
            records : {}
        };
        tempMatrix.count = selectedPlayers.size;
        for (let player of selectedPlayers.values()) {
            tempMatrix.tags.push(player);
            tempMatrix.records[player] = serializedQueryData.records[player];
        }
        setMatrixData(tempMatrix);
    }

    // Code for Sets Tab.
    let setRecordElements = []
    if (tempSetData != undefined) {
        for (let i=0; i<tempSetData.length; i++) {
            setRecordElements.push(<SetRecordElement key={i} setData={tempSetData[i]} />);
        }
    }

    // Code for Matrix Tab.
    const playerCheckboxes = [];
    for (let player in results.players) {
        playerCheckboxes.push(<Form.Check type="checkbox" key={player} id={player} label={player} onChange={handlePlayerCheck}/>);
    }

    // Code for Players Tab.
    const playersList = [];
    for (let player in results.players) {
        let playerWins = results.players[player].wins;
        let playerLosses = results.players[player].losses;
        let playerSets = playerWins+playerLosses;
        let playerRatio = Math.round(playerSets == 0 ? 0 : playerWins / playerSets, 2).toFixed(2);
        let playerEvents = results.players[player].events.length;

        playersList.push(
            <tr key={player}>
                <td>{player}</td>
                <td>{playerWins} - {playerLosses} ({playerRatio}%)</td>
                <td>{playerEvents}</td>
            </tr>
        );
    }

    return (
        <div className="h-100">
            <Tabs defaultActiveKey="results" id="resultsTabs" className="" justify>
                <Tab eventKey="results" title="Results">
                    <Card className="rounded-top-0 rounded-bottom">
                        <CardBody>
                            <h4 className="text-center">All Available Sets</h4>
                            <Card>
                                <CardBody className="p-0 overflow-auto" style={{maxHeight: 500 + 'px'}}>
                                    <Table striped hover className="m-0">
                                        <tbody>
                                            {setRecordElements}
                                        </tbody>
                                    </Table>
                                </CardBody>
                            </Card>
                        </CardBody>
                    </Card>
                </Tab>
                <Tab eventKey="matrix" title="Matrix">
                    <Card className="rounded-top-0 rounded-bottom">
                        <CardBody>
                            <Row>
                                <Col>
                                    <Card>
                                        <CardBody className="overflow-auto" style={{maxHeight: 210 + 'px'}}>
                                            <h5>Select Players</h5>
                                            {playerCheckboxes}
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <CardBody className="overflow-auto" style={{maxHeight: 210 + 'px'}}>
                                            <div className="d-flex">
                                                <Button fluid variant="primary" className="flex-grow-1" onClick={generateMatrix}>Generate Matrix</Button>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                            <hr />
                            <HeadToHeadMatrix matrixData={matrixData}/>
                        </CardBody>
                    </Card>
                </Tab>
                <Tab eventKey="players" title="Players">
                    <Card className="rounded-top-0 rounded-bottom">
                        <CardBody>
                            <Card>
                                <CardBody className="p-0 overflow-auto" style={{maxHeight: 500 + 'px'}}>
                                    <Table striped hover>
                                        <thead>
                                            <tr>
                                                <th>Tag</th>
                                                <th>W - L (%)</th>
                                                <th>Events</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {playersList}
                                        </tbody>
                                    </Table>
                                </CardBody>
                            </Card>
                        </CardBody>
                    </Card>
                </Tab>
            </Tabs>
        </div>
    );
}

export default ResultsPanel