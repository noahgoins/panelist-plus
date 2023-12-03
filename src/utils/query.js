// Given a query in stringified JSON form and the variables in object form, get the arguments used to fetch from the API.
function getFetchArgs(q, v) {
    return {
        method: 'POST',
        headers: {
            "content-type": "application/json",
            "authorization": "Bearer " + process.env.API_KEY
        },
        body: JSON.stringify({
            query: q,
            variables: v
        })
    }
}

// Fetch the JSON object of the given query in stringified JSON form and variables in object form.
async function fetchQuery(key, query, vars) {
    const result = await fetch(
        "https://api.start.gg/gql/alpha", 
        {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                "authorization": "Bearer " + key
            },
            body: JSON.stringify({
                query: query,
                variables: vars
            })
        }
    )
    return await result.json();
}

export default fetchQuery;