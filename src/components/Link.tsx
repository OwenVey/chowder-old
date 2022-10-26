import { default as NextLink, LinkProps as NextLinkProps } from 'next/link';
import React, { forwardRef } from 'react';

export interface Props
  extends Omit<NextLinkProps, 'onMouseEnter' | 'onClick' | 'onTouchStart'>,
    Omit<React.ComponentPropsWithoutRef<'a'>, 'href' | 'as'> {}

const Link = forwardRef<HTMLAnchorElement, Props>(function Link(props, ref) {
  const {
    href,
    as,
    replace,
    scroll,
    shallow,
    passHref,
    prefetch,
    locale,
    legacyBehavior,
    ...otherProps
  } = props;

  return (
    <NextLink
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
      prefetch={prefetch}
      locale={locale}
      legacyBehavior={legacyBehavior}
    >
      <a {...otherProps} ref={ref}>
        {props.children}
      </a>
    </NextLink>
  );
});

export default Link;
