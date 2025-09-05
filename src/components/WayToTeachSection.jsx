import {haha} from './infoWay.js'
import WayToTeach from './WayToTeach.jsx'

export default function WayToTeachSection(){
    return(
        <section>
            <h6>how we learn</h6>
            <ul>
                {haha.map((way) =>(<WayToTeach key={way.title} {...way}/>))}
            </ul>
        </section>
    );
}