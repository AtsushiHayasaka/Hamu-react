import React from 'react';
import OperationLogs from './OperationLogs';

const OperationLog = ({ operationLog }) => {
    return (
        <tr>
            <td>{operationLog.description}</td>
            <td>{operationLog.operatedAt}</td>
        </tr>
    )
}

export default OperationLog