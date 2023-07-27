import React, { useEffect, useState } from "react";
import { Table } from "../../Components/Table";
import { GetAllSpendings } from "../../Utilities/GetAllSpendings";
import { GetUserEmailFromId } from "../../Utilities/GetUserEmailFromId";

export const MyFinances = ({ user }) => {
  const [tableRows, setTableRows] = useState([]);
  const [userEmailsFromId, setUserEmailsFromId] = useState([]);

  const handleGetData = async (userId) => {
    const res = await GetAllSpendings(userId);
    const emails = await GetUserEmailFromId();
    setTableRows(res.data);
    setUserEmailsFromId(emails.data);
  };

  useEffect(() => {
    if (user) {
      handleGetData(user.current.id);
    }
  }, [user]);

  return <Table tableRows={tableRows} userEmailsFromId={userEmailsFromId} />;
};
