const fs = require('fs').promises;

async function main() {
  try {
    const data = await fs.readFile('./simpson.json', 'utf-8');
    const jsonData = JSON.parse(data)
    const transformData = jsonData.map((personagem) => {
      console.log(`${personagem.id} - ${personagem.name}`)
    })
    console.log(jsonData)
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

function findCharacter(id) {
  const promise = new Promise(async (resolve, reject) => {
    const data = await fs.readFile('./simpson.json', 'utf-8');
    const jsonData = JSON.parse(data)
    const character = jsonData.find((char) => {
      return char.id == id
    })
    if (!character) reject(('id não encontrado'))
    resolve(character)
  });

  return promise;
}

// main()
// findCharacter(10)
//   .then((resolve) => console.log(resolve))
//   .catch((reject) => console.log('Foi rejeitado', reject))

async function removeCharacter(jsonFile, id) {
  const data = await fs.readFile(jsonFile, 'utf-8');
  const jsonData = JSON.parse(data)
  const idIsOnJSON = jsonData.some((char) => {
    return char.id == id
  })
  if(!idIsOnJSON) throw new Error('id não encontrado')
  const character = jsonData.filter((char) => {
    return char.id != id
  })
  return JSON.stringify(character)
}

async function findFirstFour() {
  const data = await fs.readFile('./simpson.json', 'utf-8');
  const jsonData = JSON.parse(data)
  const character = jsonData.filter(({id}) => {
    const minhaExpressaoRegular = /^[1-4]$/;
    return minhaExpressaoRegular.test(id)
  })
  return JSON.stringify(character)
}

async function addCharacter(jsonFile, item) {
  const data = await fs.readFile(jsonFile, 'utf-8');
  const jsonData = JSON.parse(data)
  const addedJson = [...jsonData, item]
  return JSON.stringify(addedJson)
}

async function changeCharacter(jsonFile, id, item) {
  const data = await fs.readFile(jsonFile, 'utf-8');
  const jsonData = JSON.parse(data)
  const promiseRemoveCharacterData = await removeCharacter(jsonFile, id)
  const removeCharacterData = await JSON.parse(promiseRemoveCharacterData)
  const addedJson = [...removeCharacterData, item]
  return JSON.stringify(addedJson)
}

const refreshJSON = async (jsonFile, data) => {
  try {
    await fs.writeFile(jsonFile, await data);
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

async function printData(data) {
  const promiseData = await data;
  console.log(promiseData)
}

// refreshJSON('./simpsonFamily.json', findFirstFour())
// refreshJSON('./simpsonFamily.json', addCharacter('./simpsonFamily.json', {id: "5", name: 'Nelson Muntz'}))
refreshJSON('./simpsonFamily.json', (changeCharacter('./simpsonFamily.json', 5, {id: "6", name: 'Maggie Simpson'})))

module.exports = {
  main,
  findCharacter,
  removeCharacter
};