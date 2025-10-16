import { JSX } from "..";

const SELF_CLOSING_LOOKUP = {
  area: true,
  base: true,
  br: true,
  col: true,
  embed: true,
  hr: true,
  img: true,
  input: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true,
  canvas: true,
};

function isSelfClosing(type: string): boolean {
  return SELF_CLOSING_LOOKUP[type] || false;
}

function renderAttrs(attrs: JSX.Element["props"]) {
  return Object.entries(attrs)
    .map(([key, value]) => {
      if (typeof value === "boolean") {
        return value ? ` ${key}` : "";
      }
      return ` ${key}="${value}"`;
    })
    .join("");
}

function renderChildren(children?: JSX.Element["props"]["children"]): string {
  if (!children) return "";

  if (typeof children === "string") {
    return children;
  }

  if (typeof children === "number") {
    return String(children);
  }

  if (Array.isArray(children)) {
    return children.map(renderChildren).join("");
  }

  return html(children);
}

function html(element: JSX.Element): string {
  const { type, props } = element;
  if (!type) return "";

  if (typeof type === "function") {
    return html(type(props));
  }

  if (typeof type === "string") {
    if (type === "Fragment") {
      return renderChildren(props.children);
    }

    const { children, ...attrs } = props;
    const renderedChildren = renderChildren(children);
    const renderedAttrs = renderAttrs(attrs);
    const doctype = type === "html" ? "<!DOCTYPE html>" : "";
    return isSelfClosing(type)
      ? `${doctype}<${type}${renderedAttrs} />`
      : `${doctype}<${type}${renderedAttrs}>${renderedChildren}</${type}>`;
  }

  console.error("Unknown element type:", type);
  return "";
}

export { html };
