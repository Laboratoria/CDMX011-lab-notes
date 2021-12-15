import React, {useState, Fragment} from 'react' 

const List = () => {
    
    const [arrayNum, setarrayNum] = useState([1,2,3,4,5])
    
    const addElement = () => {
        console.log('click')
        setarrayNum([
            ...arrayNum,
            6
        ])
    }
 
    return ( 
        <Fragment>
            <h2>Lista</h2>
            <button onClick={addElement}> Agregar </button>

            {
                arrayNum.map((item, index) =>
                  <p key={index} > {item} - {index}</p>
                )
            }
        </Fragment>
     );
}
 
export default List;
 