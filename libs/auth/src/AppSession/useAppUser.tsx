import { useAppSession } from './useAppSession.js';

export const useAppUser = () => {
  const { session } = useAppSession();
  const user = session?.user;
  if (!user) return null;
  return {
    ...user,
    // @ts-ignore
    _id: user.id,
    isAdmin: user?.role === 'admin',
    // @ts-ignore
    title: user.name || user.email,
    // @ts-ignore
    avatar: user.avatar,
  };
};
