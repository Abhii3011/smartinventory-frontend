import React from 'react'

function TableComp({columns, data, clicked1,clicked2}) {
    const handleClick=()=>{
      clicked1('true')
    }
    const handleClick2 = ()=>{
      clicked2(true)
    }
  return (
    <div>
         <table className="table">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, colIndex) => (
              <td key={colIndex}>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
      
    </table>
    <div>
    <button className='button-37'style={{backgroundColor:'white', margin:'10px', color:'black'}} onClick={handleClick}>Add</button>
    <button className='button-37'style={{backgroundColor:'white', margin:'10px', color:'black'}} onClick={handleClick2}>Delete</button>
  </div>
  </div>
  )
}

export default TableComp


