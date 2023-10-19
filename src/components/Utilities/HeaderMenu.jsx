import Link from "next/link"

const HeaderMenu = ({title}) => {
    return(
         <div className="flex p-6 justify-between items-center">
            <h3 className="text-2xl text-color-primary">{title}</h3>
            <Link href="/" className="md:text-2xl text-lg  text-color-primary underline hover:text-color-accent transition-all">Kembali</Link>
        </div>
    )
}

export default HeaderMenu