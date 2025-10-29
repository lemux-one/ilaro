export function useClass<T extends { class?: string } = object>(
  props: T,
  defaultClass = "",
): [pClass: string, Omit<T, "class">] {
  const pClass = props.class ?? defaultClass;
  delete props.class;
  return [pClass, props];
}
