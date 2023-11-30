const eventId = require('./getEventId');
const eventSets = require('./getCompletedMatches');
const eventDateSort = require('./searchByDate');
const playerResult = require('./playerResults');


eventId.getEventId('don-t-get-tilted-95-1', 'ultimate-singles');
//eventSets.getCompletedMatches(1026965);
playerResult.playerResults(1026965,'CrayolaBrain');
//eventDateSort.searchByDate()