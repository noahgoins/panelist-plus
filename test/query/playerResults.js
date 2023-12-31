// Given a player's name and a tournament ID, this will retrieve their results


require('dotenv').config();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const startggURL = "https://api.start.gg/gql/alpha"
apiKey = process.env.STARTGG_API_KEY;
//const Sleep = require('./Sleep');

//sleep function
//I found it much easier to put it here for the time being than import it from another file -Jackson
const sleep = (ms) => {
    const date = Date.now()
    let currentDate = null
    do {
        currentDate = Date.now()
    } while (currentDate - date < ms)
}

module.exports = {
        playerResults: async function(eventId,playerName) {
        let numMatches;            // counter variable
        let numMatchesFound = 0;   // total number of matches identified
        let pageNumber = 1;        // number on page for search query results
        let playerWins = 0;
        let playerLosses = 0;

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
        
        
        sleep(1000);

        while (numMatchesFound < numMatches) {
            await fetch(startggURL, {
                method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        'Accept': 'application/json',
                        Authorization: 'Bearer ' + process.env.STARTGG_API_KEY
                    },
                    body: JSON.stringify({
                        query: "query EventSets($eventId: ID!, $page: Int!, $perPage: Int!) { event(id: $eventId) {sets(page: $page perPage: $perPage sortType: STANDARD) {nodes { slots { entrant { name } standing { stats { score { value }}}}}}}}",
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
                    //sure looks a lot cleaner printed out like this than it used to lol

                    if(data.data.event.sets.nodes[i].slots[0].entrant.name == playerName){
                        console.log('yes')
                        if(data.data.event.sets.nodes[i].slots[0].standing.stats.score.value > data.data.event.sets.nodes[i].slots[1].standing.stats.score.value){
                            playerWins = playerWins + 1;
                        }
                        else{
                            playerLosses = playerLosses + 1;
                        }
                    }
                    else if(data.data.event.sets.nodes[i].slots[1].entrant.name == playerName){
                        console.log('yes')
                        if(data.data.event.sets.nodes[i].slots[0].standing.stats.score.value < data.data.event.sets.nodes[i].slots[1].standing.stats.score.value){
                            playerWins = playerWins + 1;
                        }
                        else{
                            playerLosses = playerLosses + 1;
                        }
                    }
                    
                    
                    
                    

                }

            }).catch(err =>{
                console.log(err);
            })
            pageNumber += 1;
            numMatchesFound += 50;
            
            sleep(1000);
        }

        console.log(playerName,': ', playerWins, '-', playerLosses)
    }
}