import React from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { bookSchema } from '../util/bookSchema'
import { createBook } from '../apis/book'
import toast from 'react-hot-toast'

const UploadBook = () => {

    const { handleSubmit, formState: { errors }, register } = useForm({
        resolver: yupResolver(bookSchema)
    })

    const onSubmit = async (data) => {

        const { name, release, author, price } = data
        const response = await createBook({
            name,
            release,
            author,
            price: parseFloat(price)
        })

        if (response.isErr) {
            toast.error(response.message)
        } else {
            toast.success(response.message)

        }
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
                <button type='submit' className="btn btn-primary btn-lg mt-5">Add Book</button>
            </form>
        </div>
    )
}

export default UploadBook