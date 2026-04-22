import React from 'react';

import "../styles/TaskList.css"

interface Props {
}

const TaskList: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <div className='tasksList'>
        <h2>Suas tasks aparecerão aqui</h2>
    </div>
  );
};

export default TaskList;