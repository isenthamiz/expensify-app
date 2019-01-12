const express = require('express');
const path = require('path')

const PORT = process.env.PORT || 3003;
const publicPath = path.join(__dirname,'..','public');

app = express();

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath,'index.html'));
})

app.listen(PORT, ()=> {
    console.log('Expensify App is running on PORT: ',PORT);
})