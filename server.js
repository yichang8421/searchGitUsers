const express = require("express");
const app = express();
const axios = require("axios");

app.use((request, response, next) => {
    console.log("有人请求了服务器");
    next();
});

app.get("/search/users", (request, response) => {
    const {q} = request.query;
    axios({
        url: 'https://api.github.com/search/users',
        params: {q}
    }).then(
        res => response.json(res.data)
    );
});

app.listen(5000, "localhost", err => {
    if (!err) {
        console.log("服务器启动成功,http://localhost:5000/search/users");
    } else {
        console.log(err);
    }
});