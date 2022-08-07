import styled from "styled-components";
import { motion } from "framer-motion";

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
      <Navbar
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h1>Sébastien Francisque</h1>
      </Navbar>
    </>
  );
};

export default Header;
