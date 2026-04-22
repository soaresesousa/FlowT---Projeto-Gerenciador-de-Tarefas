import React from 'react';

interface Props {
}

const Form: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <form action="">
        <h2>Nova Task</h2>
        <label htmlFor="title">Título:</label>
        <input type="text" name='title'/>
        <label htmlFor="description">Descrição <span>(opcional)</span></label>
        <input type="text" name='description'/>
        <label htmlFor="priority">Prioridade:</label>
        <select name="priority">
            <option value="" disabled selected hidden >Priority</option>
            <option value="low">Baixa</option>
            <option value="medium">Média</option>
            <option value="high">Alta</option>
        </select>
        <label htmlFor="dueDate">Prazo de entrega <span>(opcional)</span></label>
        <input type="date" />
    </form>
  );
};

export default Form;