import React from "react";
// import { TransitionMotion, spring } from "react-motion";
import "./inputstyle.css";

type MyProps = {
  id: string;
  type?: string;
  active: boolean;
  locked: boolean;
  value?: string;
  error?: string;
  label: string;
  predicted: string;
};
type MyState = {
  active: boolean;
  type: string;
  value: string;
  error: string;
  label: string;
};
class Input extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);

    this.state = {
      active: (props.locked && props.active) || false,
      type: props.type || "text",
      value: props.value || "",
      error: props.error || "",
      label: props.label || "Label",
    };
  }

  changeValue(event: any) {
    const value = event.target.value;
    this.setState({ value, error: "" });
  }

  handleKeyPress(event: any) {
    if (event.which === 13) {
      this.setState({ value: this.props.predicted });
    }
  }

  render() {
    const { active, value, error, label } = this.state;
    const { predicted, locked } = this.props;
    const fieldClassName = `field ${
      (locked ? active : active || value) && "active"
    } ${locked && !active && "locked"}`;

    return (
      <div className={fieldClassName}>
        {active && value && predicted && predicted.includes(value) && (
          <p className="predicted">{predicted}</p>
        )}
        <input
          id={this.props.id}
          type={this.state.type}
          value={value}
          placeholder={label}
          onChange={this.changeValue.bind(this)}
          onKeyPress={this.handleKeyPress.bind(this)}
          onFocus={() => !locked && this.setState({ active: true })}
          onBlur={() => !locked && this.setState({ active: false })}
        />
        <label htmlFor={this.props.id} className={error && "error"}>
          {error || label}
        </label>
      </div>
    );
  }
}

export default Input;
