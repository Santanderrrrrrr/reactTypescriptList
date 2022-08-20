import React from 'react'
import { IState as PropsInterface} from '../App'

//Below is where we define the type to be used to define either the component or the props being handed to the component
interface PropsInterfaceTwo extends PropsInterface {
    
    people: {
        name: string,
        age: number, 
        url: string, 
        note?: string
    }[]
  }

//Another solution is to import the inteface from the component passing the prop as props as done with the import

//In the app component, there were two props passed down:
    //the people and persons useState pieces of state.
//It's imperative that the two pieces of state have their types defined and then attributed to them as follows:
            // const List = (props: PropsInterface) => { 
                // return (
                //     <div>List</div>
            //      )
            // }
//The above can also be achieved in the following manner thus allowing us to complete a destructure of the props while simultaneously defining the types.
            // const List = ({persons, people}: PropsInterface) => { 
            //      return (
            //          <div>List</div>
            //      )
            // }
//The best way to do the above would be to define the "List" function as a react function component taking our interface as its parameter type.
//This takes advantage of typescripts ability to give functions types.
//This can be done as shown below:
const List: React.FC<PropsInterfaceTwo> = ({persons, people}) => { 
    const renderList = (): JSX.Element[] =>{
        return (
            persons.map((guy, index)=>(
                <>
                    <li className="List" key={index}>
                        <div className="List-header">
                            <img className="List-img" src={guy.url} alt="random-headshot" /> 
                            <h2>{guy.name}</h2>
                        </div>
                        <p>{guy.age} years old</p>
                        <p className="List-note">{guy.note}</p>
                    </li>
                </>
            ))           
        )
    }
    return (
        <ul>
            {renderList()}
        </ul>
    )
}

export default List