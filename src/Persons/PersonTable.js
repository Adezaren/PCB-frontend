import React from "react";
import {Link} from "react-router-dom";

const PersonTable = ({label, items, deletePerson}) => {
    return (
    <>  
        <div>
            
                <p>
                    {label} {items.length}
                </p>               
           
            <table className="table table-hover">
                <thead className="tableHead">
                    <tr>
                        <th>#</th>
                        <th>Jméno</th>
                        <th>Příjmení</th>
                        <th className="text-center">Úvazek</th>
                        <th colSpan={5} className="text-center">Akce</th>

                    </tr>
                </thead>

                <tbody>
                    {items.map((item, index) => (
                        <tr key={index + 1}>
                            <td>{index + 1 }</td>
                            <td>{item.firstName}</td>
                            <td>{item.secondName}</td>
                            <td className="text-center">{item.workingTime}</td>
                            <td>
                                <div className="text-center">
                                    <Link
                                        to={"/persons/show/" + item._id}
                                        className="btn btn-sm btn-primary mx-2"
                                    >
                                        Detail
                                    </Link>

                                    <Link
                                        to={"/persons/edit/" + item._id}
                                        className="btn btn-sm btn-warning mx-2"
                                    >
                                        Upravit
                                    </Link>
                                    <button
                                    onClick={() => deletePerson(item._id)}
                                    className="btn btn-sm btn-danger mx-2"
                                >
                                    Odstranit
                                </button>
                                </div>
                            </td>
                        </tr>


                    ))}
                </tbody>
            </table>
            
            

        </div>

        <br/>                    
        <div>
            <Link to={"/persons/create"} className="button">
                Nová osoba
            </Link>
                        
        </div>    
    </>      
    )
};
export default PersonTable;
