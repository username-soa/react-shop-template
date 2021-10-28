import React from "react";
import styled from "styled-components";

const IsEmpty = ({ ovveride, bg = "#fff" }) => {
  return (
    <Container bg={bg}>
      {ovveride ? (
        <p>{ovveride}</p>
      ) : (
        <p>désolé mais il n'y a pas de résultat pour le moment</p>
      )}
    </Container>
  );
};

export default IsEmpty;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  margin: 1em;
  border-radius: 10px;
  background: ${(props) => props.bg};
`;
