import React from 'react';
import ReactDOMServer from 'react-dom/server';

const html = ReactDOMServer.renderToString(
    <div>Server side render</div>
)

console.log(html);

//서버에서 리액트 컴포넌트를 렌더링할때는 rendertoString이라는 함수를 사용함