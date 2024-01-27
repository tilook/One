const express = require('express');
const path = require("path")
const app = express();
const port = 3000;

app.get('/server.html/:serverId', (req, res) => {
    res.sendFile(path.join(__dirname, "public", 'server.html'));
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'CSS')));


app.use('/public', express.static(process.cwd() + '/public'));

app.set('view engine', 'ejs');

app.listen(port, () => {
    console.log(`Serveur en cours d'écoute sur le port ${port}`);
});
