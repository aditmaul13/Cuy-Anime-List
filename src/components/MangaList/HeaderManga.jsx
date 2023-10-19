import Link from "next/link";

const HeaderManga = ({title, linkHref, linkTitle}) => {
    return(
        <div className="flex justify-between p-4 items-center text-color-primary">
            <h1 className="text-xl font-bold">{title}</h1>
            {linkHref && linkTitle ?
            <Link href={linkHref} className="md:text-xl text-sm underline hover:text-color-accent text-color-primary transition-all">{linkTitle}</Link>
            : null
            }
        </div>
      )
  }


export default HeaderManga