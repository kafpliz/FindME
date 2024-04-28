import express from "express"
import { FormRouter } from "./routes/form.route";


const app = express();



app.use(express.json())
app.get('/', (req, res) => {
    res.send('Work')
})

app.use('/form', FormRouter)



app.listen(3000, () => { console.log('Starting...'); })
