/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import "./MainApp.css";

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

// const FriendsList = ({ friends, onSelection, selectedFriend }: any) => {
//   // const friends = initialFriends; //pasing the static Data
//   return (
//     <ul>
//       {friends?.map((friend: any) => (
//         <ul key={friend.id}>
//           <Friend
//             friend={friend}
//             key={friend.id}
//             onSelection={onSelection}
//             selectedFriend={selectedFriend}
//           />
//         </ul>
//       ))}
//     </ul>
//   );
// };

// const Friend = ({ friend, onSelection, selectedFriend }: any) => {
//   const isSelected = selectedFriend?.id === friend.id;

//   return (
//     <li key={friend.id} className={isSelected ? "selected" : ""}>
//       <img src={friend.image} alt={friend.image} />
//       <h3>{friend.name}</h3>

//       {friend.balance < 0 && (
//         <p className="red">
//           You owe {friend.name} {Math.abs(friend.balance)}€
//         </p>
//       )}
//       {friend.balance > 0 && (
//         <p className="green">
//           {friend.name} owes you {Math.abs(friend.balance)}€
//         </p>
//       )}
//       {friend.balance === 0 && <p>You and {friend.name} are even</p>}

//       <Button onClick={() => onSelection(friend)}>
//         {isSelected ? "Close" : "Select"}
//       </Button>
//     </li>
//   );
// };

// const Button = ({ children, onClick }: any) => {
//   return (
//     <>
//       <button className="button" onClick={onClick}>
//         {children}
//       </button>
//     </>
//   );
// };

// const FormAddFriend = ({ onAddFriend }: any) => {
//   const [name, setname] = useState("");
//   const [image, setImage] = useState("https://i.pravatar.cc/48");

//   const handleSubmit = (e: any) => {
//     e.preventDefault();
//     const id = crypto.randomUUID();

//     if (!name || !image) return;

//     const newFriend = { id, name, image: `${image}?=${id}`, balance: 0 };
//     onAddFriend(newFriend);

//     setImage("https://i.pravatar.cc/48");
//     setname("");
//   };
//   return (
//     <form className="form-add-friend" onSubmit={handleSubmit}>
//       <label>👫 Friend name</label>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setname(e.target.value)}
//       />

//       <label>🌄 Image URL</label>
//       <input
//         type="text"
//         value={image}
//         onChange={(e) => setImage(e.target.value)}
//       />
//       <Button>Add</Button>
//     </form>
//   );
// };

// const FormSplitBill = ({ selectedFriend, onSplitBill }: any) => {
//   const [bill, setBill]: any = useState();
//   const [paidBy, setPaidBy]: any = useState();
//   const paidByFriend = bill ? bill - paidBy : "";
//   const [whoIsPaying, setWhoIsPaying] = useState("user");
//   const handleSubmit = (e: any) => {
//     e.preventDefault();

//     if (!bill || !paidBy) return;
//     onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidBy)
//   }
//   return (
//     <form className="form-split-bill" onSubmit={handleSubmit}>
//       <h2>Split a bill with {selectedFriend.name}</h2>

//       <label>💰 Bill value</label>
//       <input
//         type="number"
//         value={bill}
//         onChange={(e: any) => setBill(Number(e.target.value))}
//       />

//       <label>🧍‍♀️ Your expense</label>
//       <input
//         type="number"
//         value={paidBy}
//         onChange={(e: any) =>
//           setPaidBy(
//             Number(e.target.value) > bill ? paidBy :
//               Number(e.target.value)
//           )
//         }
//       />

//       <label>👫 {selectedFriend.name}'s expense</label>
//       <input type="number" disabled value={paidByFriend} />

//       <label>🤑 Who is paying the bill</label>
//       <select
//         value={whoIsPaying}
//         onChange={(e: any) => setWhoIsPaying(e.target.value)}
//       >
//         <option value="user">You</option>
//         <option value="friend">{selectedFriend.name}</option>
//       </select>

//       <Button>Split bill</Button>
//     </form>
//   );
// };

// const MainApp = () => {
//   const [friends, setFriends] = useState(initialFriends);
//   const [showAddFriend, setShowAddFriend] = useState(false);
//   const [selectedFriend, setSelectedFriend]: any = useState(null);

//   const handleShowAddFriend = () => {
//     console.log("hello");
//     setShowAddFriend((show) => !show);
//   };

//   const handleAddFriend = (friend: any) => {
//     setFriends((friends) => [...friends, friend]);
//     setShowAddFriend(false);
//   };

//   const handleSelectFriend = (friend: any) => {
//     // setSelectedFriend(friend);
//     setSelectedFriend((currFriend: any) =>
//       currFriend?.id === friend.id ? null : friend
//     );
//     setShowAddFriend(false);
//   };

//   const handleSplitBill = (value: any) => {
//     console.log(value);

//     setFriends((friends: any) => friends.map((friend: any) => friend.id === selectedFriend.id ? {
//       ...friend, balance: friend.balance + value
//     } : friend));
//     setSelectedFriend(null)
//   }

//   return (
//     <div className="app">
//       <div className="sidebar">
//         <FriendsList
//           friends={friends}
//           onSelection={handleSelectFriend}
//           selectedFriend={selectedFriend}
//         />

//         {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

//         <Button onClick={handleShowAddFriend}>
//           {showAddFriend ? "Close" : "Add a Friend"}
//         </Button>
//       </div>
//       {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill} />}
//     </div>
//   );
// };

// export default MainApp;
