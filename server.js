const http = require('http');
const app = require('./app');
const PORT = 5000;
const {loadPlanetsData} = require('./models/planets.model')

const server = http.createServer(app);

async function loadserverdata(){
  await loadPlanetsData();
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}
  
loadserverdata();