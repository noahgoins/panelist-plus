import QueryFormPanel from "./components/QueryFormPanel";
import ResultsPanel from "./components/ResultsPanel";

import fetchQuery from "./utils/query";

import 'bootstrap/dist/css/bootstrap.min.css';

const { Container, Row, Col } = require("react-bootstrap");

function App() {

    function handleQuerySubmit(vars) {
        let country = vars["country"];
        let state = vars["state"];
        let afterDate = vars["afterDate"];
        let beforeDate = vars["beforeDate"];
        alert("Country: " + country + "\nState: " + state + "\nAfter Date: " + afterDate + "\nBefore Date: " + beforeDate);
    }

    // Temp Test Data Objects
    let testSetDataTemplate = {
        players: {
            p1: { tag: "Player A", sponsor: "Sponsor", score: 0 },
            p2: { tag: "Player B", sponsor: "Sponsor", score: 0 },
        },
        tournament:  {
            name: "Chill Out!",
            id: 1231231,
            url: "https://www.start.gg/tournament/chill-out/"
        }
    }

    let testSetData = [];
    for (let i=0; i<100; i++) {
        testSetData.push(testSetDataTemplate);
    }

    let testMatrixData = {
        players: {
            count: 5,
            tags: ["Player A", "Player B", "Player C", "Player D", "Player E"],
            records: {
                "Player A": {
                    "Player B": 0,
                    "Player C": 0,
                    "Player D": 0,
                    "Player E": 0,
                },
                "Player B": {
                    "Player A": 0,
                    "Player C": 0,
                    "Player D": 0,
                    "Player E": 0,
                },
                "Player C": {
                    "Player A": 0,
                    "Player B": 0,
                    "Player D": 0,
                    "Player E": 0,
                },
                "Player D": {
                    "Player A": 0,
                    "Player B": 0,
                    "Player C": 0,
                    "Player E": 0,
                },
                "Player E": {
                    "Player A": 0,
                    "Player B": 0,
                    "Player C": 0,
                    "Player D": 0,
                },
            }
        }
    }

    var testSerializedQueryResults = {
        players: {
            "Player1": { wins: 0, losses: 0, events: [] },
            "Player2": { wins: 0, losses: 0, events: [] },
            "Player3": { wins: 0, losses: 0, events: [] },
            "Player4": { wins: 0, losses: 0, events: [] },
            "Player5": { wins: 0, losses: 0, events: [] },
            "Player6": { wins: 0, losses: 0, events: [] },
            "Player7": { wins: 0, losses: 0, events: [] },
            "Player8": { wins: 0, losses: 0, events: [] },
            "Player9": { wins: 0, losses: 0, events: [] },
            "Player10": { wins: 0, losses: 0, events: [] },
            "Player11": { wins: 0, losses: 0, events: [] },
            "Player12": { wins: 0, losses: 0, events: [] },
            "Player13": { wins: 0, losses: 0, events: [] },
            "Player14": { wins: 0, losses: 0, events: [] },
            "Player15": { wins: 0, losses: 0, events: [] },
            "Player16": { wins: 0, losses: 0, events: [] },
            "Player17": { wins: 0, losses: 0, events: [] },
            "Player18": { wins: 0, losses: 0, events: [] },
            "Player19": { wins: 0, losses: 0, events: [] },
            "Player20": { wins: 0, losses: 0, events: [] },
            "Player21": { wins: 0, losses: 0, events: [] },
            "Player22": { wins: 0, losses: 0, events: [] },
            "Player23": { wins: 0, losses: 0, events: [] },
            "Player24": { wins: 0, losses: 0, events: [] },
            "Player25": { wins: 0, losses: 0, events: [] },
            
        }
    }

    return (
        <Container className="mt-4">
            <Row>
                <Col>
                    <QueryFormPanel onFormSubmit={handleQuerySubmit} unixTime="true" restrictRange="true"/>
                </Col>
                <Col>
                    <ResultsPanel tempSetData={testSetData} results={testSerializedQueryResults}/>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
