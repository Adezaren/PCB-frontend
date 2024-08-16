import React, {useEffect, useState, select} from "react";
import {useNavigate, useParams} from "react-router-dom";
import InputField from "../components/InputField";
import FlashMessage from "../components/FlashMessage";
import InputCheck from "../components/InputCheck";

import {apiGet, apiPost, apiPut} from "../utils/api";
import Company from "./Company";


const PersonForm = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [person, setPerson] = useState({
        firstName: "",
        secondName: "",
        internalNumber: 0,
        workingTime: 0.0,
        accountNumber: "",
        bank: "",
        vs: "",
        ss: "",
        ks: "",
        company: ""
    });

    
    const [sentState, setSent] = useState(false);
    const [successState, setSuccess] = useState(false);
    const [errorState, setError] = useState(null);

    
    

    useEffect(() => {
        if (id) {
            apiGet("/api/persons/" + id).then((data) => setPerson(data));
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        (id ? apiPut("/api/persons/" + id, person) : apiPost("/api/persons", person))
            .then((data) => {
                console.log ('success', data)
                setSent(true);
                setSuccess(true);
                setTimeout(() => {
                    navigate("/persons")
                  }, 2000)
                
            })
            .catch((error) => {
                console.log(error.message);
                setError(error.message);
                setSent(true);
                setSuccess(false);
            });
    };

    const sent = sentState;
    const success = successState;

    return (
        <div className="col-6">
            <h1>{id ? "Upravit" : "Vytvořit"} osobu</h1>
            <hr/>

            {errorState ? (
                <div className="alert alert-danger">{errorState}</div>
            ) : null}

            {sent && success ? (
                <FlashMessage
                    theme={'success'}
                    text={'Uložení osoby proběhlo úspěšně.'}
            />
             ): null}

             <form onSubmit={handleSubmit}>

                <div className="row">
                    <div className="col">
                    <InputField
                        required={true}
                        type="text"
                        name="firstName"
                        min="3"
                        label="Jméno"
                        prompt="Zadejte křesní jméno"
                        value={person.firstName}
                        handleChange={(e) => {
                            setPerson({...person, firstName: e.target.value});
                        }}
                    />
                    </div>
                    <div className="col">
                    <InputField
                        required={true}
                        type="text"
                        name="secondName"
                        min="3"
                        label="Příjmení"
                        prompt="Zadejte příjmení jméno"
                        value={person.secondName}
                        handleChange={(e) => {
                            setPerson({...person, secondName: e.target.value});
                        }}
                    />
                    </div>
                    <br/>
                
                    <div className="col">
                    <InputField
                        required={true}
                        type="number"
                        name="internalNumber"
                        min="3"
                        label="Interní číslo"
                        prompt="Zadejte interní číslo osoby"
                        value={person.internalNumber}
                        handleChange={(e) => {
                            setPerson({...person, internalNumber: e.target.value});
                        }}
                    />
                    </div>
                </div>
                <br/>

                <div className="col-2"> 
                    <InputField
                            required={true}
                            type="number"
                            name="workingTime"
                            label="Úvazek"
                            prompt="Zadejte úvazek ve formátu x.x"
                            value={person.workingTime}
                            handleChange={(e) => {
                                setPerson({...person, workingTime: e.target.value});
                            }}
                        />
                </div>
                <br/>

                <div className="row">      
                    <div className="col-4">
                       <InputField
                            required={true}
                            type="text"
                            name="accountNumber"
                            min="4"
                            label="Číslo účtu"
                            prompt="Zadejte číslo účtu"
                            value={person.accountNumber}
                            handleChange={(e) => {
                                setPerson({...person, accountNumber: e.target.value});
                            }}
                        />
                    </div>
                    <div className="col-2">
                        <InputField
                            required={true}
                            type="text"
                            name="bank"
                            min="4"
                            label="Kód banky"
                            prompt="Zadejte kód banky"
                            value={person.bank}
                            handleChange={(e) => {
                                setPerson({...person, bank: e.target.value});
                            }}
                        />
                    </div>
                </div>    
                <br/>  

                <div className="row">
                    <div className="col-3">   
                       <InputField
                            required={true}
                            type="text"
                            name="VS"
                            min="3"
                            label="Variabilní symbol"
                            prompt="Zadejte variabulní symbol"
                            value={person.vs}
                            handleChange={(e) => {
                                setPerson({...person, vs: e.target.value});
                            }}
                        />
                    </div>   
                    <div className="col-3">   
                        <InputField
                            required={false}
                            type="text"
                            name="SS"
                            min="3"
                            label="Specifický symbol"
                            prompt="Zadejte specifický symbol"
                            value={person.ss}
                            handleChange={(e) => {
                                setPerson({...person, ss: e.target.value});
                            }}
                        />
                    </div>
                    <div className="col-3">   
                        <InputField
                            required={false}
                            type="text"
                            name="KS"
                            min="3"
                            label="Konstantní symbol"
                            prompt="Zadejte konstantní symbol"
                            value={person.ks}
                            handleChange={(e) => {
                                setPerson({...person, ks: e.target.value});
                            }}
                        />
                    </div>    
                </div>
                <br/>

                <div className="row">
                    <p>Společnost:</p>
                    <div className="col-2">
                    <InputCheck
                        type="radio"
                        name="company"
                        label="UNIQA"
                        value={Company.UNIQA}
                        handleChange={(e) => {
                            setPerson({...person, company: e.target.value});
                        }}
                        checked={Company.UNIQA === person.company}
                    />
                    </div>

                    <div className="col-2">
                    <InputCheck
                        type="radio"
                        name="company"
                        label="GENERALI"
                        value={Company.GENERALI}
                        handleChange={(e) => {
                            setPerson({...person, company: e.target.value});
                        }}
                        checked={Company.GENERALI === person.company}
                    />
                    </div>

                    <div className="col-2">
                    <InputCheck
                        type="radio"
                        name="company"
                        label="KB"
                        value={Company.KB}
                        handleChange={(e) => {
                            setPerson({...person, company: e.target.value});
                        }}
                        checked={Company.KB === person.company}
                    />
                    </div>

                    <div className="col-2">
                    <InputCheck
                        type="radio"
                        name="company"
                        label="CONSEQ"
                        value={Company.CONSEQ}
                        handleChange={(e) => {
                            setPerson({...person, company: e.target.value});
                        }}
                        checked={Company.CONSEQ === person.company}
                    />
                    </div>

                    <div className="col-3">
                    <InputCheck
                        type="radio"
                        name="company"
                        label="WOODcomp"
                        value={Company.WOODcomp}
                        handleChange={(e) => {
                            setPerson({...person, company: e.target.value});
                        }}
                        checked={Company.WOODcomp === person.company}
                    />
                    </div>

                    <div className="col-2">
                    <InputCheck
                        type="radio"
                        name="company"
                        label="ČSOB"
                        value={Company.ČSOB}
                        handleChange={(e) => {
                            setPerson({...person, company: e.target.value});
                        }}
                        checked={Company.ČSOB === person.company}
                    />
                    </div>
                    
                    <div className="col-2">
                    <InputCheck
                        type="radio"
                        name="company"
                        label="RENTEA"
                        value={Company.RENTEA}
                        handleChange={(e) => {
                            setPerson({...person, company: e.target.value});
                        }}
                        checked={Company.RENTEA === person.company}
                    />
                    </div>

                    <div className="col-2">
                    <InputCheck
                        type="radio"
                        name="company"
                        label="ALLIANZ"
                        value={Company.ALLIANZ}
                        handleChange={(e) => {
                            setPerson({...person, company: e.target.value});
                        }}
                        checked={Company.ALLIANZ === person.company}
                    />
                    </div>

                    <div className="col-2">
                    <InputCheck
                        type="radio"
                        name="company"
                        label="ING"
                        value={Company.ING}
                        handleChange={(e) => {
                            setPerson({...person, company: e.target.value});
                        }}
                        checked={Company.ING === person.company}
                    />
                    </div>

                    <div className="col-2">
                    <InputCheck
                        type="radio"
                        name="company"
                        label="ČS"
                        value={Company.ČS}
                        handleChange={(e) => {
                            setPerson({...person, company: e.target.value});
                        }}
                        checked={Company.ČS === person.company}
                    />
                    </div>
                </div>
                <br/>
                
                <input type="submit" className="button" value="Uložit"/>

               
                
             </form>

        </div>

    );
};

export default PersonForm;