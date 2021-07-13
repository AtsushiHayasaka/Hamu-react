import React, { useState, useContext } from "react";
import {
    CREATE_EVENT,
    DELETE_ALL_EVENTS
}
from "../actions";
import AppContext from '../contexts/AppContext'


const EventForm = () => {
  const {state, dispatch} = useContext(AppContext);
    //App.jsからstateとdispatchが渡ってくるため、いらない
//   const [state, dispatch] = useReducer(reducer, []); 
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");


  const addEvent = (e) => {
    e.preventDefault();

    dispatch({
      type: CREATE_EVENT,
      title,
      body,
    });

    setTitle("");
    setBody("");
  };

  const deleteAllEvents = (e) => {
    e.preventDefault();
    const result = window.confirm('全てのイベントを本当に削除しても良いですか？');
    if(result) dispatch({ type: DELETE_ALL_EVENTS})
  }

  const unCreatable = title === '' || body === '';
  const unDeletable = state.length === 0;
   

  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="formEventTitle"
            value={title}
          />
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">ボディ</label>
          <textarea
            onChange={(e) => setBody(e.target.value)}
            className="form-control"
            id="formEventBody"
            value={body}
          />
        </div>
        <button
          className="btn btn-primary"
          onClick={addEvent}
          disabled={unCreatable}
        >
          イベントを作成する
        </button>
        <button
          className="btn btn-danger"
          onClick={deleteAllEvents}
          disabled={unDeletable}
        >
          全てのイベントを削除する
        </button>
      </form>
    </>
  );
};

export default EventForm;
