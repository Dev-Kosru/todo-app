import { useState } from 'react';
import './App.css';

function App() {
  const [value,setValue]=useState("");
  const [inputValues,setInputValues]=useState([]);
  const handleChange =(e)=>{
    setValue(e.target.value)
  }
  const Clicked =()=>{
    if(!value){

    }else{
      setInputValues([... inputValues , value])
    setValue('');
    }
    
  }
  const deleteItem=(data)=>{
    const updatedData =inputValues.filter((element,ind)=>{
     return ind !== data;
   
    })
    setInputValues(updatedData);
  }
  const clearBtn=()=>{
    setInputValues([]);
  }

  return (
    <div className="App">
      <>
        <div className='todo-app'>
          <div className='items text-white'>
              <h1 className='my-2'>Add Your Todo Items</h1>
          </div>
          <div className='inputs d-flex justify-content-center'>
            <input type="text"
              value={value}
              onChange={handleChange}
            />
            <p className='add' onClick={Clicked}>+</p>
          </div>
          <div className='list-item '>
            <ul>
                {
                  inputValues.map((el,id)=>{
                    return(
                      <div className='li-item' key={id}>
                          <li>{el} <button onClick={()=>deleteItem(id)} className="">-</button></li>
                      </div>
                    )
                  })
                }
            </ul>
          </div>
          <div className='delete-all-item'>
                <button onClick={clearBtn}>Clear</button>
          </div>
        </div>
      </>
    </div>
  );
}

export default App;
