export declare namespace JSX {
  interface WithChildren {
    children?: JSX.Element | JSX.Element[] | string | string[];
  }

  interface Element {
    type: string | Function;
    props: WithChildren & Record<string, unknown>;
  }

  interface CommonAttrs {
    class?: string;
    id?: string;
    style?: string;
  }

  interface IntrinsicElements {
    html: WithChildren & CommonAttrs & { lang?: string };
    div: WithChildren & CommonAttrs;
    span: WithChildren & CommonAttrs;
    [key: string]: CommonAttrs & any;
  }
}
