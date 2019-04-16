const Koa      = require('koa');
const Router   = require('koa-router');
const nunjucks = require('nunjucks');
const knex     = require('./config');

const app  = new Koa();
var router = new Router();

router.get('/find/:name',async (ctx) => {
    var data = await knex.select('*').from('users').where('name', 'like', '%'+ctx.params.name+'%');
    ctx.body = nunjucks.render('index.html',{data});
});

app.use(router.routes());
app.listen(3000);
