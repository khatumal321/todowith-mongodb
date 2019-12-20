"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var db_1 = __importDefault(require("./build/src/config/db"));
var app = express_1.default();
// app.use('/', require('./../router'))
var PORT = process.env.PORT || 3003;
app.listen(PORT, function () { return console.log('Server Running'); });
var db = db_1.default.connection;
db.on('error', console.error.bind(console, 'connection:'));
db.once('open', function () {
    console.log("success");
});
app.get('/', function (req, res) {
    res.send('Hello world');
});
app.use(express_1.default.json());
app.use("/todo", require("./build/src/Todo/post"));
// fetch('https://demoauthentication.herokuapp.com/users/register', {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(
//      {
//    		email: "Khatumal@gmail.com",
// 	})
//   }).then((responece) => responece.json())
// .then((err)=> console.log(err))
