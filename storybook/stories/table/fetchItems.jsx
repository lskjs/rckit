import './table.css';

import { faker } from '@faker-js/faker';
import { omitNull } from '@lsk4/algos';
import { delay } from 'fishbird';
import { useInfiniteQuery, useQuery } from 'react-query';

const itemCount = 100;

let _id = 1;
export function createRandomUser() {
  const sex = faker.person.sexType();
  const firstName = faker.person.firstName(sex);
  const lastName = faker.person.lastName();
  const email = faker.internet
    .email({
      firstName,
      lastName,
    })
    .toLowerCase();

  const birthdate = faker.date.birthdate();
  const age = Math.floor((new Date().getTime() - birthdate.getTime()) / 1000 / 60 / 60 / 24 / 365);

  return {
    id: _id++,
    avatar: faker.image.avatar(),
    birthdate: faker.date.birthdate(),
    email,
    firstName,
    lastName,
    age,
    gender: sex,
    subscription: faker.helpers.arrayElement(['free', 'basic', 'business']),
    createdAt: faker.date.past(),
  };
}
const totalItems = faker.helpers.multiple(createRandomUser, {
  count: itemCount,
});

const isMatchSearch = (item, search) =>
  Object.keys(item).some((key) =>
    String(item[key]).toLowerCase().includes(String(search).toLowerCase()),
  );
const isMatchFilter = (item, filter) =>
  Object.entries(filter).some(([key, value]) => item[key] === value);

function compare(value1, value2) {
  if (typeof value1 === 'string') return value1.localeCompare(value2);
  if (typeof value1 === 'number' || value1 instanceof Date) return +value1 - +value2;
  return 0;
}

let i = 0;
export async function fetchItems({ limit = 10, offset = 0, filter, search, sort = [] }) {
  // console.log('[fetchItems]', omitNull({ limit, offset, filter, search }));
  await delay(i++ * 100);
  let items = totalItems;
  if (filter) {
    items = items.filter((item) => isMatchFilter(item, filter));
  }
  if (search) {
    items = items.filter((item) => isMatchSearch(item, search));
  }
  const count = items.length;
  if (sort) {
    if (typeof sort === 'string') {
      const id = sort[0] === '-1' ? sort.slice(1) : sort;
      // eslint-disable-next-line no-param-reassign
      sort = [{ id, desc: sort[0] === '-1' }];
    }
    items = items.sort((item1, item2) => {
      // eslint-disable-next-line no-restricted-syntax
      for (const { id, desc } of sort) {
        const value1 = item1[id];
        const value2 = item2[id];
        const compareValue = compare(value1, value2);
        if (compareValue === 0) continue;
        return desc ? -compareValue : compareValue;
      }
      return 0;
    });
  }
  items = items.slice(offset, offset + limit);
  const res = {
    offset,
    limit,
    count,
    items,
    total: totalItems.length,
  };
  console.log('[fetchItems]', omitNull({ limit, offset, filter, search }), res);
  return res;
}

export function useItemIninityQuery(params) {
  return useInfiniteQuery({
    queryKey: ['items', params],
    queryFn(props) {
      const { pageParam } = props;
      const limit = params.limit || 10;
      const offset = pageParam || params.offset || 0;
      console.log('[queryFn]', params, props, { limit, offset });
      return fetchItems({ ...params, limit, offset });
    },
    getPreviousPageParam(firstPage) {
      const limit = firstPage.limit || params.limit || firstPage.items?.length || 10;
      const offset = firstPage.offset || 0;
      const newOffset = offset - limit;
      console.log('[getPreviousPageParam]', firstPage, { limit, offset, newOffset });
      if (firstPage.offset === 0) return undefined;
      return newOffset < 0 ? 0 : newOffset;
    },
    getNextPageParam(lastPage) {
      const count = lastPage.count || 0;
      const limit = lastPage.limit || params.limit || lastPage.items?.length || 10;
      const offset = lastPage.offset || 0;
      const newOffset = offset + limit;
      if (newOffset >= count) return undefined;
      console.log('[getNextPageParam]', lastPage, { limit, offset, newOffset });
      return newOffset || undefined;
    },
  });
}
export function useItemQuery(params) {
  return useQuery({
    queryKey: ['items', params],
    queryFn(props) {
      console.log('[queryFn]', props, params);
      return fetchItems(params);
    },
  });
}
