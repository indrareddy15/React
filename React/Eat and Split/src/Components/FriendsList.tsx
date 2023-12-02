import Button from "./Button";

const FriendsList = ({ friends, onSelection, selectedFriend }: any) => {
    // const friends = initialFriends; //pasing the static Data
    return (
        <ul>
            {friends?.map((friend: any) => (
                <ul key={friend.id}>
                    <Friend
                        friend={friend}
                        key={friend.id}
                        onSelection={onSelection}
                        selectedFriend={selectedFriend}
                    />
                </ul>
            ))}
        </ul>
    );
};

const Friend = ({ friend, onSelection, selectedFriend }: any) => {
    const isSelected = selectedFriend?.id === friend.id;

    return (
        <li key={friend.id} className={isSelected ? "selected" : ""}>
            <img src={friend.image} alt={friend.image} />
            <h3>{friend.name}</h3>

            {friend.balance < 0 && (
                <p className="red">
                    You owe {friend.name} {Math.abs(friend.balance)}€
                </p>
            )}
            {friend.balance > 0 && (
                <p className="green">
                    {friend.name} owes you {Math.abs(friend.balance)}€
                </p>
            )}
            {friend.balance === 0 && <p>You and {friend.name} are even</p>}

            <Button onClick={() => onSelection(friend)}>
                {isSelected ? "Close" : "Select"}
            </Button>
        </li>
    );
};

export default FriendsList;