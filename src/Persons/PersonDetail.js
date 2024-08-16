import React, {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import { apiGet } from "../utils/api";
import PersonIcon from "../Pictures/contact-01-stroke-rounded.svg"

const PersonDetail = () => {
    const {id} = useParams();
    const [person, setPerson] = useState({});


    useEffect(() => {
        apiGet("/api/persons/" + id).then((data) => setPerson(data));
    }, [id]);

    return (
        <>
            <div>
                
                <h1>Detail osoby <img className="img" src={PersonIcon} alt="PersonIcon"/></h1>
                                    

                <hr/>

                <h2>{person.firstName} {person.secondName}</h2>
                
                <p>
                    <strong>Interní číslo:</strong>
                    <br/>
                    {person.internalNumber}
                </p>

                <p>
                    <strong>Úvazek:</strong>
                    <br/>
                    {person.workingTime}
                </p>

                <p>
                    <strong>číslo účtu:</strong>
                    <br/>
                    {person.accountNumber} / {person.bank}
                </p>

                <p>
                    <strong>VS:</strong>
                    <br/>
                    {person.vs}
                </p>

                <p>
                    <strong>SS:</strong>
                    <br/>
                    {person.ss}
                </p>

                <p>
                    <strong>KS:</strong>
                    <br/>
                    {person.ks}
                </p>

                <p>
                    <strong>Společnost:</strong>
                    <br/>
                    {person.company}
                </p>

            </div>

            <Link
                to={"/persons"}
                className="button"
            >Zpět</Link>
        </>
    );

};

export default PersonDetail;