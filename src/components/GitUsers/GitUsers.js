import React from "react";
// import { useState, useEffect } from "react";

const GitUsers = () => {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/saranggulavani").then((result) => {
  //       result.json().then((resp) => {
  //         setData(resp);
  //       });
  //     });
  //   }, []);
  //   console.log("My Data", data);

  return (
    <div className="container gituser py-5">
      <h2>Git User</h2>
      <div className="user"></div>
      <div className="card">
        <div className="card-body">
          {/* {data.map((user) => (
            <>
              <h5 className="card-title">User Name is : {user.name}</h5>
              <h6 className="card-subtitle">User login id is : {user.login}</h6>
            </>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default GitUsers;
