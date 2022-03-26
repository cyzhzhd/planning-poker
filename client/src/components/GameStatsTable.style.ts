import styled from '@emotion/styled';

export const StatsTable = styled.div({
  display: 'flex',
  alignItems: 'center',
});
export const Votes = styled.div({
  display: 'flex',
});
export const VoteWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});
export const Gauge = styled.div(({ percent }: { percent: string }) => ({
  width: 4,
  height: 80,
  border: '1px solid black',
  marginBottom: 5,
  position: 'relative',

  '&:after': {
    content: '"\\A"',
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    background: 'black',
    height: `${percent}%`,
  },
}));
export const VoteValue = styled.span();

export const Stats = styled.div({
  marginLeft: 20,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});
export const StatKey = styled.span({
  fontSize: 18,
  color: 'gray',
});
export const StatValue = styled.span({
  fontSize: 28,
  fontWeight: 'bold',
});
