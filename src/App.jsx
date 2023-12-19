import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";

function App() {
    return (
        <div className="App">
            <MyNav home="home" about="Abous Us" browse="Find Us" />
            <MyFooter testo_par="questo è del testo pasasto tramite props" />
        </div>
    );
}

export default App;
