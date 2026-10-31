const express = require('express');
const port = 5000;

const app = express();

const ideas = [
  {
    id: 1,
    name: 'Batman',
    text: 'Positive Newsletter, a newsletter is cool',
    tag: 'Inventions',
    username: 'BruceWayne',
  },
  {
    id: 2,
    name: 'Spiderman',
    text: 'Milk cartons that turn a different color the older that your milk is getting',
    tag: 'Software',
    username: 'TomHalland',
  },
  {
    id: 3,
    name: 'IronMan',
    text: 'Text is what is being used ',
    tag: 'Technology',
    username: 'TonyStart',
  },
];

app.get('/', (req, res) => {
  res.send({
    message: 'welcome home',
  });
});

app.get('/api/ideas', (req, res) => {
  res.json({
    success: true,
    data: ideas,
  });
});

app.get('/api/ideas/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);

  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: 'Resource not found' });
  }

  res.json({
    success: true,
    data: idea,
  });
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
