import express, { Router } from 'express';
import mongoose from './src/config/db';
const app = express();
// app.use('/', require('./../router'))

const PORT:any = process.env.PORT || 3003
app.listen(PORT, () => console.log('Server Running'))
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection:'));
db.once('open', function () {
    console.log("success")
});
app.get('/', (req: any, res: any) => {
    res.send('Hello world')
})
app.use(express.json());
app.use("/todo", require("./src/Todo/post"))


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



