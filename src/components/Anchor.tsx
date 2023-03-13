import styled from 'styled-components';

export const Anchor = ({ id }: { id: string }) => {
  return <Span id={id} />;
};

export const Span = styled.div`
  visibility: hidden;
  height: 100px; /* 50% viewport height */
  margin-top: -100px;
  transform: translateY(-100px);
`;
