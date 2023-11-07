#!/usr/bin/node
const HTTP = require('http');
const URL = require('url').URL;
const PORT = 3000;

function rollDice(rolls, numberOfSides) {
  if (Number.isNaN(+rolls)) rolls = '1';
  if (Number.isNaN(+numberOfSides)) numberOfSides = '6';
  let result = '';
  function generateRandomNum(floor=1, ceil=6) {
    return Math.floor(Math.random() * ceil) + floor;
  }
  for (let i = 0; i < rolls; i++) {
    result += `${generateRandomNum(1, +numberOfSides)}\n`;
  }

  return result;
}

const SERVER = HTTP.createServer((req, res) => {
  let method = req.method;
  let pathQuery = req.url;
  const origin = 'http://192.168.64.3:3000/';
  const url = new URL(pathQuery, origin);
  const path = url.pathname;
  let rolls = url.searchParams.get('rolls')
  let numberOfSides = url.searchParams.get('number_of_sides')
  
  if (path === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write(`${rollDice(rolls, numberOfSides)}`)
    res.write(`${method} ${path}\n`);
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
