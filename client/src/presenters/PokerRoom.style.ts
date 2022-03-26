import styled from '@emotion/styled';

export const Wrapper = styled.div({
  height: '100vh',
  overflowY: 'hidden',
});
export const Body = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',

  height: '100%',
});
export const RoomName = styled.header({
  fontSize: 28,
});
export const Main = styled.main({
  marginTop: 100,
});
export const Bottom = styled.div({
  marginBottom: 100,
});
