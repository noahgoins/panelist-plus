// Searches for and collects all completed matches for an event

require('dotenv').config();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const startggURL = "https://api.start.gg/gql/alpha"
apiKey = process.env.STARTGG_API_KEY;

module.exports = {
    getCompletedMatches: async function(eventId) {
        let numMatches;            // counter variable
        let numMatchesFound = 0;   // total number of matches identified
        let pageNumber = 1;        // number on page for search query results

        await fetch(startggURL, {
                method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        'Accept': 'application/json',
                        Authorization: 'Bearer ' + process.env.STARTGG_API_KEY
                    },
                    body: JSON.stringify({
                        query: "query EventSets($eventId: ID!, $page: Int!, $perPage: Int!) { event(id: $eventId) {sets(page: $page perPage: $perPage sortType: STANDARD) {pageInfo {total}}}}",
                        variables: {
                            eventId: eventId,
                            page: 1,
                            perPage: 1
                        },
                    })
        }).then(r => r.json())
        .then(data => {
            numMatches = data.data.event.sets.pageInfo.total
        })

        Sleep.sleep(1000);

        while (numMatchesFound < numMatches) {
            await fetch(startggURL, {
                method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        'Accept': 'application/json',
                        Authorization: 'Bearer ' + process.env.STARTGG_API_KEY
                    },
                    body: JSON.stringify({
                        query: "query EventSets($eventId: ID!, $page: Int!, $perPage: Int!) { event(id: $eventId) {sets(page: $page perPage: $perPage sortType: STANDARD) {nodes { slots { entrants { name } standing { stats { score { value }}}}}}}}",
                        variables: {
                            eventId: eventId,
                            page: pageNumber,
                            perPage: 50
                        },
                    })
            }).then(r => r.json())
            .then(data => {
                let loopCondition = 50;
                if (numMatchesFound + loopCondition > numMatches) {
                    loopCondition = numMatches - numMatchesFound;
                }
                for (let i = 0; i < loopCondition; i++) {
                    console.log('${data.data.event.sets.nodes[i].slots[0].entrant.name} data.data.event.sets.nodes[i].slots[0].standing.stats.score.value - data.data.event.sets.nodes[i].slots[1].standing.stats.score.value data.data.event.sets.nodes[i].slots[1].entrant.name');
                }
            }).catch(err =>{
                console.log(err);
            })
            pageNumber += 1;
            numMatchesFound += 50;
            Sleep.sleep(1000);
        }
    }
}