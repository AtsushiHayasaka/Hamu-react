import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import reducer from "../reducers";
import EventForm from './EventForm';
import Events from './Events'

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  
  return (
    <div className="container-fluid">
      <EventForm state={state} dispatch={dispatch} />
      <Events state={state} dispatch={dispatch} />
    </div>
  );
};

export default App;

/**
 * dispatchを設定、引数にactionを渡す。
 * そのactionの内容がreducers/index.jsのeventsのswitch文に渡されて、処理 <= なぜpropsを使ってないのに渡せる？？
 *
 *
 * dispatchの引数に渡されたオブジェクトにはactionという名前がつけられ、reducersに渡される
 */
