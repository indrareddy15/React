import { useState } from "react";
import Button from "./Button";
import FormAddFriend from "./FormAddFriend";
import FormSplitBill from "./FormSplitBill";
import FriendsList from "./FriendsList";
import "./MainApp.css"


const initialFriends = [
    {
        id: 118836,
        name: "Clark",
        image: "https://i.pravatar.cc/48?u=118836",
        balance: -7,
    },
    {
        id: 933372,
        name: "Sarah",
        image: "https://i.pravatar.cc/48?u=933372",
        balance: 20,
    },
    {
        id: 499476,
        name: "Anthony",
        image: "https://i.pravatar.cc/48?u=499476",
        balance: 0,
    },
];

const MainApp = () => {
    const [friends, setFriends] = useState(initialFriends);
    const [showAddFriend, setShowAddFriend] = useState(false);
    const [selectedFriend, setSelectedFriend]: any = useState(null);

    const handleShowAddFriend = () => {
        console.log("hello");
        setShowAddFriend((show) => !show);
    };

    const handleAddFriend = (friend: any) => {
        setFriends((friends) => [...friends, friend]);
        setShowAddFriend(false);
    };

    const handleSelectFriend = (friend: any) => {
        // setSelectedFriend(friend);
        setSelectedFriend((currFriend: any) =>
            currFriend?.id === friend.id ? null : friend
        );
        setShowAddFriend(false);
    };

    const handleSplitBill = (value: any) => {
        console.log(value);

        setFriends((friends: any) => friends.map((friend: any) => friend.id === selectedFriend.id ? {
            ...friend, balance: friend.balance + value
        } : friend));
        setSelectedFriend(null)
    }

    return (
        <div className="app">
            <div className="sidebar">
                <FriendsList
                    friends={friends}
                    onSelection={handleSelectFriend}
                    selectedFriend={selectedFriend}
                />

                {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

                <Button onClick={handleShowAddFriend}>
                    {showAddFriend ? "Close" : "Add a Friend"}
                </Button>
            </div>
            {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill} />}
        </div>
    );
};

export default MainApp;