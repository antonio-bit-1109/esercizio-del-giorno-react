import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import ButtonComponent from "./components/ButtonComponent";

function App() {
    return (
        <div className="App">
            <MyNav home="home" about="Abous Us" browse="Find Us" />
            <Welcome welcome="Benvenuto nella libreria super Top!" />
            <ButtonComponent theme="danger" Btncontent="Fantasy" />
            <ButtonComponent theme="info" Btncontent="Horror" />
            <ButtonComponent theme="success" Btncontent="History" />
            <ButtonComponent theme="primary" Btncontent="Romance" />
            <ButtonComponent theme="light" Btncontent="Sci-fi" />
            <AllTheBooks />
            <MyFooter testo_par="questo è del testo passato tramite props" />
        </div>
    );
}

export default App;
