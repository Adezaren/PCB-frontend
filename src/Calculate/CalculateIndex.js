import React, {useEffect, useState} from "react";
import CashIcon from "../Pictures/wallet-02-stroke-rounded.svg"
import InputField from "../components/InputField";
import CalculateTable from "../Calculate/CalculateTable";
import { apiGet } from "../utils/api";
import generatePDF, { Resolution, Margin } from 'react-to-pdf';


const CalculateIndex = () => {
    const [sumForFTJ, setSum] = useState(0);
    const [persons, setPersons] = useState([]);
    
    const getTargetElement = () => document.getElementById('content-id');
    const options = {
        method: 'open',
        Resolution: Resolution.HIGH,
        page: {
            margin: Margin.SMALL,
            format: 'A4',
            orientation: 'landscape'
        },
    };

    


    useEffect(() => {
        apiGet("/api/persons").then((data) => setPersons(data));
     }, []);

    const handleSubmit = (e) => {
        e.preventDefault();    

    }


    return (
    <>  
        <h1>Seznam k vyplacení příspěvku <img className="img" src={CashIcon} alt="CashIcon"/></h1>   

        <form onSubmit={handleSubmit}>
            <div className="col-1">
                <InputField
                    required={true}
                    type="number"
                    name="invoiceNumber"
                    label="Suma na FTJ"
                    prompt="Zadejte číslo"
                    value={sumForFTJ}
                    handleChange={(e) => {
                        setSum(e.target.value);
                    }}
                />
            </div>
        
            <br/>
       
        </form>
       
            <div id="content-id">

                <CalculateTable
                        items = {persons}
                        sum = {sumForFTJ}
                    />

            </div> 

            <button className="button" onClick={() => generatePDF(getTargetElement, options)}>PDF</button>   
          
           

    </>    
    )

};
export default CalculateIndex;