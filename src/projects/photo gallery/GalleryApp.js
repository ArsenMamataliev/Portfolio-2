import React from 'react'
import Gallery from './components/gallery/Gallery'
import Header from './components/header/Header'
import PaginationControlled from './components/pagination/PaginationControlled'
import Search from './components/search/Search'
import style from './galleryApp.module.scss'

export default function GalleryApp() {
  return (
    <div className={style.gallery}>
        <Search />
        <Header />
        <Gallery />
        <PaginationControlled />
    </div>
  )
}
