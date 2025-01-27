const express  = require('express');

const apiRoutes = require('./routes');

const {sequelize, connectDb } = require('./db');

const bodyParser = require('body-parser');

const app = express();
const PORT = 6325;

app.use(express.json());
app.use('/api' ,apiRoutes);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World' });
});

app.listen(PORT , async () => {

    console.log(`Server is running on port ${PORT}`);
    await connectDb();
});