import React from "react";

import { Centered } from "meteor/empirica:core";

const Radio = ({ selected, name, value, label, onChange }) => (
  <label>
    <input
      type="radio"
      name={name}
      value={value}
      checked={selected === value}
      onChange={onChange}
    />
    {label}
  </label>
);

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
          <h1> Exit Survey </h1>

          <p>
            Please answer the following general information questions about yourself:
          </p>
          <form onSubmit={this.handleSubmit}>
            <div className="form-line">
              <div>
                <label htmlFor="age">Age</label>
                <div>
                  <input
                    id="age"
                    type="number"
                    min="0"
                    max="150"
                    step="1"
                    dir="auto"
                    name="age"
                    value={age}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="gender">Gender</label>
                <div>
                  <input
                    id="gender"
                    type="text"
                    dir="auto"
                    name="gender"
                    value={gender}
                    onChange={this.handleChange}
                    autoComplete="off"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="country">Country</label>
                <div>
                  <input
                    id="country"
                    type="text"
                    dir="auto"
                    name="country"
                    value={country}
                    onChange={this.handleChange}
                    autoComplete="off"
                  />
                </div>
              </div>
            </div>

            <div>
              <label>Highest Education Qualification</label>
              <div>
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
              </div>
            </div>

            <div className="form-line fourths">
              <div>
                <label htmlFor="visits">
                  How often do you visit an art gallery, museum, or exhibition?
                </label>
                <div>
                  <textarea
                    dir="auto"
                    id="visits"
                    name="visits"
                    value={visits}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="fair">Have you ever attended an art fair?</label>
                <div>
                  <textarea
                    dir="auto"
                    id="fair"
                    name="fair"
                    value={fair}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="original">
                  Have you ever purchased an original work of art?
                </label>
                <div>
                  <textarea
                    dir="auto"
                    id="original"
                    name="original"
                    value={original}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="home">
                  Do you have artwork hanging in your home?
                </label>
                <div>
                  <textarea
                    dir="auto"
                    id="home"
                    name="home"
                    value={home}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </Centered>
    );
  }
}
