import React from "react";
import MDX from "@mdx-js/runtime";

const components = {
  h1: props => <h1 style={{ color: "tomato" }} {...props} />,
  Demo: () => <h1>This is a demo component</h1>
};

const mdx = `
# Hello, MDX Runtime!

Hey look, this resolves the "@mdx-js/runtime" package now!!!

<Demo />
`;

export default () => <MDX components={components}>{mdx}</MDX>;
