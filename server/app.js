import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

// Settig webpack modules
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

// Importando el configurador del motor de plantillas
import configTemplateEngine from './config/templateEngine';

// Importing webpack configuration
import webpackConfig from '../webpack.dev.config';

import log from './config/winston';

// Importando enrutador
import router from './router';

// eslint-disable-next-line
global["__rootdir"] = path.resolve(process.cwd());

const app = express();

// Get the execution mode
const nodeEnviroment = process.env.NODE_ENV || 'production';

// Deciding if we add webpack middleware or not
if (nodeEnviroment === 'development') {
  console.log('⚽Ejecutando en modo desarrollo⚽');
  // Adding the key "mode" with its value "developement"
  webpackConfig.mode = nodeEnviroment;
  // Setting the port
  webpackConfig.devServer.port = process.env.PORT;
  // Setting up the HMR(Hot module replacement)
  webpackConfig.entry = [
    'webpack-hot-middleware/client?reload=true&timeout=1000',
    webpackConfig.entry,
  ];
  // Agregar el plugin a la configuración de desarrollo
  // de webpack
  webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

  // Creating the bundler
  const bundle = webpack(webpackConfig);
  // Enabling the webpack middleware
  app.use(
    webpackDevMiddleware(bundle, {
      publicPath: webpackConfig.output.publicPath,
    })
  );
  // Enabling the webpack HMR
  app.use(
    webpackHotMiddleware(bundle, {
      publicPath: webpackConfig.output.path,
    })
  );
  // Enabling the webpack HRM
  app.use(webpackHotMiddleware(bundle));
} else {
  console.log('📯Ejecutando en modo producción📯');
}

// 🍇view engine setup🍇
configTemplateEngine(app);
app.use(morgan('combined', { stream: log.stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

router.addRoutes(app);

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
