# Panelist Plus
Panelist Plus is a React based web application that helps Smash Ultimate PR panelists determine the rankings of Smash players in any given location and period. PR stands for "Power Ranking" and serves as a way to rank any group of top Smash Ultimate players based on their stats and records against players.

Select which country and optionally provide a region (state or province depending on the country) as well as optionally a range of dates to query. The results will be displayed in various helpful metrics to help panelists determine PR.

The app is built using React and queries are made to start.gg using the GraphQL and start.gg API. This app is designed to be simple and easily modifiable to extend the functions of the app. Feel free to create a fork of the project and implement any additional features or metrics you might want want from the start.gg API.

## Dependencies
The source code does not include required dependencies so they must be installed before compiling. The following are the dependencies and how to download them.
- NodeJS: Follow install instructions on the [website](nodejs.org).
- Fetch: Run `npm install node-fetch` in the project directory.
- GraphQL: Run `npm install graphql` in the project directory.
- React: Run `npm install create-react-app` in the project directory. 
- React Bootstrap: Run `npm install react-bootstrap bootstrap` in the project directory.

## Compiling the React App
Open the project directory in your terminal and run `npm start` to compile and run the React app on your machine. Open your preferred browser and type `localhost:3000` in the address bar to open the app. 

If you want to build the app run `npm run build` in the project directory to create a production build of the app. The build will be located in the newly created `build\` directory.

## Credits
Noah Goins: Full-stack development and project management.
Jackson Kash: Back-end development and GraphQL queries testing.
Kevin Ramirez: Conception and additional back-end development.
Anthony Lopez: Front-end styling and graphics.

## License
This source code is protected under the GNU General Public License v3.0, this means the source code may be distributed, used commercially, or used personally. Modifications may be make freely but changes to the original source code must be stated explicitly. The source for the modifications must also be disclosed freely and may not be closed software. The modified source code must also adhere to GNU General Public License v3.0 just as this source code does and the license must be provided with the modified source. For more information about the license, read the LICENSE.md file in the project directory.