const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.use('/dist', express.static('dist'));
app.use(express.static('public'));

app.listen(3000);
