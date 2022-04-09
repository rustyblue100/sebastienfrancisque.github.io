import styled from "styled-components";

const Navbar = styled.div`
  margin-top: 20px;
  font-family: "Cutive Mono", monospace;

  @media (max-width: 660px) {
    font-size: 0.7rem;
  }
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
