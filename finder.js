const fs = require('fs')

const location = fs.readdirSync('./')
const result = (ebaNum) => {
  return location.filter((e) => e.includes('.') && !e.includes('a.js') && fs.readFileSync(`./${e}`, 'utf-8').includes(`EBA-${ebaNum}`)) 
}

console.log(result(54))
