const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/dist')));
app.use(require('cors')());
app.use(require('morgan')('dev'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
