"use client";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainArray, setMainArray] = useState([]);

  const addTask = (e) => {
    e.preventDefault()
    let newData = { title: title, desc: desc };
    let newArray = [...mainArray, newData];
    setMainArray(newArray);

    console.log(mainArray);

    setTitle("");
    setDesc("");
  };

  const handleDelete = (i) =>{
    let filteredArray = [...mainArray];
    filteredArray.splice(i,1);
    // console.log(i);
    setMainArray(filteredArray);
  }

  return (
    <div className="container">
      <h1 className="heading">To Do list</h1>
      <form className="form" onSubmit={addTask}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task"
          required
        />
        <input
          type="text"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Enter description"
          required
        />
        <button type="submit" className="button">
          Add task
        </button>
      </form>

      {mainArray.length > 0 ? (
        mainArray.map((t, i) => (
          <div key={i} className="content">
            <div className="left">
              <h1 className="title">{t.title}</h1>
              <p className="desc">
                {t.desc}
              </p>
            </div>
            <div className="right">
              <button className="button delete" onClick={()=>handleDelete(i)}>Delete</button>
            </div>
          </div>
        ))
      ) : (
        <h1 className="not">No Task </h1>
      )}

    </div>
  );
};

export default page;
