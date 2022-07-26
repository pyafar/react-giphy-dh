import React from 'react'

const GiphyItem = ({giphy}) => {

  return (
    <article>
        <h6>{giphy.title}</h6>
        <img src={giphy.url} alt={giphy.title} />
    </article>
  )
}

export default GiphyItem