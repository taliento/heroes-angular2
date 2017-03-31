import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let shows =  [
      { id: 11, name: 'Vikings' },
      { id: 12, name: 'Breaking Bad' },
      { id: 13, name: 'Lost' },
      { id: 14, name: 'The game of Thrones' },
      { id: 15, name: 'The OA' },
      { id: 16, name: 'The Following' },
      { id: 17, name: 'The Walking Dead' },
      { id: 18, name: 'Fargo' },
      { id: 19, name: 'Iron Fist' },
      { id: 20, name: 'Shameless' }
    ];
    return {shows};
  }
}
