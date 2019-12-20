import express from 'express'
const router = express.Router();
import Todo from './../config/Model/Schema';

router.get('/current', async (req: express.Request, res: express.Response) => {
    const GetTodo = await Todo.find({});
    res.send({ massege: GetTodo })
})


router.post('/post', async (req: express.Request, res: express.Response) => {
    console.log(req.body)
    const user = await new Todo(req.body)
    user.save()
        .then(() => {
            res.send({ massege: 'user succesfuly added' })
        }).catch((err: string) => {
            console.log(err)
        })
})

router.delete('/deleteAll', async (req: express.Request, res: express.Response) => {
    await Todo.deleteMany({})
})

router.delete('/deleteOne', async (req: express.Request, res: express.Response) => {
    await Todo.deleteOne({})
})

router.put('/updateOne', async (req: express.Request, res: express.Response) => {
    await Todo.findOneAndUpdate({ title: req.body.add }, { title: "khatumal" });
})

module.exports = router;