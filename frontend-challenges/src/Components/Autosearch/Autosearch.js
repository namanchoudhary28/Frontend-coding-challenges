import React, { useEffect, useState } from 'react'

const Autosearch = () => {
    const [term,setTerm]=useState('')
    const [data,setData]=useState([])
    const [filterArr,setFilter]=useState([])
    const handleChange=(e)=>{


        setTerm(e.target.value)






    }
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const json = await response.json();
                setData(json)
                console.log(data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        
        fetchData();


    },[])

    useEffect(()=>{

        const timer=setTimeout(() => {
            if(term){
                const filterData=data.filter((item,index)=>{
                    return item.name.toLowerCase().includes(term)
                })
                setFilter(filterData)

            }
            else{
                setFilter([])

            }
         
            
        }, 1000);
        return ()=>{
            clearTimeout(timer)
        }
    },[term,data])
  return (
    <>
    <input type='search' onChange={handleChange} value={term} />
    <p>List</p>
    {filterArr.map((item,index)=>{
        return <div key={item.id}>{item.name} <br /></div>

    })}
    
    </>
  )
}

export default Autosearch