/**
 * New node file
 */
var fs=require('fs');
var path ='resources/html';
var mysql = require('mysql');
var connection = mysql.createConnection({
    host    :'localhost',
    port : 3306,
    user : 'root',
    password : 'root',
    database:'ourproject'
});

exports.index = function(req,res){
	console.log("index");
	fs.readFile(path+'/main.html', function(error,data){
		res.writeHead(200,{'Content-Type':'text/html'});
		res.end(data);
	});
}

exports.reg = function(req,res){
//
	console.log(req.param("user"));
	console.log(req.param("pwd"));
	console.log(req.param("email"));
	var body = req.body;
	console.log(body.user);
	
	var user = {'User_Name':body.user,
	        'Email':body.email,
	        'password':body.pwd};
		
	connection.query('insert into user (User_Name,Email,password) values(?,?,?)',[body.user,body.email,body.pwd],function(err,result){
		
	});
		
}
