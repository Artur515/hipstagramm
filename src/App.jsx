import styleApp from "./App.module.css";
import Application from "./components/Application/Application";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter } from "react-router-dom";

const App = () => {
    return (
        <div className={styleApp.App}>
            <BrowserRouter basename="/hipstagram_little_project">
                <Application />
            </BrowserRouter>
        </div>
    );
};

export default App;
