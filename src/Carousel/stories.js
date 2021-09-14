import React from 'react'
import Carousel from './'

export default {
  title: 'Carousel',
  component: Carousel,
}

export const Base = () => 
  <Carousel>
    <p
      dangerouslySetInnerHTML={{ __html: '💡 <strong>Pro tip:</strong> A no follow link is a link that does not count as a point in the page’s favor, does not boost PageRank, and doesn’t help a page’s placement in the SERPs. No follow links get no love. Theirs is a sad and lonely life.' }}
      className="ola-body"
    />
    <p
      dangerouslySetInnerHTML={{ __html: '💡 <strong>Pro tip 2:</strong> A no follow link is a link that does not count as a point in the page’s favor, does not boost PageRank, and doesn’t help a page’s placement in the SERPs. No follow links get no love. Theirs is a sad and lonely life.' }}
      className="ola-body"
    />
  </Carousel>
