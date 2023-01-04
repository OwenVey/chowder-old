import type { NextRouter } from 'next/router';

export const isActiveLink = (router: NextRouter, href: string) => {
  if (router.pathname === href) return true;

  const segments = router.asPath.substring(1).split('/');

  return segments.length > 1 ? segments.includes(href.substring(1)) : false;
};

export const isActiveLinkNew = (pathname: string | null, href: string) => {
  if (!pathname) return false;
  if (pathname === href) return true;

  const segments = pathname.substring(1).split('/');

  return segments.length > 1 ? segments.includes(href.substring(1)) : false;
};
