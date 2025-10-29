export declare namespace JSX {
  type LiteralElement = string | number;

  type CommonAttrs = Partial<{
    class: string;
    id: string;
    style: string;
  }>;

  interface WithChildren extends CommonAttrs {
    children?:
      | LiteralElement
      | LiteralElement[]
      | JSX.Element
      | JSX.Element[]
      | null
      | undefined;
    [key: string]: unknown;
  }

  type Component = (props: WithChildren) => JSX.Element;

  interface Element {
    type: LiteralElement | Component;
    props: WithChildren;
  }

  interface ContainerElementAttrs extends WithChildren {}

  interface IntrinsicElements {
    html: HTML.Html;
    div: HTML.Div;
    header: HTML.Div;
    footer: HTML.Div;
    span: HTML.Span;
    a: HTML.Anchor;
    img: HTML.Img;
  }

  type FC<
    T extends keyof IntrinsicElements = "div",
    P extends WithChildren = IntrinsicElements[T],
  > = (props: P & IntrinsicElements[T]) => JSX.Element;
}

declare namespace HTML {
  type Html = JSX.ContainerElementAttrs & {
    lang?: string;
  };
  type Div = JSX.ContainerElementAttrs;
  type Span = JSX.ContainerElementAttrs;
  type Anchor = JSX.ContainerElementAttrs & {
    href: string;
    target?: "_blank" | "_self" | "_parent" | "_top";
  };
  type Img = JSX.ContainerElementAttrs & {
    src: string;
    alt: string;
  };
}
