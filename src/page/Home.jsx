import React from 'react'
import { useGetBooks } from '../react-query/book'
import Loading from '../components/Loading'

const Home = () => {

    const { data: books, isLoading } = useGetBooks()

    console.log(books)

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='grid grid-cols-12 gap-2'>
            {
                books.map((book) => {
                    return <div className="card overflow-hidden col-span-4 max-w-none bg-base-200" key={book.id}>
                        <img src={book.img} className="w-full h-[200px] bg-base-300 object-contain" alt="" />
                        <div className="card-body">
                            <div className="card-title text-xl">{book.name}</div>
                            <div className="text-lg">Author is {" "}
                                <span className='font-semibold'>{book.author}</span>
                            </div>
                            <button className='btn btn-link'>See more</button>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Home