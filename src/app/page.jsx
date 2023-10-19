import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"
import MangaList from "@/components/MangaList"
import HeaderManga from "@/components/MangaList/HeaderManga"


export default async function Page() {

  const responseAnime = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`)
  const topAnime = await responseAnime.json()
  


  return (
    <>
    <section>
      <Header title="Paling Populer" linkHref="/populer" linkTitle="Lihat Semua" />
      <AnimeList api = {topAnime}/>
   </section>
   <section>
      <HeaderManga title="Paling Populer" linkHref="/manga" linkTitle="Lihat Semua" />
      {/* <MangaList api={topManga}/> */}
   </section>
   </>
  )
}


