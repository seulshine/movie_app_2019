import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Navigation from "./component/Navigation";

function App() {
  return <HashRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
}

export default App;