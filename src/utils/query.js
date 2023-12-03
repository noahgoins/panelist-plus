
// This code just reads in the queries from external text files.
var fs = require("fs");
var queryT = fs.readFileSync("./tournaments.graphql", "utf-8");
var queryTbS = fs.readFileSync("./tournaments-by-state.graphql", "utf-8");

// Given a query in stringified JSON form and the variables in object form, get the arguments used to fetch from the API.
function getFetchArgs(q, v) {
    return {
        method: 'POST',
        headers: {
            "content-type": "application/json",
            "authorization": "Bearer " + API_KEY
        },
        body: JSON.stringify({
            query: q,
            variables: v
        })
    }
}

// Fetch the JSON object of the given query in stringified JSON form and variables in object form.
async function fetchQuery(q, v) {
    const result = await fetch("https://api.start.gg/gql/alpha", getFetchArgs(q, v))
    return await result.json();
}

export default fetchQuery;