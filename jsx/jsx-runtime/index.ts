import { JSX } from "..";

function Fragment(props: JSX.Element["props"]): JSX.Element {
  return {
    type: "Fragment",
    props,
  };
}

function jsx(
  type: JSX.Element["type"],
  props: JSX.Element["props"],
): JSX.Element {
  return {
    type,
    props,
  };
}

export { jsx, Fragment };
