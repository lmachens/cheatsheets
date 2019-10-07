import React from "react";
import PropTypes from "prop-types";
import Code from "./Code";

export default function Section({ code, introduction, title }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{introduction}</p>
      <Code>{code}</Code>
    </div>
  );
}

Section.propTypes = {
  code: PropTypes.string,
  introduction: PropTypes.string,
  title: PropTypes.string
};
