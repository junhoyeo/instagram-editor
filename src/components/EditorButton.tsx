import React from 'react';
import styled from 'styled-components';

interface IEditorButton {
  icon: string;
  className?: string;
  name?: string;
  onClick?: () => void;
}

const EditorButton: React.FC<IEditorButton> = ({ icon, className, name, onClick }) => {
  return (
    <Container
      className={className}
      onClick={onClick}
    >
      <Icon src={icon} />
      <Name>
        {name}
      </Name>
    </Container>
  );
};

export default EditorButton;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 14px;
  background-color: #dee2e6;
  border-radius: 4px;
  cursor: pointer;
  width: fit-content;
  font-size: 16px;
  margin-bottom: 16px;
  transition: background-color 0.15s ease-in-out;

  &:hover,
  &:focus {
    background-color: #ced4da;
  }

  @media screen and (max-width: 1000px) {
    margin-bottom: 12px;
  }

  @media screen and (max-width: 450px) {
    padding: 10px 12px;
    font-size: 14.5px;
  }
`;

const Icon = styled.img`
  width: 18px;
  height: 18px;

  @media screen and (max-width: 450px) {
    width: 17px;
    height: 17px;
  }
`;

const Name = styled.span`
  font-weight: bold;
  margin-left: 10px;

  @media screen and (max-width: 450px) {
    margin-left: 9px;
  }
`;
