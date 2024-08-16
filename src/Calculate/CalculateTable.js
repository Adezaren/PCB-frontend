import React from "react";
import { calculate } from "../utils/api";
import { calculateYear } from "../utils/api";

const CalcualteTable = ({items, sum}) => {

    

    
    return (
    <div>
        <table className="table table-hover">
            <thead className="tableHead">
                <tr>
                    <th>#</th>
                    <th>Příjmení</th>
                    <th>účet / banka</th>
                    <th>Společnost</th>
                    <th>Úvazek</th>
                    <th>VS</th>
                    <th>SS</th>
                    <th>KS</th>
                    <th className="text-center">Částka v Kč</th>
                    <th className="text-center">Celkem</th>
                </tr>
            </thead>

            <tbody>
                {items.map((items, index) => (
                    <tr key={index + 1}>
                        <td>{index +1 }</td>
                        <td>{items.secondName}</td>
                        <td>{items.accountNumber} / {items.bank}</td>
                        <td>{items.company}</td>
                        <td>{items.workingTime}</td>
                        <td>{items.vs}</td>
                        <td>{items.ss}</td>
                        <td>{items.ks}</td>
                        <td className="text-center">{calculate(sum, items.workingTime)} ,-</td>
                        <td className="text-center price">{calculateYear(sum, items.workingTime)} ,- </td>

                    </tr>

                ))}
            </tbody>

        </table>

    </div>

    )
}
export default CalcualteTable;