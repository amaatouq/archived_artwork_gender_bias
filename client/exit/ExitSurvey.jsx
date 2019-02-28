import React from "react";

import { Centered } from "meteor/empirica:core";
import {
  Button,
  Classes,
  FormGroup,
  RadioGroup,
  TextArea,
  Intent,
  Radio
} from "@blueprintjs/core";

// const Radio = ({ selected, name, value, label, onChange }) => (
//   <label>
//     <input
//       type="radio"
//       name={name}
//       value={value}
//       checked={selected === value}
//       onChange={onChange}
//     />
//     {label}
//   </label>
// );

export default class ExitSurvey extends React.Component {
  static stepName = "ExitSurvey";
  state = { age: "", gender: "", country: "", visits: "", fair: "", original: "", home: "" };

  handleChange = event => {
    const el = event.currentTarget;
    this.setState({ [el.name]: el.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    const { player } = this.props;
    const { age, gender, country, visits, fair, original, home, education } = this.state;

    return (
      <Centered>
        <div className="exit-survey">
          <h1 className="bp3-heading"> Exit Survey </h1>

          <p className="bp3-ui-text">
            Please answer the following general information questions about yourself:
          </p>
          <form onSubmit={this.handleSubmit}>
            <div className="form-line">
              <FormGroup
                inline={true}
                label={"Age"}
                labelFor={"age"}
                className={"form-group"}
              >
                <input
                  id="age"
                  className={Classes.INPUT}
                  type="number"
                  min="0"
                  max="150"
                  step="1"
                  dir="auto"
                  name="age"
                  value={age}
                  onChange={this.handleChange}
                  // required
                />
              </FormGroup>

              <FormGroup
                inline={true}
                label={"Gender"}
                labelFor={"gender"}
                className={"form-group"}
              >
                <input
                  id="gender"
                  className={Classes.INPUT}
                  type="text"
                  dir="auto"
                  name="gender"
                  value={gender}
                  onChange={this.handleChange}
                  // required
                />
              </FormGroup>

              <FormGroup
                inline={true}
                label={"Country"}
                labelFor={"country"}
                className={"form-group"}
              >
                <input
                  id="country"
                  className={Classes.INPUT}
                  type="text"
                  dir="auto"
                  name="country"
                  value={country}
                  onChange={this.handleChange}
                  // required
                />
              </FormGroup>
            </div>

            <div className="form-line">
              <RadioGroup
                inline={false}
                name="education"
                label="Highest Education Qualification?"
                onChange={this.handleChange}
                selectedValue={education}
              >
                <Radio
                  selected={education}
                  name="education"
                  value="high-school"
                  label="High School"
                  onChange={this.handleChange}
                />
                <Radio
                  selected={education}
                  name="education"
                  value="bachelor"
                  label="US Bachelor's Degree"
                  onChange={this.handleChange}
                />
                <Radio
                  selected={education}
                  name="education"
                  value="master"
                  label="Master's or higher"
                  onChange={this.handleChange}
                />
                <Radio
                  selected={education}
                  name="education"
                  value="other"
                  label="Other"
                  onChange={this.handleChange}
                />
              </RadioGroup>
            </div>

            <div className="form-line fourths">
              <FormGroup
                className={"form-group"}
                inline={false}
                label={"How often do you visit an art gallery, museum, or exhibition?"}
                labelFor={"visits"}
              >
                <TextArea
                  dir="auto"
                  id="visits"
                  large={true}
                  intent={Intent.PRIMARY}
                  onChange={this.handleChange}
                  value={visits}
                  fill={true}
                  name="visits"
                />
              </FormGroup>

              <FormGroup
                className={"form-group"}
                inline={false}
                label={"Have you ever attended an art fair?"}
                labelFor={"visits"}
              >
                <TextArea
                  dir="auto"
                  id="fair"
                  large={true}
                  intent={Intent.PRIMARY}
                  onChange={this.handleChange}
                  value={fair}
                  fill={true}
                  name="fair"
                />
              </FormGroup>

              <FormGroup
                className={"form-group"}
                inline={false}
                label={"Have you ever purchased an original work of art?"}
                labelFor={"original"}
              >
                <TextArea
                  dir="auto"
                  id="original"
                  large={true}
                  intent={Intent.PRIMARY}
                  onChange={this.handleChange}
                  value={original}
                  fill={true}
                  name="original"
                />
              </FormGroup>

              <FormGroup
                className={"form-group"}
                inline={false}
                label={"Do you have artwork hanging in your home?"}
                labelFor={"original"}
              >
                <TextArea
                  dir="auto"
                  id="home"
                  large={true}
                  intent={Intent.PRIMARY}
                  onChange={this.handleChange}
                  value={home}
                  fill={true}
                  name="home"
                />
              </FormGroup>
            </div>

            <button class="bp3-button bp3-intent-primary" type="submit">Submit</button>
          </form>
        </div>
      </Centered>
    );
  }
}
