const express = require('express')
const app = express()

///////////////////////
app.get('/', (req, res) => res.send('Hello World!'))

app.get('/2', function(req, res) {
	res.send('Hello World 2!')

})




///////////////////////

app.listen(3000, () => console.log('Example app listening on port 3000!'))