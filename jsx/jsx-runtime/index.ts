function Fragment(props: Record<string, unknown>): JSX.Element {
  return {
    type: "Fragment",
    props,
  };
}

function jsx(
  type: string | Function,
  props: Record<string, unknown>,
): JSX.Element {
  return {
    type,
    props,
  };
}

export { jsx, Fragment };
