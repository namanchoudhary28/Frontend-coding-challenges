import React, { useEffect, useState } from 'react'

const Pagination = () => {
    const [data,setData]=useState([])
    const [page,setPage]=useState(1)
    const [filterData,setFilter]=useState([])
    const numPages=10
    const handlePrev=()=>{
        
        if(page-1<0){
            setPage(0)
        }
        else{
            setPage(page-1)
        }
    }
    const handleNext=()=>{
        // page+=1
        const maxPages=parseInt(data.length / 10)
        if(page+1>maxPages){
            setPage(maxPages)
        }
        else{
            setPage(page+1)
        }
    }
    const fetchData= async ()=>{
        const response=await fetch('https://jsonplaceholder.typicode.com/photos')
        const listData=await response.json()
        setData(listData)
        const listFilter=data.slice((page*numPages)-numPages,page*numPages)
        setFilter(listFilter)


        // console.log(data)
        

    }
    useEffect(()=>{
        fetchData()

    },[])

    useEffect(()=>{
        const listFilter=data.slice((page*numPages)-numPages,page*numPages)
        setFilter(listFilter)
    },[page])
  return (
    <div>
        <h1>Page no {page}</h1>
        <button onClick={handlePrev} >Previous</button>
        <button onClick={handleNext}>Next</button>
        {filterData.map((item,index)=>{
        return <div key={item.id}><img src={item.thumbnailUrl} alt={item.title}  style={{ width: '200px', height: 'auto', margin: '10px' }} />
        <p>{item.id}</p></div>

        })}


    </div>
    
  )
}

export default Pagination