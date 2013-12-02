# Module dependencies.
express = require 'express'
http    = require 'http'
path    = require 'path'

app = express()

# all environments
app.set 'port', process.env.PORT || 3000
app.set 'views', path.join(__dirname, 'views')
app.set 'view engine', 'jade'
app.use express.favicon()
app.use express.logger('dev')
app.use express.json()
app.use express.urlencoded()
app.use express.methodOverride()
app.use app.router
app.use express.static(path.join(__dirname, 'public'))

# development only
if 'development' == app.get('env')
  app.use express.errorHandler()

app.get '/', (req, res) ->
  # check if shellinabox is running
  _req = http.get 'http://localhost:4200', (_res) ->
    if _res.statusCode == 200
      res.render 'index', { req: req, include_shell:1 }
    else
      res.render 'index', { req: req, include_shell:0 }
  _req.on 'error', (e) ->
    res.render 'index', { req: req, include_shell:0 }

# disable shellinabox
app.get '/no-shell', (req, res) ->
  res.render 'index', { req: req, include_shell:0 }

http.createServer(app).listen app.get('port'), ->
  console.log('Express server listening on port ' + app.get('port'))
