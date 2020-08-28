import React from 'react';
import './App.css';
import GradeList from "./components/GradeList";
import GradeForm from "./components/GradeForm";
import GradeCalc from "./components/GradeCalc";

//readme fil
class App extends React.Component {

  constructor() {
    super();
    this.remove = this.remove.bind(this);
    this.addGrade = this.addGrade.bind(this);
    this.updateGrade = this.updateGrade.bind(this);
    let gr = []

    this.state = {
      grades: gr,

    }

  }

  updateGrade(g) {
    this.setState((prevState, props) => {
      return { grades: g }
    });
  }

  addGrade(newGrade) {
    let list = this.state.grades
    this.updateGrade([...list, newGrade])
  }

  remove(id) {
    let list = this.state.grades.filter(x => x.id !== id)
    this.updateGrade(list)
  }

  render() {
    return (
      <div>
        <h1>Calculate GPa</h1>

        <GradeCalc grades={this.state.grades} />
        <GradeForm onSubmit={this.addGrade} />
        <GradeList grades={this.state.grades} rem={this.remove} />

      </div >
    );
  }
}


export default App;
