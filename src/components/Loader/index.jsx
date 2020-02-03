import React from 'react'

import loadingGif from '../../loading.gif';

const Loader = ({width,height}) =>((
    <div className="text-center">
         <img src={loadingGif} alt="loading" width={width?width:"40px"} height={height?height:"42px"} className="img"/>
    </div>
))
export default Loader