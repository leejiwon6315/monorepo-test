('use client');

import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  color?: string;
}

export const ReactButton = ({ children, onClick, color }: Props) => {
  return (
    <Button onClick={onClick} color={color}>
      {children}
    </Button>
  );
};

const Button = styled('button')<Pick<Props, 'color'>>`
  background-color: ${({ color }) => color || 'white'};
  color: ${({ color }) => (color ? 'white' : 'black')};
`;
