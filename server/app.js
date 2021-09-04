const express = require('express');
const cors = require('cors');
require('dotenv').config();
const logger = require("morgan");

const itemsRouter = require("./routes/items");
const categoriesRouter = require("./routes/categories");


const app = express();
const port = process.env.PORT || 8080;

app.use(cors())
app.use(logger("dev"));
app.use(express.json({ extended: true }));
app.use('/api/items', itemsRouter);
app.use('/api/categories', categoriesRouter)


app.listen(port, () => {
    console.log(`Server on port ${port}`)
})
