import React, {useEffect} from "react";

function User({user, onRemove, onToggle}) {
  const {username, email, id, active} = user;
  useEffect(() => {
    console.log("컴포넌트가 화면에 나타남");
  }, []);
  return (
    <div>
      <b
        style={{
          cursor: "pointer",
          color: active ? "green" : "black",
        }}
        onClick={() => onToggle(id)}
      >
        {username}
      </b>
      <span>({email})</span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
}

function UserList({users, onRemove, onToggle}) {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default UserList;