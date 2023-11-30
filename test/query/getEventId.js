require('dotenv').config();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const startggURL = "https://api.start.gg/gql/alpha"
apiKey = process.env.STARTGG_API_KEY;

module.exports = {
    getEventId: function(tournamentName, eventName) {
        const eventSlug = `tournament/${tournamentName}/event/${eventName}`;

        let eventId;
        fetch(startggURL, {
                  method: 'POST',
                  headers: {
                      'content-type': 'application/json',
                      'Accept': 'application/json',
                      Authorization: 'Bearer ' + process.env.STARTGG_API_KEY
                  },
                  body: JSON.stringify({
                      query: "query EventQuery($slug:String) {event(slug: $slug) {id name}}",
                      variables: {
                          slug: eventSlug
                      },
                  })
              }).then(r => r.json())
              .then(data => {
                  console.log(data.data);

                  eventId = data.data.event.id
              })
        return eventId;
      }
}