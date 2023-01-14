import './App.css';

import {useState} from "react";

function App() {

  // Grading scheme weight
  const [assignWeight, setAssignWeight] = useState({ switch: false, weight: 0 });
  const [quizWeight, setQuizWeight] = useState({ switch: false, weight: 0 });
  const [midtermWeight, setMidtermWeight] = useState({ switch: false, weight: 0 });
  const [projectWeight, setProjectWeight] = useState({ switch: false, weight: 0 });
  const [finalWeight, setFinalWeight] = useState({ switch: false, weight: 0 });

  // Category's tabs
  const [assignList, setAssignList] = useState([{ percentage: 0 }]);
  const [quizList, setQuizList] = useState([{ percentage: 0 }]);
  const [midtermList, setMidtermList] = useState([{ percentage: 0 }]);
  const [projectList, setProjectList] = useState([{ percentage: 0 }]);
  const [finalList, setFinalList] = useState([{ percentage: 0 }]);

  const [assignGrade, setAssginGrade] = useState(0);
  const [quizGrade, setQuizGrade] = useState(0);
  const [midtermGrade, setMidtermGrade] = useState(0);
  const [projectGrade, setProjectGrade] = useState(0);
  const [finalGrade, setfGrade] = useState(0);
  const [getFinalGrade, setFinalGrade] = useState(0);

  const HandleRemoveClick = (e, index) => {
    if(e.target.name === "assign") {
      const list = [...assignList];
      list.splice(index, 1);
      setAssignList(list);
    }
    else if(e.target.name === "quiz") {
      const list = [...quizList];
      list.splice(index, 1);
      setQuizList(list);
    }
    else if(e.target.name === "midterm") {
      const list = [...midtermList];
      list.splice(index, 1);
      setMidtermList(list);
    }
    else if(e.target.name === "project") {
      const list = [...projectList];
      list.splice(index, 1);
      setProjectList(list);
    }
    else {
      const list = [...finalList];
      list.splice(index, 1);
      setFinalList(list);
    }
  };

  const HandleAddClick = (e) => {
    if(e.target.name === "assign") {
      setAssignList([...assignList, { percentage: 0 }]);
    }
    else if(e.target.name === "quiz") {
      setQuizList([...quizList, { percentage: 0 }]);
    }
    else if(e.target.name === "midterm") {
      setMidtermList([...midtermList, { percentage: 0 }]);
    }
    else if(e.target.name === "project") {
      setProjectList([...projectList, { percentage: 0}]);
    }
    else {
      setFinalList([...finalList, { percentage: 0 }]);
    }
  };

  const HandlePercentage = (e, index) => {
    if(e.target.name === "assign") {
      const list = [...assignList]
      list[index]['percentage'] = e.target.value;
      setAssignList(list);
    }
    else if(e.target.name === "quiz") {
      const list = [...quizList]
      list[index]['percentage'] = e.target.value;
      setQuizList(list);
    }
    else if(e.target.name === "midterm") {
      const list = [...midtermList]
      list[index]['percentage'] = e.target.value;
      setMidtermList(list);
    }
    else if(e.target.name === "project") {
      const list = [...projectList]
      list[index]['percentage'] = e.target.value;
      setProjectList(list);
    }
    else {
      const list = [...finalList]
      list[index]['percentage'] = e.target.value;
      setFinalList(list);
    }
  }

  const HandleCheck = (e) => {
    if(e.target.name == "assign") {
      if(assignWeight.switch) {
        setAssignWeight({ switch: false, weight: assignWeight.weight })
      } else {
        setAssignWeight({ switch: true, weight: assignWeight.weight })
      }
    } 
    else if(e.target.name == "quiz") {
      if(quizWeight.switch) {
        setQuizWeight({ switch: false, weight: quizWeight.weight })
      } else {
        setQuizWeight({ switch: true, weight: quizWeight.weight })
      }
    } 
    else if(e.target.name == "midterm") {
      if(midtermWeight.switch) {
        setMidtermWeight({ switch: false, weight: midtermWeight.weight })
      } else {
        setMidtermWeight({ switch: true, weight: midtermWeight.weight })
      }
    } 
    else if(e.target.name == "project") {
      if(projectWeight.switch) {
        setProjectWeight({ switch: false, weight: projectWeight.weight })
      } else {
        setProjectWeight({ switch: true, weight: projectWeight.weight })
      }
    }
    else {
      if(finalWeight.switch) {
        setFinalWeight({ switch: false, weight: finalWeight.weight })
      } else {
        setFinalWeight({ switch: true, weight: finalWeight.weight })
      }
    } 
  }

  const FinalGrade = () => {
    var totalgrade = 0;
    if(assignWeight.switch) {
      const list = [...assignList]
      var assignTotal = 0
      list.forEach(n =>
        assignTotal += parseInt(n.percentage)
      )
      assignTotal = assignTotal / assignList.length
      assignTotal = assignTotal * parseFloat(`0.${assignWeight.weight}`)
      setAssginGrade(assignTotal)
      totalgrade += assignTotal
    }
    if(quizWeight.switch) {
      const list = [...quizList]
      var quizTotal = 0
      list.forEach(n =>
        quizTotal += parseInt(n.percentage)
      )
      quizTotal = quizTotal / quizList.length
      quizTotal = quizTotal * parseFloat(`0.${quizWeight.weight}`)
      setQuizGrade(quizTotal)
      totalgrade += quizTotal
    }
    if(midtermWeight.switch) {
      const list = [...midtermList]
      var midtermTotal = 0
      list.forEach(n =>
        midtermTotal += parseInt(n.percentage)
      )
      midtermTotal = midtermTotal / midtermList.length
      midtermTotal = midtermTotal * parseFloat(`0.${midtermWeight.weight}`)
      setMidtermGrade(midtermTotal)
      totalgrade += midtermTotal
    }
    if(projectWeight.switch) {
      const list = [...projectList]
      var projectTotal = 0
      list.forEach(n =>
        projectTotal += parseInt(n.percentage)
      )
      projectTotal = projectTotal / projectList.length
      projectTotal = projectTotal * parseFloat(`0.${projectWeight.weight}`)
      setProjectGrade(projectTotal)
      totalgrade += projectTotal
    }
    if(finalWeight.switch) {
      const list = [...finalList]
      var finalTotal = 0
      list.forEach(n =>
        finalTotal += parseInt(n.percentage)
      )
      finalTotal = finalTotal / finalList.length
      finalTotal = finalTotal * parseFloat(`0.${finalWeight.weight}`)
      setfGrade(finalTotal)
      totalgrade += finalTotal
    }
    setFinalGrade(totalgrade);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>GRADE CALCULATOR</h1>
        <div className="grade-scheme-container">
          <h5>Grading Scheme: </h5>
          <div className="grade-scheme">
            <input type="checkbox" name="assign" onChange={e => HandleCheck(e)}></input>
            <span>Assignment: </span>
            <input placeholder="grade-weight" 
            onChange={e => setAssignWeight({ switch: assignWeight.switch, weight: e.target.value})}></input>
          </div>
          <div className="grade-scheme">
            <input type="checkbox" name="quiz" onChange={e => HandleCheck(e)}></input>
            <span>Quiz: </span>
            <input placeholder="grade-weight" 
            onChange={e => setQuizWeight({ switch: quizWeight.switch, weight: e.target.value})}></input>
          </div>
          <div className="grade-scheme">
            <input type="checkbox" name="midterm" onChange={e => HandleCheck(e)}></input>
            <span>Midterm: </span>
            <input placeholder="grade-weight"
            onChange={e => setMidtermWeight({ switch: midtermWeight.switch, weight: e.target.value})}></input>
          </div>
          <div className="grade-scheme">
            <input type="checkbox" name="project" onChange={e => HandleCheck(e)}></input>
            <span>Project: </span>
            <input placeholder="grade-weight" 
            onChange={e => setProjectWeight({ switch: projectWeight.switch, weight: e.target.value})}></input>
          </div>
          <div className="grade-scheme">
            <input type="checkbox" name="final" onChange={e => HandleCheck(e)}></input>
            <span>Final: </span>
            <input placeholder="grade-weight"
            onChange={e => setFinalWeight({ switch: finalWeight.switch, weight: e.target.value})}></input>
          </div>
        </div>

        {assignWeight.switch && 
          <div className="assign-grades-container">
            <span>-------- ASSIGNMENTS: {assignGrade}% --------</span>
            {assignList.map((x, i) => (
              <div className="grades-tab">
                <input name="assign" placeholder="percent-grade" onChange={e => HandlePercentage(e, i)} />
                <div className="btn-box">
                  {assignList.length !== 1 && <button name="assign" onClick={e => HandleRemoveClick(e, i)}>Remove</button>}
                  {assignList.length - 1 === i && <button name="assign" onClick={e => HandleAddClick(e)}>Add</button>}
                </div>
              </div>
            ))}
          </div>
        }
        
        {quizWeight.switch && 
          <div className="quiz-grades-container">
            <span>-------- QUIZES: {quizGrade}% --------</span>
            {quizList.map((x, i) => (
              <div className="grades-tab">
                <input name="quiz" placeholder="percent-grade" onChange={e => HandlePercentage(e, i)} />
                <div className="btn-box">
                  {quizList.length !== 1 && <button name="quiz" onClick={e => HandleRemoveClick(e, i)}>Remove</button>}
                  {quizList.length - 1 === i && <button name="quiz" onClick={e => HandleAddClick(e)}>Add</button>}
                </div>
              </div>
            ))}
          </div>
        }

        {midtermWeight.switch && 
          <div className="midterm-grades-container">
            <span>-------- MIDTERM: {midtermGrade}% --------</span>
            {midtermList.map((x, i) => (
              <div className="grades-tab">
                <input name="midterm" placeholder="percent-grade" onChange={e => HandlePercentage(e, i)} />
                <div className="btn-box">
                  {midtermList.length !== 1 && <button name="midterm" onClick={e => HandleRemoveClick(e, i)}>Remove</button>}
                  {midtermList.length - 1 === i && <button name="midterm" onClick={e => HandleAddClick(e)}>Add</button>}
                </div>
              </div>
            ))}
          </div>
        }

        {projectWeight.switch && 
          <div className="project-grades-container">
            <span>-------- PROJECT: {projectGrade}% --------</span>
            {projectList.map((x, i) => (
              <div className="grades-tab">
                <input name="project" placeholder="percent-grade" onChange={e => HandlePercentage(e, i)} />
                <div className="btn-box">
                  {projectList.length !== 1 && <button name="project" onClick={e => HandleRemoveClick(e, i)}>Remove</button>}
                  {projectList.length - 1 === i && <button name="project" onClick={e => HandleAddClick(e)}>Add</button>}
                </div>
              </div>
            ))}
          </div>
        }

        {finalWeight.switch && 
          <div className="final-grades-container">
            <span>-------- FINAL: {finalGrade}% --------</span>
            {finalList.map((x, i) => (
              <div className="grades-tab">
                <input name="final" placeholder="percent-grade" onChange={e => HandlePercentage(e, i)} />
                <div className="btn-box">
                  {finalList.length !== 1 && <button name="final" onClick={e => HandleRemoveClick(e, i)}>Remove</button>}
                  {finalList.length - 1 === i && <button name="final" onClick={e => HandleAddClick(e)}>Add</button>}
                </div>
              </div>
            ))}
          </div>
        }

        <h5>FINAL GRADE: {getFinalGrade}%</h5>
        <button onClick={e => FinalGrade()}>Apply</button>
        
        <span>Created by Steven Baes</span>
      </header>
    </div>
  );
}

export default App;
