import React from 'react'
import PaginationControlled from './components/pagination/PaginationControlled'
import Search from './components/search/Search'
import Gallery from './components/gallery/Gallery'
import style from './galleryApp.module.scss'
import BackToBtn from './components/backToBtn/BackToBtn'
import Filter from './components/select/Filter.js'
import FilterBtns from './components/select/FilterBtns'

export default function GalleryApp() {
  return (
    <div className={style.gallery}>
        <header className={style.header}> 
          <div className={style.top}>
            <BackToBtn />
            <Search />
            <FilterBtns />
            <Filter />
          </div>
          <div className={style.bottom}>
            <PaginationControlled />
          </div>
        </header>
        <main className={style.main}>
          <Gallery />
        </main>
    </div>
  )
}
