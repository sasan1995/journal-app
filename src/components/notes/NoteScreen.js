import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className='notes__main-content'>
            <NotesAppBar />

            <div className='notes__content'>
                <input 
                    type='text'
                    placeholder='some title'
                    className='notes__title-input'
                    autoComplete='off'
                />

                <textarea placeholder='what happen today' className='notes__textarea'>

                </textarea>

                <div className='notes__image'>
                    <img src='https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/04/08/15863374252712.jpg'/>
                </div> 

            </div>
        </div>
    )
}
