import React, { useState, useReducer, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Event } from './Event'
import reducer from "../reducers";

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addEvent = (e) => {
    e.preventDefault();

    dispatch({
      type: "CREATE_EVENT",
      title,
      body,
    });

    setTitle("");
    setBody("");
  };

  const deleteAllEvents = (e) => {
    e.preventDefault();
    const result = window.confirm('全てのイベントを本当に削除しても良いですか？');
    if(result) dispatch({ type: 'DELETE_ALL_EVENTS'})
  }

  const unCreatable = title === '' || body === '';
  const unDeletable = state.length === 0;

  return (
    <div className="container-fluid">
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
        <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>
          イベントを作成する
        </button>
        <button className="btn btn-danger" onClick={deleteAllEvents} disabled={unDeletable}>全てのイベントを削除する</button>
      </form>

      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { state.map((event, index) => (<Event key={index} event={event} dispatch={dispatch} />))}
        </tbody>
      </table>
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
