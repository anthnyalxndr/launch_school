const EXPRESS = require('express');
const MORGAN = require('morgan');
const DATA = require('./data.json');
const PORT = 3000;

const APP = EXPRESS();

APP.set('view engine', 'pug');

APP.use(EXPRESS.static('public'));

APP.locals.langProperties = DATA.langProperties;
APP.locals.langs = Object.keys(APP.locals.langProperties);
APP.locals.isCurrent = function (path, language) {
  return path === language ? "current" : "";
}

APP.use(MORGAN('common'));

APP.route('/')
  .get((req, res, next) => { res.redirect('/english'); });

APP.route('/:language')
  .get((req, res, next) => {
      const curLang = req.params.language;
    if (!APP.locals.langs.includes(curLang)) {
      let err = new Error('Resource not found');
      err.statusCode = 404;
      return next(err);
    }
    const lang = APP.locals.langProperties[curLang];
    lang.current = curLang;
    res.render('hello-world', { ...lang });
  }
);

APP.use((err, req, res, next) => {
  res.status(err.statusCode).send(err.message);
})


APP.listen(PORT);
