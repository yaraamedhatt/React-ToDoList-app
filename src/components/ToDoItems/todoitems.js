import React from "react";
import './todoitems.css'
const ToDoItems=(props)=>{
    let {items, deleteItem}=props
    let length=items.length
    let listItems= length ? (items.map((item)=>{
        return(
            <div key={item.id}>
                <span className="name">{item.name}</span>
                <span className="age">{item.age}</span>
                <span className="action icon" onClick={() => {deleteItem(item.id)}}>&times;</span>
            </div>
        )
    })) : (<p>There is no items to show here</p>)
    return(
        <div className="ListItems">
           <div>
            <span className="name title">Name</span>
            <span className="age title">Age</span>
            <span className="action title">Action</span>
           </div>
            {listItems}
        </div>
    )
}
export default ToDoItems