'use strict';

const
  express = require('express'),
  cors = require('cors'),
  news = require('./data/news.json');

var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');

const app = express();
app.use(cors());

const getNewsByTitle = query => {
  return news.articles.filter(item => {
    const patt = new RegExp(query, 'gi');
    return patt.test(item.title);
  });
}

const chunk = (array, size) =>
  array.reduce((acc, _, i) => {
    if (i % size === 0) acc.push(array.slice(i, i + size))
    return acc
  }, [])

app.get('/v1/news', (req, res) => {
  const { page = 1 } = req.query;

  if (!req.query.q) {
    const articles = chunk(news.articles, 10);
    const results = articles[page - 1];
;    return res.json({ articles: results || [] });
  }

  if (req.query.q) {
    const foundResults = getNewsByTitle(req.query.q);
    return res.json({ articles: foundResults });
  }
});

var schema = buildSchema(`
    type Query {
        articles(title: String): [Article]
    },
    type Article {
    source: Source
    author: String
    title: String
    description: String
    url: String
    urlToImage: String 
    publishedAt: String
    content: String
  },
  type Source {
    id: String
    name: String
  }
`);

var root = {
  articles: query => {
    if (!query.title)
      return news.articles;

    return getNewsByTitle(query.title);
  },
};

app.use('/graphql', express_graphql({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

let server = app.listen(8000, '0.0.0.0', () => {
  console.log(`API listening on http://${server.address().address}:${server.address().port}`);
});