import React from 'react';
function MappingFunction(){
    const persons =[{
        name:'katherine langford',
        age: 27,
        image:'https://i.pinimg.com/originals/50/69/25/5069256c6572e4432492fa7d3f0f1d0e.jpg'
    },
    {
        name:'Millie Bobby Brown',
        age: 18,
        image:'https://alitaexperience.com/wp-content/uploads/2022/12/Millie-Bobby-Brown.jpg.webp'
    },
    {
        name:'Kiernan Shipka',
        age: 23,
        image:'https://alitaexperience.com/wp-content/uploads/2022/12/Kiernan-Shipka.jpg.webp'
    },
    {
        name:'Elle Fanning',
        age: 24,
        image:'https://alitaexperience.com/wp-content/uploads/2022/12/Elle-Fanning-683x1024.jpg.webp' 
    },
    {
        name:'Amandla Stenberg',
        age: 24,
        image:'https://alitaexperience.com/wp-content/uploads/2022/12/Amandla-Stenberg-768x512.jpg.webp'
    },
    {
        name:'Chloë Grace Moretz',
        age: 25,
        image:'https://alitaexperience.com/wp-content/uploads/2022/12/Chloe-Grace-Moretz.jpg.webp'
    },
    {
        name:'Olivia Holt',
        age: 25,
        image:'https://alitaexperience.com/wp-content/uploads/2023/01/Olivia-Holt.png.webp'
    },
    {
        name:'zendaya',
        age: 26,
        image:'https://alitaexperience.com/wp-content/uploads/2023/01/Zendaya.png.webp'
    },
    {
        name:'Sophie Turner',
        age: 26,
        image:'https://alitaexperience.com/wp-content/uploads/2022/12/Sophie-Turner-768x512.jpeg.webp'
    },
    {
        name:'Hailee Steinfeld',
        age: 26,
        image:'https://alitaexperience.com/wp-content/uploads/2022/12/Hailee-Steinfeld-768x768.jpg.webp'
    },
    {
        name:'Anya Taylor-Joy',
        age: 26,
        image:'https://alitaexperience.com/wp-content/uploads/2022/12/Anya-Taylor-Joy-768x512.jpg.webp'
    },
    {
        name:'Abigail Breslin',
        age: 26,
        image:'https://alitaexperience.com/wp-content/uploads/2022/12/Abigail-Breslin-702x1024.jpg.webp'
    }
];

return (
    <div className="container-fluid">
      <h1 className='text-white text-center '>Beautiful hollywood Actress</h1>
      <div className="row">
        {persons.map((actor, index) => (
          <div key={index} className="col-sm-3">
            <div className="d-flex flex-column align-items-center">
              <img src={actor.image} className="img-fluid " alt={actor.name}  style={{width:'400px',height:'400px'}}/>
              <div className="text-white">
                <p>name: {actor.name}</p>
                <p>age: {actor.age}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

}
export default MappingFunction;