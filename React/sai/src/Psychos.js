import tedbundy from './tedbundy.jpeg';
function Psycho() {
    const Psychos = [{
        name:'ted bundy',
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Ted_Bundy_headshot.jpg/330px-Ted_Bundy_headshot.jpg',
        born:'24 November 1996',
        country: 'United States',
        murders:20
    },
    {
        name:'jack the ripper',
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/JacktheRipper1888.jpg/330px-JacktheRipper1888.jpg",
        born: 'unkown',
        country:'england',
        murders:11
    },
    {
        name:'jeffery dahmer',
        image:"https://upload.wikimedia.org/wikipedia/en/0/0c/Jeffrey_Dahmer_Milwaukee_Police_1991_mugshot.jpg",
        born:'21 may 1960',
        country:'united states',
        murders:16

    },
    {
        name:'john wayne gacy',
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/John_Wayne_Gacy_1978_mugshot.jpg/330px-John_Wayne_Gacy_1978_mugshot.jpg',
        born :'17 mrch 1942',
        country:'united states',
        murders:33
    },
    {
        name:'harold shipman',
        image:'https://upload.wikimedia.org/wikipedia/en/6/6d/Harold_Shipman_mug_shot.jpg',
        born:'14 january 1946',
        country:'united kingdim',
        murders:250
    }
];
return(
    <div className="container-fluid">
        <div className="row " >
        <h1 className="text-center text-white">Most Famous PsychO Killers</h1>
        {Psychos.map((person,index) => (
            
                <div className="col-sm-6 " key={index} >
                    <div className="w-75 d-flex flex-column align-items-center bg-white m-auto my-1 " style={{boxShadow:'2px 2px 2px 1px rgba(0, 0, 0, 0.2)'}}>
                        <img src={person.image} className="img-fluid my-1" style={{width:'200px',height:'200px'}}/>
                        <div className="">
                            <p>name:{person.name}</p>
                            <p>DOB : {person.born}</p>
                            <p>country: {person.country}</p>
                            <p>murders:{person.murders}</p>
                        </div>
                        </div>
                </div>
      
        ))}
              </div>
    </div>
)

}
export default Psycho;
