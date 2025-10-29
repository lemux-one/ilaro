const CSS_REPLACE_REGEX = /:root/g;
let cssCache: Record<string, string> = {};

function useCss(name: string, cssRaw: string) {
  const key = `${name}-${Bun.hash.crc32(cssRaw).toString(36)}`;
  cssCache[key] = cssRaw.replace(CSS_REPLACE_REGEX, `.${key}`).trim();
  return key;
}

function renderCss(reset = false) {
  const result = Object.values(cssCache).join("\n");
  if (reset) cssCache = {};
  return result;
}

export { useCss, renderCss };
