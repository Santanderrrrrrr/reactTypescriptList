import React, { useState } from 'react'
import { IState as Props } from '../App'


interface Properties extends Props{
    setPersons: React.Dispatch<React.SetStateAction<Props["persons"]>>;
}

interface InputType{
    input: {
        name: string
        age: number | undefined
        url: string
        note?: string
    }
}

const AddToList: React.FC<Properties> = ({persons, setPersons}) => {
    const [theInput, setTheInput] = useState<InputType["input"]>({
        name: "",
        age: undefined,
        url: "",
        note: ""    
    })

    const handleChange=(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void => {
        setTheInput({
            ...theInput,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit =(): void =>{
        if (theInput.name && theInput.age && theInput.url  ) {
            setPersons([
                ...persons,
                {
                    name: theInput.name,
                    age: theInput.age,
                    url: theInput.url,
                    note:theInput.note
                }
            ])
            setTheInput({
                name: "",
                age: undefined,
                url: "",
                note:""
            })
            
        }else {alert("Fill out the necessary fields!")}
    
    }

  return (
    <div className="AddToList">
        <input type="text" placeholder="Name" className="AddToList-input" value={theInput.name} name="name" onChange={handleChange}></input>
        <input type="text" placeholder="Age" className="AddToList-input" value={theInput.age} name="age" onChange={handleChange}></input>
        <input type="text" placeholder="Img URL" className="AddToList-input" value={theInput.url} name="url" onChange={handleChange}></input>
        <textarea placeholder="Notes" className="AddToList-input" value={theInput.note} name="note" onChange={handleChange}></textarea>
        <button className="AddToList-btn" onClick={handleSubmit}>Add to List</button>
    </div>
  )
}

export default AddToList