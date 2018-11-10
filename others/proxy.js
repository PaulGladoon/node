const fetch = require('node-fetch')

;(async function request () {
  const res = await fetch('http://ec2-34-226-73-66.compute-1.amazonaws.com:8080/status')
  const json = await res.json()
  console.log(json)
})()
