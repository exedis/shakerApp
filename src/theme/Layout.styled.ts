import styled from "@emotion/styled";

export const LayoutWrapper = styled.div`
  border: 1px solid red;
  height: 100dvh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100dvw;
  max-width: 100%;
`;

export const LayoutBottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px 12px 0 0;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;
