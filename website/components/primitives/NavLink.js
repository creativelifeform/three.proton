import { shape, string } from 'prop-types';

import NextLink from 'next/link';
import React from 'react';
import { withRouter } from 'next/router';

const Link = ({ href, name, router: { pathname }, url = null }) => {
  if (url) {
    return <a href={url}>{name}</a>;
  }

  let route = pathname;

  if (pathname.includes('[')) {
    route = `/${pathname.split('/')[1]}`;
  }

  return (
    <NextLink href={href}>
      <a className={href === route ? 'active' : ''} href={href}>
        {name}
      </a>
    </NextLink>
  );
};

Link.propTypes = {
  href: string,
  name: string.isRequired,
  router: shape({
    pathname: string,
  }),
  url: string,
};

export const NavLink = withRouter(Link);
