import styled from "styled-components";

const LoginContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #78c6a3;
`;

const LoginBox = styled.div`
  width: 40%;
  max-width: 1536px;
  min-width: 350px;
  height: 800px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #fff;

  border-radius: 12px;
`;

const LoginInputBox = styled.div`
  width: calc(100% - 40px);
  height: 80px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin: 15px 0 0 0;

  /* background: #000; */
  /* border: 1px solid #fdfd; */
`;

const LoginInput = styled.input`
  width: 100%;
  height: 48px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  background: #fff;
  border: 1px solid #343a40;
  border-radius: 12px;

  font-family: "NotoSansKR";
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;

  padding-left: 16px;
  margin-top: 10px;

  &::placeholder {
    font-weight: 400;
  }
`;

const LoginFastRouteSet = styled.div`
  width: calc(100% - 40px);
  height: 48px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  background: #fff;
`;

export {
  LoginContainer,
  LoginBox,
  LoginInputBox,
  LoginInput,
  LoginFastRouteSet
};
