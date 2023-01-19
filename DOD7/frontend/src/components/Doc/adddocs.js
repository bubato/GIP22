import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { create } from '../../apis/doc';

function Adddocs() {
    const navigate = useNavigate()
    const [doc, setDoc] = useState({name:'',link:'', owner:'' ,thumbnailLink:'' ,type:'' });
    const handleSubmit = async(e)=>{       
        e.preventDefault();
        await create(doc)
        navigate('/docs')
    }
    
    return (
        <div>
            <div className="container">
                <form>
                    <label className='label_info'>Name</label>
                    <br/>
                    <input className='input_info' onChange={(e) => setDoc({...doc, name:e.target.value})}/>
                    <br/>
                    <label className='label_info'>Link</label>
                    <br/>
                    <input className='input_info' onChange={(e) => setDoc({...doc, link:e.target.value})}/>
                    <br/>
                    <label className='label_info'>Owner</label>
                    <br/>
                    <input className='input_info' onChange={(e) => setDoc({...doc, owner:e.target.value})}/>
                    <br/>
                    
                    <label className='label_info'>Thumbnail Link</label>
                    <br/>
                    <input className='input_info' onChange={(e) => setDoc({...doc, thumbnailLink:e.target.value})}/>
                    <br/>
                    <label className='label_info'>Type</label>
                    <br/>
                    <input type='number' className='input_info' onChange={(e) => setDoc({...doc, type:e.target.value})}/>
                    <br/>
                    <button className='btn_add' onClick={handleSubmit}> Create</button>
                </form>
            </div>
        </div>
    )
}

export default Adddocs;