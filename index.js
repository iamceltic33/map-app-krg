const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const cors = require('cors');

var app = express()
app.use(cors())
const data = {
  parkings: [
    {id: 0, coord: {longitude: 73.091226, latitude: 49.793747}, info: 'text1'},
    {id: 1, coord: {longitude: 73.089316, latitude: 49.794827}, info: 'text2'},
    {id: 2, coord: {longitude: 73.091285, latitude: 49.795544}, info: 'text3'},
    {id: 3, coord: {longitude: 73.090818, latitude: 49.798719}, info: 'text4'},
    {id: 4, coord: {longitude: 73.092562, latitude: 49.797895}, info: 'text5'},
    {id: 5, coord: {longitude: 73.088587, latitude: 49.800786}, info: 'text6'},
    {id: 6, coord: {longitude: 73.086935, latitude: 49.801569}, info: 'text7'},
    {id: 7, coord: {longitude: 73.089408, latitude: 49.802164}, info: 'text8'},
  ]
}

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.end('Server is running'))
  .get('/test', (req, res) => {res.end(JSON.stringify(data))})
  .get('pg', (req, res)=> {  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

data.parkings.forEach((item)=>{
  console.log(`(${item.id}, 'name${item.id}', '${item.info}', ${item.coord.longitude}, ${item.coord.latitude}),`);
})