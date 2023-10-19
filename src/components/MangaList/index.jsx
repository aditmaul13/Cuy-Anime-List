import Image from "next/image"
import Link from "next/link"

const MangaList = ({api}) => {
    

    return (
        <div className="grid md:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-4 px-4">
            {api.data.map((manga, index) => {
             return(
                 <Link href={`/${manga.mal_id}`} className="cursor-pointer text-color-primary hover:text-color-accent transition-all" key={index}>
                    <Image src={manga.images.webp.image_url} width={350} height={350} alt="" className="w-full max-w-64 object-cover"/>
                    <h3 className="font-bold md:text-xl text-md p-4">{manga.title}</h3>
                </Link>
                  )
              })}
        </div>
    )

}

export default MangaList