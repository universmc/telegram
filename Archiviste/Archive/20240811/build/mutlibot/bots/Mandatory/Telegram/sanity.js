const express = require('express');
const { createClient } = require('@sanity/client');
const { grid } = require('@sanity/base/grid');
const app = express();

const client = createClient({
  projectId: 'your-project-id',
  dataset: 'your-dataset',
  useCdn: false // set to true if you want to use the CDN
});

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  const query = `*[_type == "post"] | order(publishedAt desc)`;
  const posts = await client.fetch(query);

  res.render('index', { posts });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});