import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="find a user" name="" value="" />
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/7713521/pexels-photo-7713521.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
        />

        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
