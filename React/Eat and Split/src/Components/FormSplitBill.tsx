import { useState } from "react";
import Button from "./Button";

const FormSplitBill = ({ selectedFriend, onSplitBill }: any) => {
    const [bill, setBill]: any = useState();
    const [paidBy, setPaidBy]: any = useState();
    const paidByFriend = bill ? bill - paidBy : "";
    const [whoIsPaying, setWhoIsPaying] = useState("user");
    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (!bill || !paidBy) return;
        onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidBy)
    }
    return (
        <form className="form-split-bill" onSubmit={handleSubmit}>
            <h2>Split a bill with {selectedFriend.name}</h2>

            <label>💰 Bill value</label>
            <input
                type="number"
                value={bill}
                onChange={(e: any) => setBill(Number(e.target.value))}
            />

            <label>🧍‍♀️ Your expense</label>
            <input
                type="number"
                value={paidBy}
                onChange={(e: any) =>
                    setPaidBy(
                        Number(e.target.value) > bill ? paidBy :
                            Number(e.target.value)
                    )
                }
            />

            <label>👫 {selectedFriend.name}'s expense</label>
            <input type="number" disabled value={paidByFriend} />

            <label>🤑 Who is paying the bill</label>
            <select
                value={whoIsPaying}
                onChange={(e: any) => setWhoIsPaying(e.target.value)}
            >
                <option value="user">You</option>
                <option value="friend">{selectedFriend.name}</option>
            </select>

            <Button>Split bill</Button>
        </form>
    );
};
export default FormSplitBill;