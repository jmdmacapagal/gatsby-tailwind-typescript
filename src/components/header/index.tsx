import React from "react"
import { Link } from "gatsby"

interface Props {
  links: Array<{ linkTitle: string; linkPath: string }>
  siteTitle: string
}

export const Header: React.FC<Props> = ({ links, siteTitle }) => {
  return (
    <header>
      <div>
        <Link to="/">{siteTitle}</Link>
      </div>

      <div>
        {links.map(({ linkTitle, linkPath }) => {
          return <Link to={linkPath}>{linkTitle}</Link>
        })}
      </div>
    </header>
  )
}
