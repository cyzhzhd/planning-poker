import { PokerServiceClient } from '../proto/PokerServiceClientPb';

const url = process.env.REACT_APP_SERVER_URL;
const port = process.env.REACT_APP_SERVER_PORT;
const client = new PokerServiceClient(`${url}:${port}`);
console.log('client created', client);

export default client;
