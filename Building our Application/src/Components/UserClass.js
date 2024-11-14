import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
    };
    // console.log("Child Constructor");
  }

  async componentDidMount() {
    // console.log("Child ComponentDidMount");
    let data = await fetch("https://api.github.com/users/ChiragSh0023");
    data = await data.json();
    this.setState({
      user: data,
    });
    this.timer = setInterval(() => {
      // console.log("Siuuuuu");
    }, 1000);
  }

  componentDidUpdate() {
    // console.log("Child componentDidUpdate");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    // console.log("Child componentWillUnmount");
  }

  render() {
    // console.log("Child Render");
    const { user } = this.state;
    const { name, location, html_url, avatar_url } = user || {};
    return user ? (
      <div className="user-card">
        <div className="user-card-details">
          <div>Name : {name}</div>
          <div>Location : {location}</div>
          <div>
            Contact :{" "}
            <a href={html_url} target="blank">
              {html_url}
            </a>
          </div>
        </div>
        <div>
          <img src={avatar_url} />
        </div>
      </div>
    ) : (
      <></>
    );
  }
}

export default UserClass;
