import React from 'react'
import PaginationControlled from './components/pagination/PaginationControlled'
import Search from './components/search/Search'
import Gallery from './components/gallery/Gallery'
import style from './galleryApp.module.scss'
import BackToBtn from './components/backToBtn/BackToBtn'
import PageInfo from './components/pageInfo/PageInfo'
import Filter from './components/select/Filter.js'


export default function GalleryApp() {
  return (
    <div className={style.gallery}>
        <header className={style.header}> 
          <div className={style.top}>
            <BackToBtn />
            <PageInfo />
          </div>
          <div className={style.bottom}>
            <Search />
            <Filter />
          </div>
        </header>
        <main className={style.main}>
          <Gallery />
        </main>
        <footer className={style.footer}>
          <PaginationControlled />
        </footer>
    </div>
  )
}
