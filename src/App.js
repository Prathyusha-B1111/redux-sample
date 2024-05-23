import './App.css';
import {connect} from "react-redux"

const App = (props) => {

    return (
      <div className='home-bg'>
           <h1>Counter</h1>
           CountA: {props.countA}
           CountB: {props.countB}
           <button onClick={props.increment}>Click Here Increment</button>
           <button onClick={props.decrement}>Click Here Decrement</button>
           <ul>
            {props?.history?.map(Each => (<li>{Each.countA}</li>))}
           </ul>
      </div>
    )
}

const mapStateToProps = (state) => {

  return {
    countA: state.rA.countA,
    countB: state.rB.countA,
    history: state.rB.history
  }
}

const mapDispatchToProps = (dispatch) => {
  
  return {
    increment: () => dispatch({ type: "INCREMENT", value: 1}),
    decrement: () => dispatch({ type: "DECREMENT", value: 10}),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
