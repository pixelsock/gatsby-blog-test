import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import headerStyles from '../styles/header.module.scss'

const Header = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata{
        title
      }
    }
  }
  `)
  return (
    <header className={headerStyles.header}>
    <nav>
      <h1>
        <Link className={headerStyles.title} to ="/">{data.site.siteMetadata.title}</Link></h1>
      <ul className={headerStyles.navList}>
        <li className={headerStyles.navItem}>
          <Link activeClassName={headerStyles.activeItemState} className={headerStyles.link} to="/">Home </Link>
        </li>
        <li className={headerStyles.navItem}>
          <Link activeClassName={headerStyles.activeItemState} className={headerStyles.link} to="/about">About </Link>
        </li>
        <li className={headerStyles.navItem}>
          <Link activeClassName={headerStyles.activeItemState} className={headerStyles.link} to="/blog">Blog </Link>
          </li>
      <li className={headerStyles.navItem}>
      <Link activeClassName={headerStyles.activeItemState} className={headerStyles.link} to="/contact">Contact </Link>
      </li>
      </ul>
      </nav>
    </header>
  )

}

export default Header
