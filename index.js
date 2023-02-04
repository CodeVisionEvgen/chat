const express = require('express');
const api = require('./api/main');
async function init() {
    const app = express();
    await api(app);
    app.listen(3000,()=>resolve());
}

init().then(console.log('Web start'))