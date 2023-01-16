import { useState } from "react";

function Detective(){

    const [sherlock,setSherlock] = useState('психопат')

    return(
        <div>
            Шерлок - {sherlock}
        </div>
    )
}

export default Detective