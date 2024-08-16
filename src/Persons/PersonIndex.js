import React, {useEffect, useState} from "react";

import {apiDelete, apiGet} from "../utils/api";
import {Link} from "react-router-dom";

import PersonTable from "./PersonTable";


const PersonIndex = () => {
    const [persons, setPersons] = useState([]);

    const deletePerson = async (id) => {
        try {
            await apiDelete("/api/persons/" + id);
        } catch (error) {
            console.log("Potvzrní smazání");
            
        }
        setPersons(persons.filter((item) => item._id !== id));
    };

    useEffect(() => {
        apiGet("/api/persons").then((data) => setPersons(data));
     }, []);
    


    return (
        <div>
            <div>
                <h1>Seznam osob</h1>

            </div>
            <PersonTable 
                deletePerson={deletePerson}
                items={persons}
                label="Počet osob:"
            />
        </div>
    )
}
export default PersonIndex;
