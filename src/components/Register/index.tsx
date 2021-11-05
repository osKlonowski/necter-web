import React from "react";
import {
  ImageViewer,
  Input,
  PageWrapper,
  Select,
  SubmitButton,
} from "./RegisterElements";
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
type MyState = {
  image: string;
  name: string;
  nameError: string;
  category: string;
  categoryError: string;
  capacity: 0;
  capacityError: string;
  lat: string;
  lng: string;
  latError: string;
  lngError: string;
};

class Register extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      image: "",
      name: "",
      nameError: "",
      category: "",
      categoryError: "",
      capacity: 0,
      capacityError: "",
      lat: "",
      lng: "",
      latError: "",
      lngError: "",
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleCapacityChange = this.handleCapacityChange.bind(this);
    this.handleLatitudeChange = this.handleLatitudeChange.bind(this);
    this.handleLongitudeChange = this.handleLongitudeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event: any) {
    this.setState({ name: event.target.value });
  }
  handleCategoryChange(event: any) {
    this.setState({ category: event.target.value });
  }
  handleCapacityChange(event: any) {
    this.setState({ capacity: event.target.value });
  }
  handleLatitudeChange(event: any) {
    this.setState({ lat: event.target.value });
  }
  handleLongitudeChange(event: any) {
    this.setState({ lng: event.target.value });
  }

  handleSubmit(event: any) {
    event.preventDefault();
    alert(
      "Form Data: " +
        this.state.name +
        this.state.category +
        this.state.lat +
        this.state.lng
    );
  }

  onImageChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      this.setState({
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  // onImageChange = (event: any) => {
  // if (event.target.files && event.target.files[0]) {
  // let reader = new FileReader();
  // reader.onload = (e) => {
  // if (e.target !== undefined) {
  // this.setState({ image: e.target!.result });
  // }
  // };
  // reader.readAsDataURL(event.target.files[0]);
  // }
  // };

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
            Venue Photo
            <br />
            <ImageViewer id="target" src={this.state.image} alt="venue-img" />
            <input type="file" onChange={this.onImageChange} id="venue-image" />
          </label>
          <label>
            Name:
            <br />
            <Input
              type="text"
              placeholder="Name of Venue"
              onChange={this.handleNameChange}
            />
            <br />
          </label>
          <br />
          <label>
            Venue Type:
            <br />
            <Select onChange={this.handleCategoryChange}>
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
            <Input
              type="number"
              placeholder="capacity"
              onChange={this.handleCapacityChange}
            />
          </label>
          <br />
          <label>
            Location (lat/lng):
            <br />
            <Input
              type="text"
              placeholder="Latitude"
              onChange={this.handleLatitudeChange}
            />
            <br />
            <Input
              type="text"
              placeholder="Longitude"
              onChange={this.handleLongitudeChange}
            />
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
