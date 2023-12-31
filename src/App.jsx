import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import FormComponent from "./components/FormComponent";

const App = () => {
    return (
        <div className="App">
            <MyNav home="home" about="Abous Us" browse="Find Us" />
            <Welcome welcome="Benvenuto nella libreria super Top!" />
            <FormComponent />
            <AllTheBooks />
            <MyFooter testo_par="questo è del testo passato tramite props" />
        </div>
    );
};

export default App;
