
type laptopType = {
    id?: number;
    modal?: string;
    make_year?: number;
    OS?: string;
    screen_height?: string;
    screen_width?: string;
    price?: number;
  }
  
  const TableData = ({data}:{data: laptopType}) => {
    return (   
          <tr>
        <td>{data.id}</td>
        <td>{data.modal}</td>
        <td>{data.make_year}</td>
        <td>{data.OS}</td>
        <td>{data.screen_height}</td>
        <td>{data.screen_width}</td>
        <td>{data.price}</td>
      </tr>
    )
  }
  
  export default TableData