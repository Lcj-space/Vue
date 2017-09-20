/**
 * Created by 13675 on 2017/8/20.
 */
let http = require('http');
let fs  = require('fs');
http.createServer(
    (res,req)=>{
        if (req.url == '/'&& req.method == 'GET'){
            res.writeHead(200,{
                "Content-Type":"text/plain",
                "Access-Control-Allow-Origin":"http://localhost:63342"
            });
            fs.readFile('info.text',(err,data)=>{
                res.write(data);
                res.end();
            });
        }
    }
).listen(3000);