import 'react-tippy/dist/tippy.css'
import { Tooltip } from "react-tippy"
const Tip =() => {
    return(
        <div>

            <Tooltip 
             title="hi sumon"
             position="bottom"
             >
                <button className='bg-red-300 m-2 p-2 text-white border rounded-xl'>
                     Tootip react</button>
            </Tooltip>

        </div>
    )
}

export default Tip