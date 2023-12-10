// NOTE: говно какое-то

export function flatPages(pages: any[]) {
  const res = pages.reduce(
    (acc, page) => [...acc, ...(page.data || []), ...(page.items || [])],
    [],
  );
  return res;
}
