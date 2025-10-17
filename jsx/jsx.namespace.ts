export declare namespace JSX {
  type LiteralElement = string | number;

  interface WithChildren {
    children: LiteralElement | LiteralElement[] | JSX.Element | JSX.Element[];
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

  type FC<
    T extends keyof IntrinsicElements,
    P extends ComponentProps = IntrinsicElements[T],
  > = (props: P & IntrinsicElements[T]) => JSX.Element;
}
