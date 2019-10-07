import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledUl = styled.ul`
  margin: ${props => (props.indent ? "0 0 0 20px" : 0)};
  padding: 0;
`;

export default function List({ children, indent }) {
  return <StyledUl indent={indent}>{children}</StyledUl>;
}

List.propTypes = {
  children: PropTypes.node.isRequired,
  indent: PropTypes.bool
};
