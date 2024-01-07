type Page<T> = {
  items: T[];
};
type Book<T> = {
  pages: Page<T>[];
};

export function extractItems<T>(pageOrBook: Book<T> | Page<T>): T[] {
  const pages = 'pages' in pageOrBook ? pageOrBook.pages : [pageOrBook];
  return pages.map((page) => page.items || []).flat();
}
