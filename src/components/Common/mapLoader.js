import React from "react"
import ContentLoader from "react-content-loader"

const MapLoader = (props) => {
  return (
    <ContentLoader viewBox="0 0 100% 650" height={650} width={"100%"} {...props}>
      <rect x="0" y="0" rx="5" ry="5" width="40%" height="20" />
      <rect x="0" y="0" rx="5" ry="5" width="40%" height="20" />
      <rect x="0" y="42" rx="5" ry="5" width="100%" height="300" />
    </ContentLoader>
  )
}

MapLoader.metadata = {
  name: "Ashiru Olawale", // My name
  github: "walebant", // Github username
  description: "A responsive article loader that fits every screen 🎉", // Little tagline
  filename: "ResponsiveArticle" // filename of your loader
}

export default MapLoader