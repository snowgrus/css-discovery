const fastify = require('fastify')()
const serveStatic = require('serve-static')
var path = require('path'); 

const staticServer = serveStatic(path.join(__dirname, '../src'), {'index': ['index.html', 'index.htm']});

// Multiple paths
fastify.use(staticServer);

// Run the server!
fastify.listen(5200, function (err) {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})