import React from "react"
import "../Component/Todo.css"

export default class Todoapp extends React.Component {
    constructor()
    {
        super();
        this.state={
            textValue:"",
            todoList:[]
        }
    }

  render() {
    let{textValue,todoList}=this.state;

    let handleChange=(event)=>{
      console.log(event.target.value);
      this.setState({textValue:event.target.value})
    }
    let handleClick=()=>{
      this.setState({todoList:[...todoList,textValue]})
      this.setState()

    }
    console.log(todoList);
    let handleUpdate=(index)=>{
      let newValue=prompt("New Value");
      let updatedArr=todoList.map((el,i)=>{
        if(i==index)
        {
            return newValue;
        }
        else{
          return el;
        }
      })
      console.log(updatedArr)
      this.setState({todoList:updatedArr})
    }
    let handleDelete=(index)=>{
      
    let delete1=todoList.filter((el,i)=>i!==index)
    console.log(delete1)
    this.setState({todoList:delete1})
    }


    return (
      <>
       <div className="centered-container">
      <div className="addTodo">
      <input type="text" value={textValue} onChange={handleChange} placeholder="Enter" />
      <button onClick={handleClick}>Add</button>
      </div>
      <div>
        {todoList.map((el,i)=>
        <div key={i}>
            <p>{el}</p>
            <button onClick={()=>handleUpdate(i)}>Update</button>
            <button onClick={()=>handleDelete(i)}>Delete</button>

        </div>

        
        )}
      </div>
      </div>
  
      </>
    )
  }
}