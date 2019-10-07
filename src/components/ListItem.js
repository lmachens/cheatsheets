import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import More from "../icons/More";
import Less from "../icons/Less";

const StyledLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  padding: 4px 8px;
  font-weight: bold;
  cursor: pointer;
  color: ${props => (props.active ? "#c14b4b" : "#fff")};
  fill: #fff;

  &:hover {
    color: #09d3ac;
  }
`;

export default function ListItem({ active, children, onClick, details }) {
  const showMore = details && !active;
  const showLess = details && active;

  return (
    <>
      <StyledLi active={active} onClick={onClick}>
        {children}
        {showMore && <More />}
        {showLess && <Less />}
      </StyledLi>
      {active && details}
    </>
  );
}

ListItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  details: PropTypes.node
};
