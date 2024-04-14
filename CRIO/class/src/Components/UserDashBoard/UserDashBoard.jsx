import axios from "axios";
import React from "react";
import "./userDashboard.css";

class UserDashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      avatar: "",
      error: "",
    };
  }

  handleBtnClick = async (userId) => {
    try {
      const res = await axios.get(`https://reqres.in/api/users/${userId}`);
      const data = res.data.data;
      console.log(data);
      this.setState({
        name: `${data.first_name} ${data.last_name}`,
        email: data.email,
        avatar: data.avatar,
        error: "",
      });
    } catch (err) {
      if (err.res && err.res.status === 400) {
        this.setState({
          error: "User not found",
        });
      } else {
        this.setState(
          {
            error: "User not found",
          },
          () => {
            alert("Failed to fetch data");
          }
        );
      }
    }
  };

  render() {
    return (
      <div className="user-dashboard">
        <h1>User Dash board</h1>
        <button onClick={() => this.handleBtnClick(1)}>Btn 1</button>
        <button onClick={() => this.handleBtnClick(2)}>Btn 2</button>
        <button onClick={() => this.handleBtnClick(3)}>Btn 3</button>
        <button onClick={() => this.handleBtnClick(100)}>Btn 100</button>
        <ul>
          <li>Email: {this.state.email}</li>
          <li>Name: {this.state.name}</li>
        </ul>

        {this.state.avatar && <img src={this.state.avatar} alt="Avatar" />}
        {this.state.error && <div className="error">{this.state.error}</div>}
      </div>
    );
  }
}

export default UserDashBoard;
