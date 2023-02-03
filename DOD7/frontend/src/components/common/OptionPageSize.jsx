import React from 'react'

const OptionPageSize = ({setPageSize,pageSize,              setPage
}) => {
    const onChange =(e) =>{
        setPageSize(e.target.value)
        setPage(1)
    }
    const option = [5,10,20,50,100];

    return (
        <div>
            <select className="option_size" onChange={(e) => onChange(e)} >
                {option.map((item,index) => {
                    console.log(item === pageSize, item,pageSize)
                    return (
                        <option key={index} value={item} selected={item === pageSize*1 ? true :""} >{item}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default OptionPageSize