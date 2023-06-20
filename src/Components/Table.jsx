import React from "react";
import { Link } from "react-router-dom";
import TableStyles from "./Table.module.css";

export const Table = ({ tableRows }) => {
    return (
        <table className={`table bg-base-300 rounded-md ${TableStyles.table}`}>
            {/* head */}
            <thead className={`overflow-y-scroll `}>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {tableRows.map((row) => (
                    <tr key={row.id} className="hover">
                        <th>{tableRows.indexOf(row) + 1}.</th>
                        <td>{row.name}</td>
                        <td>{row.amount}</td>
                        <td>{row.date}</td>
                        <td>{row.image}</td>

                        <td>
                            <Link to="/" className="btn btn-ghost">
                                Details
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
