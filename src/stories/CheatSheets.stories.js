import React from "react";
import Code from "../components/Code";
import Section from "../components/Section";

export default {
  title: "Cheat Sheets"
};

export const SampleCode = () => <Code>some code</Code>;
export const SampleSection = () => (
  <Section code="some code" title="Sample section" introduction="Some intro" />
);
