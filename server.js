const express = require('express')
const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.send('Server del mio blog');
});

app.get('/bacheca', (req, res) => {

    const bacheca = [

    {
        titolo: 'Ciambellone',
        contenuto: 'lorem ipsum',
        img:'/images/ciambellone.jpeg',
        tags: ['tag1','tag2','tag3']
    }

    ]

    res.json(bacheca)

})