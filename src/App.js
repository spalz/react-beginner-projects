import React, { useState, useEffect } from "react";
import "./index.scss";
import { Success } from "./components/Success";
import { Users } from "./components/Users";

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [invites, setInvites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((response) => {
        setUsers(response.data);
        setIsLoading(false);
      });
  }, []);

  const onChangeSeachValue = (event) => {
    setSearchValue(event.target.value);
  };

  const onClickInvites = (id) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };

  const onClickSendInvites = () => {
    setSuccess(true);
    setInvites([]);
  };

  const onClickBackUsers = () => {
    setSuccess(false);
  };

  return (
    <div className="App">
      {!success ? (
        <Users
          onChangeSeachValue={onChangeSeachValue}
          searchValue={searchValue}
          items={users}
          isLoading={isLoading}
          invites={invites}
          onClickInvites={onClickInvites}
          onClickSendInvites={onClickSendInvites}
        />
      ) : (
        <Success onClickBackUsers={onClickBackUsers} count={invites.length} />
      )}
    </div>
  );
}

export default App;
