import React,{useState, useEffect} from 'react'

export default function Monster() {
    const [monster, setMonster] = useState([]);
    const [searchString, setSearchString] = useState("");
    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/users";
    
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            var json = await response.json();
             
            setMonster(json);  
            
          } catch (error) {
            console.log("error", error);
          } 
        //   console.log(json);
        };
        if(monster.length === 0){fetchData()}
    }, [monster]);


  return (
    <>
    <form className='text-center'>
    <label htmlFor="searchTerm">
    <strong>Search: </strong>
    <input
        type="text"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      />
    <input type="submit" value="submit"/>
    </label>
    </form>

    <h2 className='text-center'>Monster App</h2>

        <div className="container">
            <div className="row row-cols-1 row-cols-md-4 g-4">
            {monster.filter((value) =>{
                if (searchString === ""){return value}
                else if(value.name.toLowerCase().startsWith(searchString.toLowerCase())){     //includes, startsWith
                    return value}
            }).map((item, i)=>
            <div className="col" key={i}>
                <div className="card">
                <img src={`https://robohash.org/${i+1}?set=set2&size=180x180`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.email}</p>
                </div>
                </div>
            </div>
            )} 
            </div>
        </div>
        </>
  )
}

// https://www.youtube.com/watch?v=Q9n2mLqXFpU
// clock
// textbox calculator
// BOM