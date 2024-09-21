const express = require("express");
const app = express();
const cors = require("cors"); 
const port = 3000;

app.use(cors())

app.listen(port, function () {
    console.log("ASD");
});

// app.get("/", function(req, res){
//     // res.send("홈화면")
//     res.sendFile(__dirname + "/index.html");

// })
// app.get("/pet", function(req, res){
//     res.send("펫쇼핑 할 수 있는 사이트입니다.")
// })
app.get("/sound/:name", function (req, res) {

    const { name } = req.params;
    let sound = "";

    if(name == "dog"){
        sound = "멍멍";
    } else if (name == "cat"){
        sound = "야옹";
    } else if (name == "pig"){
        sound = "꿀꿀";
    } else {
        sound = "알수없음"
    }

    console.log(name);

    res.json({ "sound": sound })
})
