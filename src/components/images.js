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
      workFirstImage: file(relativePath: { eq: "clean.jpeg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      workSecondImage: file(relativePath: { eq: "fun.jpeg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      workThirdImage: file(relativePath: { eq: "cooking.jpeg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      muthomiImage: file(relativePath: { eq: "pp.jpeg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `)
  return data
}
