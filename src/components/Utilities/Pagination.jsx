const Pagination = ({page , lastPage, setPage}) => {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handleNextPage = () => {
        
        setPage((prevState) => prevState + 1)
        scrollTop()
    }

    const handlePrevPage = () => {
        if(page == 1) return
        setPage((prevState) => prevState - 1)
        scrollTop()
    }

    return(
        <div className="flex py-4 px-2 justify-center items-center gap-4 text-color-primary">
            <button onClick={handlePrevPage} className="hover:text-color-accent transition-all" >Prev</button>
            <p>{page} of {lastPage}</p>
            <button onClick={handleNextPage} className="hover:text-color-accent transition-all" >Next</button>
        </div>
    )
}

export default Pagination