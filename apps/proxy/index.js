const http = require('http')
const httpProxy = require('http-proxy')

// Create a new instance of the proxy server
const proxy = httpProxy.createProxyServer({})

// Define the target servers for each path
const proxyRoutes = {
  '/next': { targetPort: 3000 }, // Proxy path1 to next
  '/nuxt': { targetPort: 3001 }, // Proxy path2 to nuxt
}

// Create the HTTP server that will act as the reverse proxy
const server = http.createServer((req, res) => {
  // Find the corresponding target port for the requested path
  const route = Object.entries(proxyRoutes).find(([path]) =>
    req.url.startsWith(path)
  )

  if (route) {
    const [path, { targetPort }] = route
    // Redirect requests to the target server
    proxy.web(req, res, { target: `http://localhost:${targetPort}` }, (err) => {
      console.error('Error:', err)
      res.writeHead(500, { 'Content-Type': 'text/plain' })
      res.end('Something went wrong.')
    })
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.end('Not found.')
  }
})

// Start listening on the desired port
const proxyPort = 3005 // Change this to the desired proxy port
server.listen(proxyPort, () => {
  console.log(`Reverse proxy is listening on port ${proxyPort}`)
})
