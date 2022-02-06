import React from 'react';



// @ts-ignore
const Car = ({ children, color }) => {

    const colorInfo = color ? <div>Couleur : {color} </div> : <div>Couleur : / </div>;
    const marqueInfo = children ? <div>Marque : {children}</div> : <div>Couleur : / </div>;

    return(
        <>
            <div style={{backgroundColor: 'pink', width:'250px', padding:'10px', margin:'5px auto', border: '1px solid', borderRadius: '5px'}}>
                {marqueInfo}
                {colorInfo}
            </div>
        </>
    )



}

export default Car;