import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line, RiFolderAddLine } from 'react-icons/ri';
import { RxUpdate } from 'react-icons/rx';
const ListPosition = ({positionList, setPositionList}) => {
    const removePosition = (id) => {
        const newPosition = positionList?.filter((position) => position.id !== id)
        setPositionList(newPosition)
    }
    return (
        <Wrapper>
            <div className="container">
                <div className="title">
                    <h1>Position</h1>
                    <Link to={`/positions/add`}>
                        <button className="btn_add"> <RiFolderAddLine />   Create</button>
                    </Link>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Position_Name</th>
                            <th>Position_Lever</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {positionList?.map((item) => {
                            return (<tr key={item.id}>
                                <td>{item?.id}</td>
                                <td>{item?.position}</td>
                                <td>{item?.lever}</td>
                                <td>
                                    <button className="btn_delete" onClick={() => removePosition(item?.id)}> <RiDeleteBin6Line />   Delete</button>
                                    <Link to={`/positions/${item?.id}`}>
                                        <button className="btn_update"> <RxUpdate /> Update</button>
                                    </Link>
                                </td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </Wrapper>
    );
}
const Wrapper = styled.div`
.container{
    width:100%;
    margin:2rem;
}
.title{
    margin: 2rem;
    display: flex;
    justify-content: space-between;
}
.btn_add{
    margin-right: 2rem;
}
table{
    border:1px solid black;
    width:100%;
},
tbody td{
    margin: 0 auto;
    border:1px solid black;
}
.btn_delete{
    margin-right:2rem;
}
`;
export default ListPosition