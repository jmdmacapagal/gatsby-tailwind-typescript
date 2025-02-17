/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Header } from "./header"

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const headerLinks = [
    {
      linkTitle: "Home",
      linkPath: "/",
    },
    {
      linkTitle: "Portfolio",
      linkPath: "/portfolio",
    },
    {
      linkTitle: "Careers",
      linkPath: "/careers",
    },
    {
      linkTitle: "Contact Us",
      linkPath: "/contact-us",
    },
    {
      linkTitle: "About Us",
      linkPath: "/about-us",
    },
  ]

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} links={headerLinks} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
