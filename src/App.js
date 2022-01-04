import Calculator from "./Components/Calculator/index";
import "./App.css";
import TodoList from "./Components/TodoList/index";
import Error from "./Pages/Error/index";
import Home from "./Pages/Home/index";
import Header from "./Components/Header";
import { Link, Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="app">
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/calculator" element={<Calculator />} />
                <Route exact path="/todolist" element={<TodoList />} />
                <Route exact path="*" element={<Error num={404} />} />
            </Routes>
        </div>
    );
}

export default App;
