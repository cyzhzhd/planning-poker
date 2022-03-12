import { PokerServiceClient } from '../proto/PokerServiceClientPb';

const client = new PokerServiceClient('http://192.168.219.105:30009');
console.log('client created', client);

export default client;
