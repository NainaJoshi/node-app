//Naina Joshi 12001505
var cal=require("../operations");
var http=require("http")
//var a=20 , b=10;
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("The Addition is: "+cal.Add(10,2))
    res.write("<br>")
    res.write("The Subtraction is: "+cal.Sub(9,3))
    res.write("<br>")
    res.write("The Multiplication is: "+cal.Mul(2,88))
    res.write("<br>")
    res.write("The Divison is: "+cal.Div(10,5))
    res.write("<br>")
    res.write("The Reminder is: "+cal.Rem(10,3))
    res.write("<br>")
    
}
).listen(8080);
//console.log("Addition:"+cal.Add(a,b));
//console.log("Multipication:"+cal.Mul(a,b));
//console.log("Division:"+cal.Div(a,b));
//console.log("Subtraction:"+cal.Sub(a,b));
//console.log("Reminder is:"+cal.Rem(a,b));
