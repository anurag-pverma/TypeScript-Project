import React,{useState,SyntheticEvent, useEffect } from 'react';
import styles from './Form.module.css';
import TableData from './TableData';
import axios,{AxiosResponse} from 'axios';

type laptopType = {
    id: number;
    modal: string;
    make_year: number;
    OS: string;
    screen_height: string;
    screen_width: string;
    price: number;
}

const Form = () => {
    const [laptopdata, setlaptopdata] = useState<laptopType[]>([]);
    const [formData, setformData] = useState({});
    const [isloading,setisloading] = useState<Boolean>(false);
    const [iserror,setiserror] = useState<Boolean>(false);

    const handleChange = (e:any) => {
        const inputName = e.target.name;
          setformData({
            ...formData,
            [inputName]: e.target.value,
          });
      };

      const handleSubmit = (e:SyntheticEvent) => {
        e.preventDefault();
        console.log(formData)
        let d: any = formData;
        sendData(d);
      };

      const sendData = (formData:laptopType)=>{
        setisloading(true);
        axios.post(`http://localhost:8080/laptops`,formData).then(getData)
      }

      const getData = ()=>{
        axios.get(`http://localhost:8080/laptops`).then((res: AxiosResponse<laptopType[]>)=>{
          const {data} = res;
          setlaptopdata(data);
          setisloading(false)
        })
        .catch((e)=>{
          setiserror(true)
        })
      }

      const handleChange1 = (e:any)=>{
        let newarr = mySort(laptopdata,e.target.value);
        setlaptopdata([...newarr]);
      }

      useEffect(()=>{
        setisloading(true)
        getData();
      },[])

      function mySort(arr:laptopType[],q:keyof laptopType){
        const len = arr.length;
        for(let i=0;i<len;i++){
            for(let j=i+1;j<len;j++){
                if(arr[i][q]>arr[j][q]){
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr
    }
  return (
    <>
     <div className={styles.border}>
        <h1 style={{ textAlign: "center" }}>Laptop Manufacture company</h1>
        <form className={styles.mainForm} onSubmit={handleSubmit}>

          <p>Laptop Model: </p>
          <input
            onChange={handleChange}
            type="text"
            name="modal"
            placeholder="Enter your model"
          />

          <p>
           Manufacture Year:
          </p>
          <input
            onChange={handleChange}
            type="date"
            name="make_year"
            placeholder="Enter date"
          />

          <p>
            Operating System :
          </p>
          <input
            onChange={handleChange}
            type="text"
            name="OS"
            placeholder="Enter Operating System"
          />

          <p>
          Screen Height : 
          </p>
          <select onChange={handleChange} name="screen_height">
            <option value="--">--</option>
            <option value="1440px">1440px</option>
            <option value="1000px">1000px</option>
            <option value="790px">790px </option>
            <option value="500px">500px </option>
            <option value="230px">230px </option>
          </select>

          <p>
          Screen Width:
          </p>
          <select onChange={handleChange} name="screen_width">
            <option value="--">--</option>
            <option value="1440px">1440px</option>
            <option value="1000px">1000px</option>
            <option value="790px">790px </option>
            <option value="500px">500px </option>
            <option value="230px">230px </option>
          </select>

          <p>
         Price:
          </p>
          <input
            onChange={handleChange}
            type="number"
            name="price"
            placeholder="Enter price"
          />

          <span></span>
          <input className={styles.btn} type="submit" />
        </form>
      </div>
      <div className="sort_div">
        <label>Sort by:</label>
      <select onChange={handleChange1} name="sort">
            <option value="--">--</option>
            <option value="OS">OS</option>
            <option value="id">id</option>
            <option value="modal">modal </option>
            <option value="price">price </option>
            <option value="make_year">make year </option>
          </select>
      {isloading? (<div>...loading</div>) : iserror? (<div>Something went wrong</div>) : 
      ( <table className={styles.table} >
          <thead>
            <tr>
              <th className={styles.tableBorder}>ID</th>
              <th className={styles.tableBorder}>MODAL</th>
              <th className={styles.tableBorder}>Make Year</th>
              <th className={styles.tableBorder}>OS</th>
              <th className={styles.tableBorder}>Screen Height</th>
              <th className={styles.tableBorder}>Screen Width</th>
              <th className={styles.tableBorder}>Price</th>
            </tr>
          </thead>
          <tbody>
            {laptopdata.map((item) => {
              return <TableData key={item.id} data={item} />;
            })}
          </tbody>
        </table>)}
       
      </div> 
    </>
  )
}

export default Form;