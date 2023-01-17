import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

import { BiAddToQueue } from 'react-icons/bi';
import { AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai';
import { GrDocumentUpdate } from 'react-icons/gr';





function Listdocs({listDocs, setListDocs}) {
   

    const removeListDocs = (id) =>{
        const newDocs = listDocs?.filter((docs)=>docs.id !== id)
        setListDocs(newDocs)
    }
    return ( 
    <Wrapper>
        <div className='add-btn'>
            <Link to={`/docs/add`}>
              Add new doc
            </Link>
        </div>

        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Tác giả</th>
                    <th >Ngày phát hành</th>
                   
                </tr>
            </thead>
            <tbody>
                {
                    listDocs?.map((item,index)=>{
                        return(<tr key={item?.id}>
                            <td>{index+1}</td>
                            <td>{item?.name}</td>
                            <td>{item?.author}</td>
                            <td>{item?.releaseDay}</td>
                            <button onClick={()=>removeListDocs(item.id)}><AiOutlineDelete /></button>
                            <Link to={`/docs/${item?.id}`}>
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