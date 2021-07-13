import React, { useReducer, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import EventForm from './EventForm';
import Events from './Events';
import OperationLogs from './OperationLogs';
import AppContext from '../contexts/AppContext'
import reducer from "../reducers";

const APP_KEY = 'appWithRedux';

const App = () => {
  const appState = localStorage.getItem(APP_KEY);
  const initialState = appState ? JSON.parse(appState) : {
    events: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state) )
  },[state])
  
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
        <OperationLogs />
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
