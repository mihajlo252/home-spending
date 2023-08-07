import React from "react";
import { Link } from "react-router-dom";
import TableStyles from "./Table.module.css";

export const Table = ({ tableRows, userEmailsFromId }) => {
  return (
    <div>
      <table className={`bg-primary rounded-box table ${TableStyles.table}`}>
        <thead className={` text-secondary text-base `}>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Amount</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody className={`bg-base-300`}>
          {tableRows.map((row, idx) => {
            const { email } = userEmailsFromId.find((item) => item.id === row.user_id);
            const date = new Date(row.created_at).toLocaleDateString("en-us", {
              year: "numeric",
              month: "short",
              day: "numeric",
            });
            return (
              <tr key={row.id} className="hover">
                <th>{idx + 1}</th>
                <td>{email}</td>
                <td>${row.amount}</td>
                <td>{date}</td>
                <td>
                  <Link to="/" className="btn btn-ghost">
                    Details
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
