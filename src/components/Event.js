import React, {useContext} from 'react';

import { DELETE_EVENT } from '../actions'
import AppContext from '../contexts/AppContext'

export const Event = ({ event }) => {
  const {dispatch} = useContext(AppContext);
    const {id, title, body} = event
    const handleClickDeleteButton = () => {
      const result = window.confirm(`イベント(id=${id})を本当に削除しても良いですか？`)

      if (result)dispatch({type: DELETE_EVENT, id })
    }
    return (
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{body}</td>
        <td><button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button></td>
      </tr>
    );
}
// {state.map((event, index) => {
//     
//   })}