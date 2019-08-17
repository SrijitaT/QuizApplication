import React, { Component } from "react";
import ques_ans from "./Quiz";
import Options from "./Options";
class Questions extends Component {
  constructor() {
    super();
    this.state = { score: 0, scoreCard: [] };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleSelect(index, val, matched) {
    const scoreCardCpy = [...this.state.scoreCard];
    scoreCardCpy[index] = matched;
    this.setState({ scoreCard: scoreCardCpy });
  }
  handleFormSubmit(e) {
    console.log(this.state.scoreCard);
    const score = this.state.scoreCard.reduce((acc, curr) => {
      if (curr) acc++;
      return acc;
    }, 0); //calculating score
    this.setState({ score });
    e.preventDefault();
  }
  render() {
    const quiz = ques_ans.map((q, index) => {
      return (
        <React.Fragment key={`${q} - ${index}`}>
          <p>{q.ques}</p>
          <Options
            options={q.options}
            name={index}
            answer={q.answer}
            submitted={this.state.submitted}
            handleSelect={this.handleSelect}
          />
        </React.Fragment>
      );
    });
    return (
      <>
        <form method="POST" onSubmit={this.handleFormSubmit}>
          {quiz}
          <br />
          <button type="submit">Submit</button>
        </form>
        <div>Your score is: {this.state.score}</div>
      </>
    );
  }
}
export default Questions;
