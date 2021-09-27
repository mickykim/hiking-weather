import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/results"></Route>
                <Route path="/">
                    <Homepage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
