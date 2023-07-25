import React from "react";
import Header from "../../components/header/Header";
import UserClass from "../../components/user/UserClass";

class Help extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor");
  }

  componentDidMount() {
    // console.log("parent component did mount");
  }

  render() {
    // console.log("parent render");

    return (
      <>
        <Header />
        <main className="help">
          <UserClass
            class={"first"}
            name={"surya prakash"}
            contact={"@heysuryaaaa"}
            number={9100682587}
          />
          <UserClass
            class={"second"}
            name={"surya prakash"}
            contact={"@heysuryaaaa"}
            number={9100682587}
          />
          <UserClass
            class={"third"}
            name={"surya prakash"}
            contact={"@heysuryaaaa"}
            number={9100682587}
          />
        </main>
      </>
    );
  }
}

export default Help;
