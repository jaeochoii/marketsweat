import React from "react";
import styled from "styled-components";
import Header from "../../uiPage/Header";
import Footer from "../../uiPage/Footer";

const BodyContent = styled.div`
  width: 390px;
  height: 500px;
`;

const TextWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Mogra&display=swap");
  font-family: "Mogra", cursive;
  font-weight: 400;
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;

const UserState = styled.div`
  width: 330px;
  height: 155px;
  border: 1px solid black;
  border-radius: 7px;
  margin-top: 31px;
  margin-left: 30px;
`;

const UserText = styled.div`
  width: 330px;
  height: 30px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IdText = styled.div`
  width: 50px;
  height: 12px;
  font-size: 13px;
  padding-left: 20px;
`;

const IdText2 = styled.div`
  width: 50px;
  height: 12px;
  font-size: 13px;
  padding-left: 10px;
`;

const UserManage = () => {
  return (
    <>
      <Header />
      <BodyContent>
        <TextWrapper>User Manage</TextWrapper>
        <UserState>
          <UserText>
            <IdText>아이디</IdText>
            <IdText>이름</IdText>
            <IdText>비밀번호</IdText>
            <IdText>상태</IdText>
          </UserText>
          <UserText>
            <IdText2>jaeochoiii</IdText2>
            <IdText2>최재오</IdText2>
            <IdText2>12345678!</IdText2>
            <IdText2>관리자</IdText2>
          </UserText>
          <UserText>
            <IdText2>inha2023</IdText2>
            <IdText2>김인하</IdText2>
            <IdText2>internet23!</IdText2>
            <IdText2>사용자</IdText2>
          </UserText>
          <UserText></UserText>
        </UserState>
      </BodyContent>
      <Footer />
    </>
  );
};

export default UserManage;
