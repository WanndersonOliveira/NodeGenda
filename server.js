var express = require('express');
var bodyParser = require("body-parser");
var sqlite = require('sqlite-sync');
var app = express();

//GET: req.param('var')
//POST: req.body.var
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
sqlite.connect('banco.db');

var i;

app.get('/cadastrar', function(req, res){
	res.render('pages/cadastrar');
});

app.post('/cadastrar', function(req, res){
	var comp = {desc: req.body.desc, local:req.body.local,horario: req.body.horario, data: req.body.data};
	res.render('pages/cadastro', {
		val : 0
	});

	i = sqlite.insert('Compromisso', {descricao:comp.desc, local:comp.local, data:comp.data, horario: comp.horario}, function(res){
		if(res.error){
			throw res.error;
		}
		console.log(res);
		res.render('pages/cadastro', {
			val : 1
		})
	});

});

app.get('/listar', function(req, res){

	var compromissos = sqlite.run("select * from Compromisso order by data,horario");

	res.render('pages/listar',{
		comp : compromissos
	});
});

app.get('/deletar/:nmbr', function(req, res){
	sqlite.run("delete from Compromisso where id = "+req.params.nmbr);
	res.redirect("/listar");
});

app.get('/editar/:nmbr', function(req, res){
	var compromisso = sqlite.run('select * from Compromisso where id = '+req.params.nmbr);
	res.render('pages/editar', {
		compr : compromisso
	});
});

app.post('/edicao', function(req, res){
	var comp = {desc: req.body.desc, local:req.body.local,horario: req.body.horario, data: req.body.data};

	sqlite.run('delete from Compromisso where id = '+req.body.nmbr);

	i = sqlite.insert('Compromisso', {descricao:comp.desc, local:comp.local, data:comp.data, horario: comp.horario}, function(res){
		if(res.error){
			throw res.error;
		}});

	res.redirect('/listar');
});

app.listen(8080);
console.log('O servidor está rodando na porta 8080');
