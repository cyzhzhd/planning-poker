import { PokerServiceClient } from '../proto/PokerServiceClientPb';

const client = new PokerServiceClient('http://localhost:8080');
console.log('client created', client);

export default client;
