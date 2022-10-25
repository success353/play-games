import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ThumbNail = ({ result }) => {
    return (
        <div
            key={result.id}
            className='p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'>
            <Link href={`/${result.id}`}>
                <Image
                    src={result.thumbnail}
                    layout="responsive"
                    height={1080}
                    width={1920}
                    alt=''
                />
            </Link>
            <div className='p-2'>
                <h2 className='mt-1 text-2xl transition-all duration-100 ease-in-out group-hover:font-bold'>{result.title}</h2>
            </div>
        </div>
    )
}

export default ThumbNail