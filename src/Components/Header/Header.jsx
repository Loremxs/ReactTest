// import "./Header.css";
import { useState } from "react";
import logo from "/logo-name.svg";
import { styled } from "styled-components";

const HeaderContainer = styled.header`
  height: 50px;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fafafa;
`;
export default function Header() {
  const [time, setTime] = useState(new Date());
  setInterval(() => setTime(new Date()), 1000);
  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      <span>Время сейчас: {time.toLocaleTimeString()}</span>
    </HeaderContainer>
  );
}
