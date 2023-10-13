import express from "express";
import ejs from "ejs";


const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.listen(port, () =>
  console.log('Example app listening on port 3000!'),
);
app.use(express.static("public"));
app.get('/',(req,res)=>{
    res.render("index.ejs");
});

