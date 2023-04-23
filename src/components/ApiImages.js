import { useEffect, useState } from "react"


export default function ApiImages(id){
const [images, setImages] = useState([])
useEffect(() => {
    async function getData () {   
        const response = await fetch('/data/data.json')
        const data = await response.json()
        const loge = []
            data.forEach(function (res) {
                if (id === res.id) {
                    loge.push(res)
                }
            });
            if(loge.length>0){
            setImages(loge[0].pictures);
        }
    }
    getData()
},[])

return images

}


