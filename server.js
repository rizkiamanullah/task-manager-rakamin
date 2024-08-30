const express = require('express');
const app = express();
const taskRoutes = require('./routes/taskRoutes');
const projectRoutes = require('./routes/projectRoutes');
const db = require('./models');

app.use(express.json());
app.use('/api', taskRoutes);
app.use('/api', projectRoutes);

const PORT = process.env.SERVER_PORT || 3000;

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server Running on ${PORT}`);
    })
})