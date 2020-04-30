import React from "react"
import Img from "gatsby-image"

import { UseImages } from "./images"

const Icon = () => {
  const { placeholderImage: {childImageSharp} } = UseImages()
  console.log(UseImages());

  return <Img fluid={childImageSharp.fluid} />
}

export default Icon
