export const findByTestAttr = (component, attr) => {
  const wraper = component.find(`[data-test='${attr}']`);
  return wraper;
};
