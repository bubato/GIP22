import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import {list, remove} from '../../apis/doc'


import { AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai';






function Listdocs() {
    // const {id} = useParams();

    const [data, setData] = useState([]);
    const getData = async()=>{
        const res = await list();
        setData(res?.data)
    }
    // console.log(data);

    useEffect(()=>{
        getData();
    },[])
   

    const removeListDocs = async(id) =>{
        await remove(id)
        const arrList = data.filter(item => item._id !== id); 
        setData(arrList)
    }
    return ( 
    <Wrapper>
        
        <Link to={`/docs/add`} className='add-btn'>
            Add new doc
        </Link>
        

        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Link</th>
                    <th >Owner</th>
                    <th>Thumbnail Link</th>
                    <th >Type</th>
                   
                </tr>
            </thead>
            <tbody>
                {
                    data?.map((item,index)=>{
                        return(<tr key={item?.id}>
                            <td>{index+1}</td>
                            <td>{item?.name}</td>
                            <td>{item?.link}</td>
                            <td>{item?.owner}</td>
                            <td>{item?.thumbnailLink}</td>
                            <td>{item?.type}</td>


                            <button onClick={()=>removeListDocs(item?._id)}><AiOutlineDelete /></button>
                            <Link to={`/docs/${item?._id}`}>
                                <button className='btn_update'><AiOutlineEdit/></button>
                            </Link>
                        </tr>)
                    })
                }
                
            </tbody>
        </table>
    </Wrapper> 

    );
}
const Wrapper = styled.div`
display: flex;
justify-content: center;
min-width: 100%;
    table{
        margin-top: 50px;
        border: 1px solid #000;
        min-width:80%;
    }
    .add-btn{
        padding: 10px;
        margin: 10px;
        max-height: 50px;
        background-color: #435ebe;
        border-radius:10px;
        color: #fff;
    }
    button{
        margin: 0 10px;
        padding: 5px ;
        background-color: #435ebe;
        color: #fff;
        border: none;
        border-radius:2px;
        cursor: pointer;
    }
  
`


export default Listdocs;