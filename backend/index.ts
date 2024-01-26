import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();
app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
  })
);
const server = http.createServer(app);

let knownledgeData = [
  {
    title: 'ArtyomInc1',
    tag: ['tag1', 'tag2'],
    product: ['asycube'],
    content: 'Ceci est un test1',
  },
  {
    title: 'ArtyomInc2',
    tag: ['tag1', 'tag2'],
    product: ['asycube'],
    content: 'Ceci est un test2 test test',
  },
  {
    title: 'ArtyomInc3',
    tag: ['tag1', 'tag2'],
    product: ['asycube'],
    content: 'Ceci est un test3',
  },
];

app.get('/search', (req, res) => {
  const searchTerm = req.query.field?.toString().toLowerCase();
  if (searchTerm != undefined) {
    const results = knownledgeData
      .map((element) => {
        const titleOccurrences = (
          element.title.toLowerCase().match(new RegExp(searchTerm, 'g')) || []
        ).length;
        const contentOccurrences = (
          element.content.toLowerCase().match(new RegExp(searchTerm, 'g')) || []
        ).length;
        return {
          element,
          totalOccurrences: titleOccurrences + contentOccurrences,
        };
      })
      .filter((result) => result.totalOccurrences > 0)
      .sort((a, b) => b.totalOccurrences - a.totalOccurrences)
      .map((result) => result.element);
    res.json(results);
  } else {
    res.statusCode = 400;
  }
});

server.listen(3000, () => {
  console.log('Serveur HTTP écoutant sur le port 3000');
});
