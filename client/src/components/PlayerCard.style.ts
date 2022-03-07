import styled from '@emotion/styled';

export const CardWrapper = styled.div(({ isOpen }: { isOpen: boolean }) => ({
  width: '80px',
  height: '100px',
  borderRadius: '5px',
  border: '2px solid black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 10px',
  cursor: 'pointer',
  color: 'black',
  backgroundColor: isOpen ? 'white' : 'black',
}));
