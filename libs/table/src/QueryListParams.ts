import { pickBy } from '@lsk4/algos';

export type QueryListSort1Param = {
  id: string;
  desc: boolean;
};
export type QueryListSortParam =
  | string
  | string[]
  | Record<string, boolean | -1 | 1>
  | QueryListSort1Param[];

// eslint-disable-next-line @typescript-eslint/ban-types
export interface QueryListParams<T = {}> {
  limit?: number;
  offset?: number;
  filter?: T;
  search?: string;
  sort?: QueryListSortParam;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export interface QueryListResponse<T = {}> {
  items: T[];
  count: number;
  total: number;
}

const isEmpty = (value: any) => !!value;
export const omitEmpty = <T>(object: T) => pickBy(object as any, isEmpty) as Partial<T>;

export const normalizeSortKey = (sort: string | QueryListSort1Param): QueryListSort1Param => {
  if (typeof sort === 'string') {
    if (sort.startsWith('-')) return { id: sort.slice(1), desc: true };
    return { id: sort.slice(1), desc: false };
  }
  return sort;
};
export const packSortKey = (sort: QueryListSort1Param): string => {
  if (sort.desc) return `-${sort.id}`;
  return sort.id;
};

export const normalizeSortParam = (sort?: QueryListSortParam): QueryListSort1Param[] => {
  if (typeof sort === 'string') return [normalizeSortKey(sort)];
  if (Array.isArray(sort)) return sort.map(normalizeSortKey);
  if (typeof sort === 'object') {
    return Object.entries(sort).map(([id, desc]) => ({
      id,
      desc: desc === -1 || desc === false,
    }));
  }
  return [];
};

export const packSortParam = (sort?: QueryListSortParam): QueryListSortParam => {
  const normilized = normalizeSortParam(sort);
  const packed = normilized.map(packSortKey);
  if (packed.length === 0) return '';
  if (packed.length === 1) return packed[0];
  return packed;
};
