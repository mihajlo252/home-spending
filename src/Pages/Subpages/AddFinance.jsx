import React, { useState } from "react";
import { AddFinanceApi } from "../../Utilities/AddFinanceApi";

export const AddFinance = ({ user, setSubpage }) => {
    const [amount, setAmount] = useState("");
    const [room, setRoom] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        sessionStorage.setItem("dashboard-subpage", "myfinances");
        AddFinanceApi(amount, room, user, setSubpage);
    };

    return (
        <form
            onSubmit={(e) => handleSubmit(e)}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
            <div className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Amount</span>
                    </label>
                    <input
                        type="text"
                        placeholder="amount"
                        className="input input-bordered"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <select
                        className="select select-bordered w-full max-w-xs"
                        onChange={(e) => setRoom(e.target.value)}
                        defaultValue={"DEFAULT"}
                    >
                        <option value="DEFAULT" disabled>
                            Select a Room
                        </option>
                        <option value="Gajba">Gajba</option>
                    </select>
                </div>
                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">
                        Add
                    </button>
                </div>
            </div>
        </form>
    );
};
