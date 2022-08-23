import { useEffect, useState } from 'react'
import axios from 'axios';

type objectUser={

    per_page: number,
    q: string
}

export const UseFetch =<T> (url: string, params: Record<string, unknown>) => {

    const [loading, setLoading]= useState(false);
    const [err, setErr]=useState(false)

    const [data, setData]= useState<T[]>([])


 
  useEffect(()=>{
      setLoading(true)
axios.get(url,{
    params:{
        ...params
    },
}).then(({ data })=>{
    // console.log(data)
    setLoading(false);
    setData(data.items);
}).catch(()=>{
    setLoading(false);
    setErr(true)
})
  }, [])

   
return {loading, data, err};
};

