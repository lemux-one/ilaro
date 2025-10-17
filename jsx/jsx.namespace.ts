export declare namespace JSX {
  type LiteralElement = string | number;

  interface WithChildren extends CommonAttrs {
    children:
      | LiteralElement
      | LiteralElement[]
      | JSX.Element
      | JSX.Element[]
      | null
      | undefined;
  }

  type ComponentProps = CommonAttrs & Record<string, unknown>;

  type Component = (props: ComponentProps) => JSX.Element;

  type ComponentWithChildren = (
    props: ComponentProps & WithChildren,
  ) => JSX.Element;

  interface Element {
    type: LiteralElement | Component;
    props: Partial<ComponentProps & WithChildren> & Record<string, unknown>;
  }

  type CommonAttrs = Partial<{
    class: string;
    id: string;
    style: string;
  }>;

  interface ContainerElementAttrs extends Partial<WithChildren> {}

  interface IntrinsicElements {
    html: HTML.Html;
    div: HTML.Div;
    span: HTML.Span;
    a: HTML.Anchor;
    img: HTML.Img;
    [key: string]: CommonAttrs & any;
  }

  type FC<
    T extends keyof IntrinsicElements = "div",
    P extends ComponentProps = IntrinsicElements[T],
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
