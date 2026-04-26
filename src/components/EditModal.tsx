import React from 'react';

interface Props {
    children: React.ReactNode;
}

const EditModal: React.FunctionComponent<Props> = ({children}: Props) => {
  return (
    children
  );
};

export default EditModal;