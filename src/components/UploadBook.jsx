import React from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { bookSchema } from '../util/bookSchema'
import toast from 'react-hot-toast'
import { useCreateBook } from '../react-query/book'

const UploadBook = () => {

    const { handleSubmit, formState: { errors }, register, reset } = useForm({
        resolver: yupResolver(bookSchema)
    })

    const { mutate: uploadBook, isPending } = useCreateBook()

    const onSubmit = (data) => {
        uploadBook(data)
    }


    return (
        <div className="grid-cols-12 grid mt-10">
            <form className=' col-span-4 col-start-5 flex flex-col gap-2'
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="flex flex-col gap-2">
                    <label className='text-xl'>Book Name</label>
                    <input type="text"
                        {...register("name")}
                        className='input input-primary input-lg w-full' />
                    {errors.name && <div className='text-error'>{errors.name.message}</div>}
                </div>
                <div className="flex flex-col gap-2">
                    <label className='text-xl'>Author Name</label>
                    <input type="text"
                        {...register("author")}
                        className='input input-primary input-lg w-full' />
                    {errors.author && <div className='text-error'>{errors.author.message}</div>}

                </div>
                <div className="flex flex-col gap-2">
                    <label className='text-xl'>Release Year</label>
                    <input type="text"
                        {...register("release")}
                        className='input input-primary input-lg w-full' />
                    {errors.release && <div className='text-error'>{errors.release.message}</div>}

                </div>
                <div className="flex flex-col gap-2">
                    <label className='text-xl'>Price</label>
                    <input type="text"
                        {...register("price")}
                        className='input input-primary input-lg w-full' />
                    {errors.price && <div className='text-error'>{errors.price.message}</div>}

                </div>
                <button type='submit' className="btn btn-primary btn-lg mt-5">
                    {
                        isPending ? "Loading..." : "Submit"
                    }
                </button>
            </form>
        </div>
    )
}

export default UploadBook