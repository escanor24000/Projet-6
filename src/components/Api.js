import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Api(){
    const [data, setData] = useState([])
    const navigate = useNavigate();
   

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


