var express = require("express");
var path = require("path");
var app = express();
app.listen(3000);

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());


app.get("/notes", function(req,res){
    res.sendFile(path.join(__dirname +'/public/notes.html'));
});

app.get("*", function(req,res){
    res.sendFile(path.join(__dirname +'/public/index.html'));
});



app.post("/api/notes", function(req, res) {
    
    var newNote = req.body;
  
    newNote.routeName = newNote.name.replace(/\s+/g, "");
  
    console.log(newNote);
  
    notes.push(newNote);
  
    res.json(newNote);
  });

  
  //app.delete('/api/notes', (req, res,)
  
  app.delete('/api/notes:id', function(req, res)  { 
    res.send("Note Deleted") 
  }) 
   



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});