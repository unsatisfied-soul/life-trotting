import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import Swal from 'sweetalert2'
import './Experience.css'


const Experience = () => {
    const [title,setTitle] = useState('')
    const [writer,setWriter] = useState('');
    const [desc,setDesc] = useState('')
    const [date,setDate] = useState('')
    const [travelImage,settravelImage]=useState('https://i.ibb.co/9tgjVFZ/image.png')
    const handleSubmit = (e)=> {
        e.preventDefault()
        const travelData = new FormData()
        travelData.append('title', title);
        travelData.append('desc', desc);
        travelData.append('date', date);
        travelData.append('writer',writer)
        travelData.append('travelImage', travelImage)
        
        axios.post('https://nameless-brushlands-69236.herokuapp.com/experience', travelData)
        .then(res => {
            if(res.data.insertedId){
                Swal.fire({
                    position: 'middle',
                    icon: 'success',
                    title: 'Your Blog Submited successfully😍',
                    text: 'After few miniutes we are add your blog',
                    footer: 'Thank you for share your stories❤',
                    showConfirmButton: false,
                    timerProgressBar: true,
                    timer: 6000
                  })
                e.target.reset()
                settravelImage('https://i.ibb.co/9tgjVFZ/image.png')
            }
            
        })
        
    }

    const imagehandeler = (e) => {
        const reader = new FileReader()
        reader.onload = ()=> {
            if(reader.readyState === 2){
                settravelImage(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }
    return (
        <div className='experience py-20'>
            <div className="heading-experience w-9/12 mx-auto mb-16">
                <h2 className='text-5xl font-semibold mb-4'>Show US Your <span className="font-['Satisfy'] font-bold text-[#014eb3]">Trouble Experience</span> </h2>
                <p className="font-['Patrick_Hand'] text-2xl text-[#808080a6]">Travelling is one of the best ways to replenish your energy. It is also one of the best ways to leave behind a mundane, repetitive life.Visiting new places helps you realize that there is more to the world than what you have seen or experienced, and will ever be able to see in this short span of life.</p>
            </div>
            <div className="add-experience">
            <form className='packageform px-3 py-4' onSubmit={handleSubmit}>
            
                <div className="image-add py-4 mb-8">
                    <div className="img-holder rounded-lg">
                        <img className='rounded-lg' src={travelImage} id="img" alt="" />
                    </div>
                    <input type="file" name="image-upload"  id="image" accept="image/*" onChange={imagehandeler} required />
                    <div className="photo-alternate">
                        <label htmlFor="image" className='image-upload py-3 px-6 text-2xl font-semibold rounded-full cursor-pointer'>
                        <FontAwesomeIcon className='mr-2' icon={faCamera}>add photo alternate</FontAwesomeIcon> 
                         choose travel photo
                        </label>
                    </div>
                </div>
                <input id="title" type="text" onChange={e=> setTitle(e.target.value)} name="title" placeholder="Title" required/>
                <TextareaAutosize required className='textarea' onChange={e=> setDesc(e.target.value)} style={{boxSizing: 'border-box', width: '100%', background:'transparent', paddingBottom:'10px'}} minRows={1}  maxRows={8} defaultValue="Description..."></TextareaAutosize>
                <input id="name" type="text" onChange={e=> setWriter(e.target.value)} name="writer" placeholder="writer name" required/>
                <input id="date" type="date" onChange={e=> setDate(e.target.value)} name="date" placeholder='add' required/>
                <button className='btn btn-bg-circle py-2 px-8 text-2xl font-semibold' type="submit" title="Submit form">Add Experience</button>
            </form>
            </div>
        </div>
    );
};

export default Experience;