const {readFileSync} = require('fs'); 
const fs = require('fs');
const planets = readFileSync('./Medium/planets.txt','utf8')
console.log(planets);
