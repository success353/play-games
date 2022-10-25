import React from 'react'
import Image from 'next/image'

export const getStaticPaths = async () => {
    const res = await fetch('https://www.freetogame.com/api/games')
    const data = await res.json()

    const paths = data.map(path => {
        return {
            params: {
                id: path.id.toString()
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const id = params.id
    const res = await fetch(`https://www.freetogame.com/api/game?id=${id}`)
    const data = await res.json()

    return {
        props: {
            data
        }
    }
}

const id = ({ data }) => {
    return (
        <div>
            <h1 className='text-2xl'>{data.title}</h1>
            <Image src={data.thumbnail} layout='responsive' width={50} height={20} alt='' />
            <p>{data.publisher}</p>
            <p>{data.genre}</p>
            <h3>About this game</h3>
            <p>{data.short_description}</p>
        </div>
    )
}

export default id