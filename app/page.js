// Agenda: Uploading ,deploying project 

'use client'
import React, { useState } from 'react';;

const Page = () => {
  // creating variable's for two way binding  
  const [title,setTitle] =useState('');
  const [desc, setDesc] = useState('');
  const [mainTodo, setmainTodo] = useState([])

  // function to prevent default beheviour of form ie. submiting and refreshing page  
  const submitHandler=(e)=>{
      e.preventDefault();
  // add task functionality

      setmainTodo([...mainTodo, {title,desc}]);
      setTitle('');
      setDesc('');
  }
//delete functionality
const deleteHandler =(i)=>{
  // setmainTodo(mainTodo.filter((todo, index) => index !== mainTodo.indexOf(todo)));
  // setmainTodo(mainTodo.splice(i,1))
  let copytask =[...mainTodo];
  copytask.splice(i,1);
  setmainTodo(copytask);

}

  let renderTodos=<h2>No Available Tasks</h2>;    

if(mainTodo.length>0){
  renderTodos = mainTodo.map((t,i)=>{
  return(
    <li key={i} className='flex items-center justify-between'>
    <div className="flex items-center justify-between mb-4 w-2/3" > 
    <h3 className='font-mono text-4xl
    bg-slate-500'>{t.title}</h3>
    <p className='font-mono  text-2xl bg-slate-500'>{t.desc}</p>
    </div>
    <button onClick={()=>deleteHandler(i)} type="button" className='bg-red-500 rounded-lg px-4 py-2 text-xl text-white'>Delete</button>
    </li>
  )
})}

  return (
    <>
    <div className='bg-black'>
      <h1 className='text-white text-xl p-5'>My Todos</h1>
    </div>
    <div className="m-2">
    <form onSubmit={submitHandler}>
      <input type="text" value={title} onChange={(e)=>{
        // console.log(e);
        setTitle(e.target.value)
      }} 
      placeholder='Enter Your Todo'
      className='border-zinc-800 border-2 rounded-xl px-2 m-4'
      />

      <input type="text" value={desc  }
      onChange={(e)=>{
        setDesc(e.target.value);
      }}
      placeholder='Enter Description here'
        className='border-zinc-800 border-2 rounded-xl px-8 m-4 '/>
      <button type="submit" className='bg-black text-emerald-500 mx-5 my-2 px-2 py-1 rounded-lg'> Add Tasks</button>
    </form>
    </div>
    <div className="p-8 bg-slate-400">
        <ul>{renderTodos}</ul>
    </div>
    </>
  )
}

export default Page
