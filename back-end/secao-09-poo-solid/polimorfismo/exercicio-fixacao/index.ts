import { Character, DbCharacter } from './Character';
import { CharacterService, LocalDbModel, MockDbModel } from './IModel';

const A = new CharacterService(new LocalDbModel());
A.getAll().then(console.log);

const B = new CharacterService(new MockDbModel());
B.getAll().then(console.log);