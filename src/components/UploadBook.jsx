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
        uploadBook(data, {
            onSuccess: (res) => {
                toast.success(res.message)
                reset()
            },
            onError: (e) => toast.error(e.response.data.message),
        })
    }


    return (
        <form className='w-2/3 flex flex-col gap-2'
            onSubmit={handleSubmit(onSubmit)}
        >
            <caption className='text-3xl'>Upload Your New Book!</caption>
            <div className="flex flex-col gap-2">
                <label className='text-xl'>Book Name</label>
                <input type="text"
                    {...register("name")}
                    className='input max-w-none input-primary w-full' />
                {errors.name && <div className='text-error'>{errors.name.message}</div>}
            </div>
            <div className="flex flex-col gap-2">
                <label className='text-xl'>Author Name</label>
                <input type="text"
                    {...register("author")}
                    className='input max-w-none input-primary w-full' />
                {errors.author && <div className='text-error'>{errors.author.message}</div>}

            </div>
            <div className="flex flex-col gap-2">
                <label className='text-xl'>Release Year</label>
                <input type="text"
                    {...register("release")}
                    className='input max-w-none input-primary w-full' />
                {errors.release && <div className='text-error'>{errors.release.message}</div>}

            </div>
            <div className="flex flex-col gap-2">
                <label className='text-xl'>Price</label>
                <input type="text"
                    {...register("price")}
                    className='input max-w-none input-primary w-full' />
                {errors.price && <div className='text-error'>{errors.price.message}</div>}

            </div>
            <div className="flex flex-col gap-2">
                <label className='text-xl'>Image Url</label>
                <input type="text"
                    {...register("img")}
                    className='input max-w-none input-primary w-full' />
                {errors.img && <div className='text-error'>{errors.img.message}</div>}

            </div>
            <button type='submit' className="btn btn-primary mt-5">
                {
                    isPending ? "Loading..." : "Submit"
                }
            </button>
        </form>
    )
}

export default UploadBook