import styled from "styled-components";

const Navbar = styled.div`
  margin-top: 40px;
  font-family: "Cutive Mono", monospace;
  text-decoration: underline;
  @media (max-width: 660px) {
    font-size: 1.3rem;
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
