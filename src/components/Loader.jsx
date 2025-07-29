import React from 'react'
import { ThreeCircles } from 'react-loader-spinner'

function Loader() {
    return (
        <div className='flex justify-center items-center'>
            <ThreeCircles
                visible={true}
                height="200"
                width="200"
                color="#ff2301"
                ariaLabel="three-circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}

export default Loader