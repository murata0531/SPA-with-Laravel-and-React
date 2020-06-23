//reactのライブラリをインポート
import React from 'react';
import ReactDOM from 'react-dom';
//BrouserRouterというライブラリをRouterという名前でいポート
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//それぞれ独立したファイルをインポート
import NavBar from './NavBar'
import About from './About'
import User from './User'
import UserDetail from './UserDetail'

import Main from './Main'

function App() {
    return (
    
       
    <Router>
            <div>
            <header>
                <h1>SPA(シングルページアプリケーション)</h1>
            </header>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/about" component={About} />
                <Route path="/user" exact component={User} />
                <Route path="/user/:id" component={UserDetail} />
            </Switch>
        </div>
    </Router>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
