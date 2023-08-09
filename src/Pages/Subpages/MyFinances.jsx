import React, { useEffect, useState } from "react";
import { Table } from "../../Components/Table";
import { CustomTable } from "../../Components/CustomTable";
import { GetAllSpendings } from "../../Utilities/GetAllSpendings";
import { GetUserEmailFromId } from "../../Utilities/GetUserEmailFromId";

export const MyFinances = ({ user }) => {
  const [tableRows, setTableRows] = useState([]);
  const [userEmailsFromId, setUserEmailsFromId] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [spendingsResponse, emailsResponse] = await Promise.all([
        GetAllSpendings(user.current.id),
        GetUserEmailFromId()
      ]);
      setTableRows(spendingsResponse.data);
      setUserEmailsFromId(emailsResponse.data);
    };

    if (user) {
      fetchData();
    }
  }, [user]);

  return <CustomTable tableRows={tableRows} userEmailsFromId={userEmailsFromId} />;
};
