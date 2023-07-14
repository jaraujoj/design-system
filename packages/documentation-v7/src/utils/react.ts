import { ReactElement } from 'react';

export function forEach<T = any>(
  iterable: T[] | {[key: string]: T},
  callback: (data: { key: string, value: T }) => ReactElement,
) {
  const input: {[key: string]: T} = Object.assign(iterable);

  return Object
    .entries(input)
    .map(([ key, value ]) => callback({ key, value }));
}
