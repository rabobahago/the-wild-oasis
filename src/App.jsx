import styled from "styled-components";
const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;
const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  color: "white";
  background-color: purple;
  cursor: pointer;
  margin: 20px;
`;
export default function App() {
  return (
    <div>
      <H1>The wild Oasis</H1>
      <Button onClick={() => alert("Check In")}>Chcek In</Button>
      <Button onClick={() => alert("Check Out")}>Chcek Out</Button>
    </div>
  );
}
