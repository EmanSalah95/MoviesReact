import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Favourites from "./pages/Favourites/Favourites";
import { Provider } from "react-redux";
import store from "./store/store";
import { LangProvider } from "./context/langContext";
import { useState } from "react";
import Home from "./pages/Home/Home";

function App() {
  const [lang, setLang] = useState("en");
  return (
    <Provider store={store}>
      <Router>
        <LangProvider value={{ lang, setLang }}>
          <div dir={lang == "en" ? "ltr" : "rtl"}>
            <Switch>
              <Route path="/favourite" exact component={Favourites} />
              <Route path="/" exact component={Home} />
            </Switch>
          </div>
        </LangProvider>
      </Router>
    </Provider>
  );
}

export default App;
