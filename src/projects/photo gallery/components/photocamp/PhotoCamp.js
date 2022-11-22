import React from 'react'

export default function PhotoCamp({photo}) {
  const { user, urls } = photo;
  return (
    <>
        <img className="img" src={urls.regular}  alt="photos"/>
        <a
          className="credit"
          target="_blank"
          rel="noreferrer"
          href={`https://unsplash.com/@${user.username}`}
        >
          Author: {user.name}
        </a>
    </>
  )
}
