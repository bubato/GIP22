import React,{useEffect} from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line, RiFolderAddLine } from 'react-icons/ri';
import { RxUpdate } from 'react-icons/rx';
import { list, remove } from '../../apis/position';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ListPosition = ({ positionList, setPositionList }) => {
    const removePosition = async(id) => {
        // eslint-disable-next-line no-restricted-globals
        const notification = confirm("Bạn có muốn xóa Position này không")
        if(notification){
            await remove(id)
            getListPosition()
            const newPosition = positionList?.filter((position) => position._id !== id)
            setPositionList(newPosition)
            toast.success('Xóa chức vụ thành công', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
        }
    }
    const getListPosition = async () => {
        const res = await list();
        setPositionList(res.data)
    }
    useEffect(() => {
        getListPosition();
    }, []);
    return (
        <Wrapper>
            <div className="container">
                <div className="title">
                    <h1>Position</h1>
                    <Link to={`/position/add`}>
                        <button className="btn_add"> <RiFolderAddLine />   Create</button>
                    </Link>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Position_Name</th>
                            <th>Position_Lever</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {positionList?.map((item, index) => {
                            return (<tr key={item.id}>
                                <td>{++index}</td>
                                <td>{item?.name}</td>
                                <td>{item?.level}</td>
                                <td>
                                    <button className="btn_delete" onClick={() => removePosition(item?._id)}> <RiDeleteBin6Line />   Delete</button>
                                    <Link to={`/position/${item?._id}`}>
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