import React from 'react'
import { RingLoader } from 'react-spinners'
function Loader() {
    return (
        <div className='flex justify-center items-center'>
            <RingLoader
                color="#FF3131"
                size={150}
                speedMultiplier={1}
            />
        </div>
    )
}


export default Loader