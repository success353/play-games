import React from 'react'
import ThumbNail from './ThumbNail'

const renderGames = ({ results }) => {
    return (
        <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center font-body">
            {results.map((result) => {
                return (
                    <ThumbNail result={result} />
                )
            })}
        </div>
    )
}

export default renderGames
