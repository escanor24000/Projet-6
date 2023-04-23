import { useEffect, useState } from "react"


export default function Api(){
    const [data, setData] = useState([])

   

useEffect(() => {
    async function getData () {   
         const response = await fetch('/data/data.json')
        const data = await response.json()
        setData(data)
    }
    getData()
},[])

return data

}


