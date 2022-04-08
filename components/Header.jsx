import styled from "styled-components";

const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-family: "Cutive Mono", monospace;
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Cutive Mono", monospace;
`;

const Header = () => {
  return (
    <>
      <Navbar>
        <h1>Sébastien Francisque</h1>
      </Navbar>
    </>
  );
};

export default Header;
