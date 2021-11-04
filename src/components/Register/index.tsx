import React from "react";
import { Input, PageWrapper, Select, SubmitButton } from "./RegisterElements";
// import Input from "../Input";
// import CoordinateInput from "react-coordinate-input";

//Register Form for Venues
//Has to contain the following fields:
//0. Optional Picture
//1. Name of Venue/Place
//2. Category Type : Bar, Restaurant, Club, Cafe, Other
//3. Estimate Person Capacity
//4. Location (either address or lat/lng)
//5. Open time - Close time (optional)

type MyProps = {};
type MyState = { value: string };
class Register extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      value: "some value",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event: any) {
    alert("Form Data: " + this.state.value);
    event.preventDefault();
  }

  // <Input
  // id="1"
  // label="Name of Venue"
  // predicted="Bar Name"
  // locked={false}
  // active={false}
  // />

  render() {
    return (
      <PageWrapper>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <br />
            <Input
              type="text"
              placeholder="Name of Venue"
              onChange={this.handleChange}
            />
            <br />
          </label>
          <br />
          <label>
            Venue Type:
            <br />
            <Select>
              <option selected value="bar">
                Bar
              </option>
              <option value="restaurant">Restaurant</option>
              <option value="cafe">Cafe</option>
              <option value="club">Club</option>
              <option value="other">Other</option>
            </Select>
          </label>
          <br />
          <label>
            Venue Capacity (estimate):
            <br />
            <Input type="number" placeholder="capacity" />
          </label>
          <br />
          <label>
            Location (lat/lng):
            <br />
            <Input type="number" placeholder="Latitude" />
            <br />
            <Input type="number" placeholder="Longitude" />
            {/* <CoordinateInput */}
            {/* onChange={(value: any) => { */}
            {/* console.log(value); */}
            {/* }} */}
            {/* /> */}
          </label>
          <br />
          <SubmitButton type="submit" value="Submit" />
        </form>
      </PageWrapper>
    );
  }
}

export default Register;
