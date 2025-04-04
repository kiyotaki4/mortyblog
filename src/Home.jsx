import React, { useEffect, useState } from 'react'

import "./home.css"
function Home() {
  
  const [newPostHead,setNewPostHead]=useState("");
  const [newPostBody,setNewPostBody]=useState("");
  // ==============================
  const [editHead,setEditHead]=useState('');
  const [editBody,setEditBody]=useState('');

  const [isPostVisible,setIsPostVisible]=useState(false)
  const [editPost,setEditPost]=useState(false)
  const [editPostIndex,setEditPostIndex]=useState(null)
  const toggleCreatePost = () =>{
    setIsPostVisible(!isPostVisible);
  }
  const toggleEditPost = (index) =>{
    setEditPostIndex(index === editPostIndex? null:index);

  }
  const savedLogin = localStorage.getItem("regLogin")
  const [profilePic,setProfilePic]=useState("https://i.pinimg.com/736x/41/f8/30/41f830b7549dccac0c4914a1568f06ec.jpg")
  // useEffect(()=>{
  //   const savedPost = JSON.parse(localStorage.getItem("postArray"))
  //   if (savedPost){
  //     setPost(savedPost)
  //   }
  // },[])
  const [post,setPost]=useState(()=>{
    const savedPost = localStorage.getItem("postArray")
    return savedPost? JSON.parse(savedPost) :[{
      author:"loladmin",
      head:"322",
      body:"lorem20lol",
  }]
    

  })

  useEffect(()=>{
    localStorage.setItem("postArray",JSON.stringify(post))
  },[post])
  
  
  const addPost = (authorInput,headInput,bodyInput)=>{
    const newPost = {author:authorInput, head:headInput,body:bodyInput}
    setPost([...post,newPost])
    setNewPostBody("")
    setNewPostHead("")
    setIsPostVisible(!isPostVisible);

  }
  const removePost = (index) =>{
    
    const tempArray =post.filter((e,i)=>i!==index)
    setPost(tempArray)    
  }

const ChangePost = (index,editHeadFunc,editBodyFunc,authorFunc)=>{
  const tempArray = [...post]
  tempArray[index] = {
    author:authorFunc,
    head:editHeadFunc,
    body:editBodyFunc,
}
setPost(tempArray)
setEditPostIndex(null);

}
  return (
    <div className='homeMain'>
      <div className="profile">
        <h3>username: <span style={{color:"red"}}>{savedLogin}</span></h3>
        <img src={profilePic} alt="" />
        
      </div>
      <h1>Dobro pojalovat' na <span style={{color:"orange"}}>website!</span></h1>

      {!isPostVisible && (<button className="whiteBtn" onClick={()=>toggleCreatePost()}>Создать новый пост</button>)}

      {isPostVisible &&(<div className="createDiv">
        <h2>Create New Post</h2>
        <div className="inputDiv">
        <input type="text" placeholder='Тема поста' className="headInput" value={newPostHead} 
        onChange={(e)=>setNewPostHead(e.target.value)}/>
        <input type="text" placeholder='Пост' className="bodyInput" value={newPostBody} 
        onChange={(e)=>setNewPostBody(e.target.value)}/>
        </div>
        <button style={{marginTop:"20px"}} onClick={()=>addPost(savedLogin,newPostHead,newPostBody)}>Add post</button>
        {/* <hr style={{marginTop:"20px"}}/> */}
        </div>
        )}

        <div className="postDiv"><h2>Ваши посты:</h2>
        <hr />
        <div className="arrayStyle">
        {post.map((e,indexPost)=>(
          (<div key={indexPost} className="postContainer">
            {editPostIndex===indexPost && <div className="editDiv">
            <h3>Тема поста: <span style={{color:"orange"}}>{e.head}</span></h3> 
            <span >Содержание изменяемого поста: {e.body}</span><br />
              <input className="inputChangeHead" type="text" placeholder='Изменить тему поста' 
              value={editHead} onChange={(e)=>setEditHead(e.target.value)}/>
              <input className="inputChangeBody" type="text" placeholder='Изменить содержание поста'
              value={editBody} onChange={(e)=>setEditBody(e.target.value)}/>
              <button onClick={()=>ChangePost(indexPost,editHead,editBody,e.author)} className="whiteBtn">Применить изменения</button>
            </div>}
            {editPostIndex!==indexPost &&(<div className="postContainer-inner">
            <h3>Автор поста:<img src={profilePic} alt="" /> <span style={{color:"red"}}>{e.author} </span></h3>
            <h3>Тема поста: <span style={{color:"orange"}}>{e.head}</span></h3> 
              <span className="bodySpaner">{e.body}</span><br />
              <div className="btnContainer">
              <button onClick={()=>removePost(indexPost)}>Удалить пост</button>
              <button onClick={()=>toggleEditPost(indexPost) } className="whiteBtn" >Изменить пост</button>
              </div>
              </div>)}
            </div>)
          

          )).reverse()}
          </div>
        </div>
    </div>
  )
}

export default Home