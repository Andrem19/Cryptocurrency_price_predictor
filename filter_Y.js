const fs = require('fs');

const dataJson = JSON.parse(fs.readFileSync('traningData6month.json'))

const filter = async () => {
const newJson = await dataJson.map(item => (
  Math.round(item.Close) /1000
))

function chunkArray(array, chunk, int) {
    const newArray = [];
    for (let i = 0; i < array.length; i += chunk) {
      newArray.push(array.slice(i, i + int));
    }
    return newArray;
  }
  
  const res = await chunkArray(newJson, 60, 5);

  fs.writeFileSync('sliced_Y_Data.json', JSON.stringify(res), 'utf8')
}
filter()
//   console.log(res);