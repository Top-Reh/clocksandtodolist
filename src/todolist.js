import React, { useEffect, useState } from 'react'

const Todolist = () => {
    const [datatodo,setDataToDo] = useState(
      JSON.parse(localStorage.getItem('item')) || ['to clean','to wash']
    );

    const [clickmark,setClickMark] = useState([]);
    const [addonelocal,setAddOneLocal] = useState(false);
    const [newlocalitem,setNewLocalItem] = useState('')

    const handleDelete = (index) => {
      const updatetodo = datatodo.filter((_,i) => i !== index);
        setDataToDo(updatetodo);
    };

    const handleMark = (index) => {
      setClickMark((pre) => 
        pre.includes(index) ? pre.filter((i) => i !== index) : [...pre,index]
      )
    };

    const handleadditem = () => {
      setAddOneLocal(false);
      setDataToDo((pre) => [...pre,newlocalitem]);
      setNewLocalItem('')
    }

    const newlocal = () => {
      if (addonelocal) {
        return (
          <div className='onetodo'>
            <input className='inputtodo' placeholder='What will you do next?' value={newlocalitem} onChange={e => setNewLocalItem(e.target.value)}></input>
            <i className="bi bi-plus-circle plusicon" onClick={() => handleadditem()}></i>
          </div>
        )
      }
    }

    useEffect(()=> {
      console.log('runnn');
      localStorage.setItem('item',JSON.stringify(datatodo));
      console.log(localStorage);
    },[datatodo]);

  return (
    <div className='todolist'>
      <h1>To Do List</h1>
      {
          datatodo.map((items,index) => (
          <div className='onetodo' key={index} style={{backgroundColor: clickmark.includes(index)  ? 'green' : 'transparent'}}>
              <h2>{items}</h2>
              <div className='icons'>
                  <i className="bi bi-x-circle" onClick={() => handleDelete(index)}></i>
                  <i className= {clickmark.includes(index) ? "bi bi-x-circle" : "bi bi-check-circle"} 
                  style={{color: clickmark.includes(index) ? 'red' : 'white'}}
                  onClick={(e) => handleMark(index)}
                  ></i>
              </div>
          </div>
          ))
      }
      {newlocal()}
      <i className="bi bi-plus-circle plusicon" onClick={() => setAddOneLocal(true)}></i>
    </div>
  )
}

export default Todolist
