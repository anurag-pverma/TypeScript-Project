import React, { useEffect, useState } from 'react';
import styles from './Country.module.css';

type countryType ={
  country: string;
  city: string;
}

type InputProps = {
  value?: string   ,
  type?: React.InputHTMLAttributes<unknown>['type'],
  id?: string,
  label?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CountrySearch: React.FC <InputProps> = (props) => {
    const {
        value='',
        type='text',
        id=Math.random(),
        label,
        onChange,
    } = props;

    let [results, setResults] = useState<countryType[]>([])

    useEffect(()=>{
      fetch(`http://localhost:8080/data?q=${value}&_limit=10`)
      .then((res)=>res.json())
      .then((data)=>setResults(data))
    },[value])
    
  return (
    <div className={styles.container}>
            <div className={styles.group}>
                <input 
                    style={{color:"red", fontSize:"18px"}}
                    type={type}
                    id={id}
                    onChange={onChange}
                    />
                <label className={`${value?styles.active:null}`}>
                    { label}
                </label>
                <div style={{position:'absolute'}}>
                {value  && results.map((item,index)=>(
                        <div key={index}  className={styles.results}>{item.country || item.city}</div>
                    ))}
                </div>
            </div>
        </div>
  )
}

export default CountrySearch