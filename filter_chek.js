const fs = require('fs');

const dataJson = JSON.parse(fs.readFileSync('check_data.json'))

const filter = async () => {
const newJson = await dataJson.map(item => (
  Math.round(item.Close) /1000
))

  fs.writeFileSync('data_for_check.json', JSON.stringify(newJson), 'utf8')
}
filter()
//   console.log(res);