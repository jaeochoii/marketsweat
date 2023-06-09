import React from "react";
import styled from "styled-components";
import Header from "../../uiPage/Header";
import Footer from "../../uiPage/Footer";
import Pancake from "../../assets/Product.png";
import { useNavigate } from "react-router-dom";

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

const DateText = styled.div`
  display: flex;
  @import url("https://fonts.googleapis.com/css2?family=Miriam+Libre&display=swap");
  font-family: "Miriam Libre", sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #cecece;
  border-bottom: 2px solid #cecece;
  width: 350px;
  height: 20px;
  padding-top: 30px;
  padding-bottom: 2px;
  margin-left: 20px;
`;

const PurchaseText = styled.div`
  display: flex;
  @import url("https://fonts.googleapis.com/css2?family=Miriam+Libre&display=swap");
  font-family: "Miriam Libre", sans-serif;
  font-weight: 700;
  font-size: 18px;
  width: 350px;
  height: 20px;
  padding-top: 15px;
  padding-bottom: 2px;
  margin-left: 20px;
`;

const RecContent = styled.img`
  width: 110px;
  height: 125px;
  border: 1px solid #d8cb93;
  border-radius: 2px;
  margin-left: 20px;
  margin-top: 10px;
`;

const PurchaseDiv = styled.div`
  display: flex;
  width: 300px;
  height: 150px;
  padding-top: 10px;
`;

const RecText = styled.div`
  display: flex;
  @import url("https://fonts.googleapis.com/css2?family=Miriam+Libre&display=swap");
  font-family: "Miriam Libre", sans-serif;
  font-weight: 700;
  font-size: 15px;
  width: 150px;
  padding-left: 20px;
  padding-top: 10px;
`;

const PurchaseBut = styled.button`
  width: 350px;
  height: 34px;
  border: 1px solid #f6f2dd;
  background-color: #f6f2dd;
  border-radius: 3px;
  font-size: 15px;
  font-weight: 700;
  margin-top: 10px;
  margin-left: 20px;
`;

const PurchasePage = () => {
  const navigate = useNavigate();

  const onClickPosting = () => {
    navigate("/WritePostPage");
  };

  return (
    <>
      <Header />
      <BodyContent>
        <TextWrapper>Purchase</TextWrapper>
        <DateText>2023.06.11</DateText>
        <PurchaseText>구매 확정</PurchaseText>
        <PurchaseDiv>
          <RecContent src={Pancake} />
          <RecText>
            [청수당]
            <br />
            <br />
            수플레 팬케이크 2set
            <br />
            <br />
            수량: 1개
            <br />
            <br />
            8,400원
          </RecText>
        </PurchaseDiv>
        <PurchaseBut onClick={onClickPosting}>후기 작성</PurchaseBut>
      </BodyContent>
      <Footer />
    </>
  );
};

export default PurchasePage;
