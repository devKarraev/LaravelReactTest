import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "../containers/Home/Home";
import Nature from "../containers/Categories/Nature/Nature";
import Sport from "../containers/Categories/Sport/Sport";
import Politic from "../containers/Categories/Politic/Politic";
import Technologies from "../containers/Categories/Technologies/Technologies";
import NotFound from "./NotFound/NotFound";
import Header from "./Header/Header";
import "./App.css"
import PostView from "../containers/PostView/PostView";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path={"/category/sport"} component={Sport}/>
                <Route path={"/category/nature"} component={Nature}/>
                <Route path={"/category/politic"} component={Politic}/>
                <Route path={"/category/technologies"} component={Technologies}/>
                <Route path={"/post/:id"} component={PostView}/>
                <Route exact path={"/"} component={Home}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
