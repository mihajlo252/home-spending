import React from "react";
import { Link } from "react-router-dom";
import TableStyles from "./Table.module.css";

export const CustomTable = ({ tableRows, userEmailsFromId }) => {
  return (
    <div className={`bg-primary rounded-box ${TableStyles.table}`}>
      <header className={` text-secondary text-base ${TableStyles.grid}`}>
        <p>ID</p>
        <p>User</p>
        <p>Amount</p>
        <p>Date</p>
        <p></p>
      </header>
      <section className={`bg-base-300 rounded-b-box ${TableStyles.scrollable}`}>
        <div className={`${TableStyles.scroll_box}`}>
          {tableRows.map((row, idx) => {
            const { email } = userEmailsFromId.find(
              (item) => item.id === row.user_id
            );
            const date = new Date(row.created_at).toLocaleDateString("en-us", {
              year: "numeric",
              month: "short",
              day: "numeric",
            });
            return (
              <div key={row.id} className={`hover ${TableStyles.grid}`}>
                <h5>{idx + 1}</h5>
                <p>{email.split("@gmail.com")}</p>
                <p>${row.amount}</p>
                <p>{date}</p>
                <p>
                  <Link to="/" className="btn btn-ghost">
                    Details
                  </Link>
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
