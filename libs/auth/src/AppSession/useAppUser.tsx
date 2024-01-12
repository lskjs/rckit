import { useAppSession } from './useAppSession.js';

export const useAppUser = () => {
  const { session } = useAppSession();
  const user = session?.user;
  if (!user) return null;

  // @ts-ignore
  const _id = user.id;
  const isAdmin = user.role === 'admin';
  // @ts-ignore
  const title = user.name || user.email;
  // @ts-ignore
  const { avatar } = user;
  return {
    ...user,
    _id,
    isAdmin,
    title,
    avatar,
  };
};
