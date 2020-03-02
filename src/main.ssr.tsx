import React from 'react';
import { StaticRouter, Link } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import App from './App';

export function render(req: any) {
    const context = {};
    const html = renderToString(
        <StaticRouter location={req.url} context={context}>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">首页</Link></li>
                        <li><Link to="/signin">登录</Link></li>
                    </ul>
                </nav>
            </header>
            <App />
        </StaticRouter>
    );
    return [html, context];
}