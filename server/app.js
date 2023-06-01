import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

import indexRouter from '@server/routes/index';
import usersRouter from '@server/routes/users';
import apiRouter from '@server/routes/api';

//Settig webpack modules
import webpack from 'webpack'; 
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
//Importing webpack configuration
import webpackConfig from '../webpack.dev.config';

const app = express();

//Get the execution mode
const nodeEnviroment = process.env.NODE_ENV || 'production';

//Deciding if we add webpack middleware or not
if(nodeEnviroment === 'development'){
  console.log("⚽Ejecutando en modo desarrollo⚽");
  //Adding the key "mode" with its value "developement"
  webpackConfig.mode = nodeEnviroment;
  //Setting the port
  webpackConfig.devServer.port = process.env.PORT;
  //Setting up the HMR(Hot module replacement)
  webpackConfig.entry = [
    "webpack-hot-middleware/client?reload=true&timeout=1000", webpackConfig.entry
  ];
  //Creating the bundler
  const bundle = webpack(webpackConfig);
  //Enabling the webpack middleware
  app.use(webpackDevMiddleware(bundle, {
    publicPath: webpackConfig.output.publicPath
  }));
  //Enabling the webpack HMR
  app.use(webpackHotMiddleware(bundle, {
    publicPath: webpackConfig.output.path
  }));
  //Enabling the webpack HRM
  app.use(webpackHotMiddleware(bundle));
}else {
  console.log("📯Ejecutando en modo producción📯")
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
