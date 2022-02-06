import React from 'react';
import Car from "./Cars";

const Mycars = (props:any) => {
    console.log(props);

    const noCopy = () => {
        alert('Ne copiez pas ce texte !');
    }

    return(

        <div className="CarsClass">
            <h1>{props.title}</h1>
            <p onCopy={noCopy}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at doloribus id iste laborum natus
                nobis pariatur similique vel voluptatibus!</p>
            <Car color="red">Ford</Car><br />
            <Car color="grey">Peugeot</Car><br />
            <Car color="black">Ferrari</Car><br />
        </div>

    )

}

export default Mycars;