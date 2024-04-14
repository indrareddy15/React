import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <form>
          <label>
            Name: <input type="text" name="name" />
          </label>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default Form;
