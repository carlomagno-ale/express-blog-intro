const express = require('express')
const app = express();
const port = 3000;

app.use(express.static('express-blog-intro'));

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
    },
    {
        titolo: 'Cracker alla barbabietola',
        contenuto: 'lorem ipsum',
        img:'/images/cracker_barbabietola.jpeg',
        tags: ['tag1','tag2','tag3']
    },
    {
        titolo: 'Pane fritto dolce',
        contenuto: 'lorem ipsum',
        img:'/images/pane_fritto_dolce.jpeg',
        tags: ['tag1','tag2','tag3']
    },
    {
        titolo: 'Pasta_barbabietola.jpeg',
        contenuto: 'lorem ipsum',
        img:'/images/pasta_barbabietola.jpeg',
        tags: ['tag1','tag2','tag3']
    },
    {
        titolo: 'Torta_paesana.jpeg',
        contenuto: 'lorem ipsum',
        img:'/images/torta_paesana.jpeg',
        tags: ['tag1','tag2','tag3']
    },

    ]

    res.json(bacheca)

})

