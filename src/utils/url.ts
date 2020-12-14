import * as url from 'url';

export const getUrlQuery = (
  urlPath: string,
  key?: string,
): string | Record<string, unknown> => {
  const query = url.parse(urlPath, true).query;
  if (key) {
    return query[key] as string | Record<string, unknown>;
  } else {
    return query;
  }
};
