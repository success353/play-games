import React from 'react'

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
            <p>{data.publisher}</p>
        </div>
    )
}

export default id