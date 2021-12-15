import React, {useState, useEffect} from 'react'
import './Styles/Notes.css';
import { Link } from "react-router-dom";

import logo from'../Assets/logo.png';
import addImg from'../Assets/add.png';
import { db } from '../Secrets';

 const Note = (props) => {
   
    const initialState = {
        title:'',
        description:'',
        date:''
    };
    
    const [notes, setNotes] = useState(initialState)

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setNotes({...notes, [name]:value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.addNote(notes);
        setNotes({...initialState})
    }

    const getNoteById = async (id) => {
      const doc = await db.collection('notes').doc(id).get();
      setNotes({...doc.data()})
    }
    useEffect(() => {
      if (props.currentId === '') {
        setNotes({...initialState});
      } else {
        getNoteById(props.currentId);
      }
    }, [props.currentId]);

      return (
        <>
         <div className='containerNotes'>
          <header>
            <Link to="/mynotes">
              <img src= {logo} alt='logo' className='imgLogo'/>
            </Link>
            <Link to="/"> 
              <button className='btnLogOut'> Cerrar sesión </button>
            </Link>
          </header>
          <nav>
            {/* <div id='welcomeUser'></div> */}
              <img src= {addImg} alt='logo' className='addIcon' />
          </nav>
          <form className='modal'onSubmit={handleSubmit} >
         
          
            <input type="text" classname='input-title'placeholder="Title" onChange={handleInputChange}name='title'value={notes.title} ></input>
            <textarea type="text" classname='input-description' placeholder="Description" onChange={handleInputChange} name='description' value={notes.description}></textarea>
            <button> {props.currentId === '' ? 'Save' : 'Update'} </button>
         
    
        </form>
          
          
        </div>
        
        </>
      )
}


export default Note;
