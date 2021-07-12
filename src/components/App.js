import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import EventForm from './EventForm';
import Events from './Events'
import AppContext from '../contexts/AppContext'
import reducer from "../reducers";

console.log({AppContext});


const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  
  return (
    <AppContext.Provider value={'HEllo I am a Provider'}>
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch} />
      </div>
    </AppContext.Provider>
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
