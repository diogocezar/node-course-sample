import React from "react";

const Title = props => {
  return <h2 style={{ color: props.color }}>{props.children}</h2>;
};

export default Title;
