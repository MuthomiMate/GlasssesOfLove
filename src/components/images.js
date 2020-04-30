import { useStaticQuery, graphql } from "gatsby"

export const UseImages = () => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      icon: file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `)
  console.log(data.icon)
  return data
}
