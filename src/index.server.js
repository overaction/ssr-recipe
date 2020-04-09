import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import {StaticRouter} from 'react-router-dom';
import App from './App';

const app = express();

const serverRender = (req, res, next) => {
    const context = {};
    const jsx = (
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    );
    const root = ReactDOMServer.renderToString(jsx);
    res.send(root);
};

app.use(serverRender);

app.listen(5000, () => {
    console.log('Running on http://localhost:5000');
});

const html = ReactDOMServer.renderToString(
    <div>Server side render</div>
)

console.log(html);

//서버에서 리액트 컴포넌트를 렌더링할때는 rendertoString이라는 함수를 사용함