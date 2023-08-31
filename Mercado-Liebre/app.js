const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(port, () =>
    console.log(`Servidor corriendo en el puerto: ${port}`)
);

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
});

app.get('/crea-tu-cuenta', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
});

app.get('/ingresa', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
});