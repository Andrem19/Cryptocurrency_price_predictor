const fs = require('fs');

const dataJson = JSON.parse(fs.readFileSync('traningData6month.json'))

const filter = async () => {
const newJson = await dataJson.map(item => (
  Math.round(item.Close) /1000
))

function chunkArray(array, chunk) {
    const newArray = [];
    for (let i = 0; i < array.length; i += chunk) {
      newArray.push(array.slice(i, i + chunk));
    }
    return newArray;
  }
  
  const res = await chunkArray(newJson, 60);

  fs.writeFileSync('sliced_X_Data.json', JSON.stringify(res), 'utf8')
}
filter()
//   console.log(res);