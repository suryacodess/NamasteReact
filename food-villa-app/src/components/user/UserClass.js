import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // console.log(this.props.class, "child constructor");

    this.state = {
      count: 0,
      count1: 1,
      timer: null,
    };
  }
//   async componentDidMount() {
//     let i = 0;
//     console.log(this.props.class, "child component did mount");
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((res) => console.log(res))
//       .catch((error) => console.log(error));
//     this.timer = setInterval(() => {
//       console.log(i++, "react op");
//     }, 1000);
//   }

//   componentWillUnmount() {
//     console.log(this.props.class, "child component did un mount");
//     clearInterval(this.timer);
//   }

  render() {
    // console.log(this.props.class, "child render");
    return (
      <>
        <div style={{ padding: "20px" }}>
          <h4>Name - {this.props.name}</h4>
          <h4>contact - {this.props.contact}</h4>
          <h4>Number - {this.props.number}</h4>
          <div className="counter">
            <h1>{this.state.count}</h1>
            <button
              onClick={() =>
                this.setState({
                  count: this.state.count + 1,
                })
              }
            >
              increase counter
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default UserClass;
