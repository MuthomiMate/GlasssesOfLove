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
      workFirstImage: file(relativePath: { eq: "Dinner1.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 400, maxHeight: 270) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      workSecondImage: file(relativePath: { eq: "Imani1.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 400, maxHeight: 270) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      workThirdImage: file(relativePath: { eq: "Eldoret4.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 400, maxHeight: 270) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      muthomiImage: file(relativePath: { eq: "makena.jpeg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      koriImage: file(relativePath: { eq: "kori.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      lamechImage: file(relativePath: { eq: "lamech.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      kimaniImage: file(relativePath: { eq: "kimani.jpeg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      lilianImage: file(relativePath: { eq: "lilian.jpeg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      austinImage: file(relativePath: { eq: "austin.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      noImageGirl: file(relativePath: { eq: "girl.jpeg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      noImageBoy: file(relativePath: { eq: "boy.png" }) {
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
