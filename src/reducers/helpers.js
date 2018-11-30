import charactersJson from '../data/characters.json';

export function createCharacter(id)
{
    let character = charactersJson.find(character => character.id === id); 
    return character; 
}