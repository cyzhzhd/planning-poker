import { PokerServiceClient } from '../proto/PokerServiceClientPb';

const client = new PokerServiceClient('http://15.164.224.87:8080');
console.log('client created', client);

export default client;
