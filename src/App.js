import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import home from "./Pictures/home-13-stroke-rounded.svg";
import list from "./Pictures/list-view-stroke-rounded.svg";
import arrow from "./Pictures/arrow-data-transfer-diagonal-stroke-rounded.svg";
import {
    BrowserRouter as Router,
    NavLink,
    Link,
    Route,
    Routes,
    Navigate,
  } from "react-router-dom";

import Home from "./Home/HomePage";
import PersonIndex from "./Persons/PersonIndex";
import PersonForm from "./Persons/PersonForm";
import PersonDetail from "./Persons/PersonDetail";
import CalculateIndex from "./Calculate/CalculateIndex";



export function App() {
  return (
    <Router>

    <div className="container"> 
            
            <nav className="navbar container">   
                             
                <ul>
                    <li>
                        <NavLink to={"/home"}>
                            <img className="img" src={home} alt="Home logo"/>
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to={"/persons"}>
                            <img className="img" src={list} alt="List logo"/>
                            Seznam
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to={"/calculate"}>
                        <img className="img" src={arrow} alt="Arrow logo"/>Výpočet
                        </NavLink>
                    </li>

                </ul>
           
            </nav>  

            <Routes>

                <Route index element ={<Navigate to={"/home"} />} />
                <Route path="/home/" element={<Home />} />
                <Route path="/persons/">
                    <Route index element={<PersonIndex />} />
                    <Route path="show/:id" element={<PersonDetail/>} />
                    <Route path="create" element={<PersonForm/>} />
                    <Route path="edit/:id" element={<PersonForm />} />
                </Route>
                <Route path="/calculate/">
                    <Route index element={<CalculateIndex />} />

                </Route>

                
            </Routes>



            <br/>
        <footer className= "fixed-bottom bg-body-tertiary text-center container footer">
          Vytvořil &copy;AdVy 2024
        </footer>           
                       
        </div>
    </Router>


  );
}

export default App;
