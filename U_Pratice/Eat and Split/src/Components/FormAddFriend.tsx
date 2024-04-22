import { useState } from "react";
import Button from "./Button";


const FormAddFriend = ({ onAddFriend }: any) => {
    const [name, setname] = useState("");
    const [image, setImage] = useState("https://i.pravatar.cc/48");

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const id = crypto.randomUUID();

        if (!name || !image) return;

        const newFriend = { id, name, image: `${image}?=${id}`, balance: 0 };
        onAddFriend(newFriend);

        setImage("https://i.pravatar.cc/48");
        setname("");
    };
    return (
        <form className="form-add-friend" onSubmit={handleSubmit}>
            <label>👫 Friend name</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setname(e.target.value)}
            />

            <label>🌄 Image URL</label>
            <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />
            <Button>Add</Button>
        </form>
    );
};

export default FormAddFriend;