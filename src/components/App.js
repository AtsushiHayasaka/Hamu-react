import React, {useState, useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addEvent = (e) => {
    e.preventDefault();

    dispatch (
      {
        type:'CREATE_EVENT',
        title,
        body,
      });
      console.log(dispatch);

    setTitle('');
    setBody('');
  }
  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input onChange={e => setTitle(e.target.value)} className="form-control" id="formEventTitle" value={title} />
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">ボディ</label>
          <textarea onChange={e => setBody(e.target.value)} className="form-control" id="formEventBody" value={body}/>
        </div>
        <button className="btn btn-primary" onClick={addEvent}>イベントを作成する</button>
        <button className="btn btn-danger">全てのイベントを削除する</button>
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
          
        </tbody>

      </table>
    </div>
  );
}

export default App;


/**
 * dispatchを設定、引数にactionを渡す。
 * そのactionの内容がreducers/index.jsのeventsのswitch文に渡されて、処理 <= なぜpropsを使ってないのに渡せる？？
 * 
 * 
 * dispatchの引数に渡されたオブジェクトにはactionという名前がつけられ、reducersに渡される
 */