import React, {useEffect, useState} from 'react'
import './Styles/Container.css';
import Note from './Note'
import deleteBtn from '../Assets/delete.png'
import editBtn from '../Assets/edit.png'

import { db }  from '../Secrets'

const Container = () => {

  const [note, setNote]= useState([]);
  const [currentId, setCurrentId] = useState("");
  
  const addNote = async (noteObj) => {
    try {
      if (currentId === '') {
        await db.collection('notes').doc().set(noteObj);
      } else {
       await db.collection('notes').doc(currentId).update(noteObj);
       console.log('Note update successfully')
      }
      setCurrentId('');
      
    } catch (error) {
      console.error(error)
    }
  }
 useEffect(() =>{
   getNotes();
 }, []);

 const deleteNotes = id =>{
  if (window.confirm('are you sure you want to delete this note?')) {
    db.collection('notes').doc(id).delete();
  }
  
} 
  
 const getNotes = async () => {
    db.collection('notes').onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
      docs.push({...doc.data(), id:doc.id});
    });
    setNote(docs)
   });
}
 
  
  return (
    <>
    
      <div className='main'>
        <Note{...{addNote, currentId, note}} />
        <div className='container-notes'>
          {note.map(note => (
        
        <blockquote key={note.id}>
          <div className='note-post'>
            <h3>{note.title}</h3>
            <p> {note.description} </p>
              <div className='note-btns'>
                <img src= {editBtn} alt="edit" className="edit-btn" onClick={() => setCurrentId(note.id)} />
                <img src= {deleteBtn} alt="delete" className="delete-btn" onClick={() => deleteNotes(note.id)}/>
              </div>
          </div>
        </blockquote>
    
      ))}
        </div>
      </div>
   
    </>
  )
}

export default Container;