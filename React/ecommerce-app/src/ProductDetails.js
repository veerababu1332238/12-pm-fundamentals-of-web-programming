import { useParams,useSearchParams,Link, Outlet } from "react-router-dom";
import { useState,useEffect } from "react";
function ProductDetails(){
    const products=[{
        id:1,
        name:'REDMI 12(Moonstone Silver,128 GB)',
        price:9999,
        rating:4.2,
        imgSrc:'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/j/n/-original-imags37gyajqxkgp.jpeg?q=70',
        specifications:['4 GB RAM|128 GB ROM|Expandable Upto 1Tb','(6.79inch)Full Hd+ Display','50 MP+8MP+2MP|8MP Front Camera',
        '5000 mah Bayyery','Helio g88 Processor','1year ManuFracturer warrenty for phone and 6 Months wattenty in the box Accerssories '],
        thumbnaliimages:['https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/b/h/c/-original-imagth5xwrg4gfyp.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/9/p/d/-original-imagth5xzhqbzgfm.jpeg?q=70','https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/a/b/o/-original-imagth5xnqrdmyng.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/q/c/r/-original-imagth5xkyy3yg2b.jpeg?q=70'],
        description:[
            {
                   title:'Design and Display',
                   content:'A more vivid OLED display that’s both easier to see in full sunlight and power efficient. With a durable design that’s water and dust-resistant.',
                   imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/f911cab85917488bad55094596200ceb_18359bfe18b_image.png?q=90'
             },
             {
                title:'Cinematic Mode',
                content: 'A huge upgrade for better photos and videos. More light is captured with the Wide camera. Sensor-shift optical image stabilisation. And more detail in dark areas of your photos with the Ultra Wide camera.',
                imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/7b3bf64047794add8f4d55e079ba1cce_18359c02a77_image.png?q=90'
          },
          {
            title:'Massive Battery',
            content: 'A big boost in battery life you’ll notice every day. That means more time to watch, game, and do more of what you love with up to 19 hours of video playback on a single charge.',
            imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/fd06e35acb7943f1b82397a594efd7f5_18359c06f48_image.png?q=90'
      }
    ]
    
        
    },
    {
        id:2,
        name:'POCO (Blue,128 GB)',
        price:8999,
        rating:4.0,
        imgSrc:'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/t/a/c51-mzb0e6din-poco-original-imagzdzzraqzsrzc.jpeg?q=70',
        specifications:['4 GB RAM|128 GB ROM|Expandable Upto 1Tb','(6.79inch)Full Hd+ Display','50 MP+8MP+2MP|8MP Front Camera',
        '5000 mah Bayyery','Helio g88 Processor','1year ManuFracturer warrenty for phone and 6 Months wattenty in the box Accerssories '],
        thumbnaliimages:['https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/b/h/c/-original-imagth5xwrg4gfyp.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/9/p/d/-original-imagth5xzhqbzgfm.jpeg?q=70','https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/a/b/o/-original-imagth5xnqrdmyng.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/q/c/r/-original-imagth5xkyy3yg2b.jpeg?q=70'],
        description:[
            {
                   title:'Design and Display',
                   content:'A more vivid OLED display that’s both easier to see in full sunlight and power efficient. With a durable design that’s water and dust-resistant.',
                   imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/f911cab85917488bad55094596200ceb_18359bfe18b_image.png?q=90'
             },
             {
                title:'Cinematic Mode',
                content: 'A huge upgrade for better photos and videos. More light is captured with the Wide camera. Sensor-shift optical image stabilisation. And more detail in dark areas of your photos with the Ultra Wide camera.',
                imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/7b3bf64047794add8f4d55e079ba1cce_18359c02a77_image.png?q=90'
          },
          {
            title:'Massive Battery',
            content: 'A big boost in battery life you’ll notice every day. That means more time to watch, game, and do more of what you love with up to 19 hours of video playback on a single charge.',
            imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/fd06e35acb7943f1b82397a594efd7f5_18359c06f48_image.png?q=90'
      }
    ]
    },
    {
        id:3,
        name:'INFIX(summer AquqBlue,128 GB)',
        price:9999,
        rating:4.2,
        imgSrc:'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/a/p/r/-original-imagkgrxwg386pjk.jpeg?q=70',
        specifications:['4 GB RAM|128 GB ROM|Expandable Upto 1Tb','(6.79inch)Full Hd+ Display','50 MP+8MP+2MP|8MP Front Camera',
        '5000 mah Bayyery','Helio g88 Processor','1year ManuFracturer warrenty for phone and 6 Months wattenty in the box Accerssories '],
        thumbnaliimages:['https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/b/h/c/-original-imagth5xwrg4gfyp.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/9/p/d/-original-imagth5xzhqbzgfm.jpeg?q=70','https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/a/b/o/-original-imagth5xnqrdmyng.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/q/c/r/-original-imagth5xkyy3yg2b.jpeg?q=70'],
        description:[
            {
                   title:'Design and Display',
                   content:'A more vivid OLED display that’s both easier to see in full sunlight and power efficient. With a durable design that’s water and dust-resistant.',
                   imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/f911cab85917488bad55094596200ceb_18359bfe18b_image.png?q=90'
             },
             {
                title:'Cinematic Mode',
                content: 'A huge upgrade for better photos and videos. More light is captured with the Wide camera. Sensor-shift optical image stabilisation. And more detail in dark areas of your photos with the Ultra Wide camera.',
                imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/7b3bf64047794add8f4d55e079ba1cce_18359c02a77_image.png?q=90'
          },
          {
            title:'Massive Battery',
            content: 'A big boost in battery life you’ll notice every day. That means more time to watch, game, and do more of what you love with up to 19 hours of video playback on a single charge.',
            imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/fd06e35acb7943f1b82397a594efd7f5_18359c06f48_image.png?q=90'
      }
    ]
    },
    {
        id:4,
        name:'vivo T2x 5G (Glimmer Black, 128 GB)',
        price:9999,
        rating:4.2,
        imgSrc:'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/4/h/e/-original-imagzjhwmsamexfk.jpeg?q=70',
        specifications:['4 GB RAM|128 GB ROM|Expandable Upto 1Tb','(6.79inch)Full Hd+ Display','50 MP+8MP+2MP|8MP Front Camera',
        '5000 mah Bayyery','Helio g88 Processor','1year ManuFracturer warrenty for phone and 6 Months wattenty in the box Accerssories '],
        thumbnaliimages:['https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/b/h/c/-original-imagth5xwrg4gfyp.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/9/p/d/-original-imagth5xzhqbzgfm.jpeg?q=70','https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/a/b/o/-original-imagth5xnqrdmyng.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/q/c/r/-original-imagth5xkyy3yg2b.jpeg?q=70'],
        description:[
            {
                   title:'Design and Display',
                   content:'A more vivid OLED display that’s both easier to see in full sunlight and power efficient. With a durable design that’s water and dust-resistant.',
                   imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/f911cab85917488bad55094596200ceb_18359bfe18b_image.png?q=90'
             },
             {
                title:'Cinematic Mode',
                content: 'A huge upgrade for better photos and videos. More light is captured with the Wide camera. Sensor-shift optical image stabilisation. And more detail in dark areas of your photos with the Ultra Wide camera.',
                imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/7b3bf64047794add8f4d55e079ba1cce_18359c02a77_image.png?q=90'
          },
          {
            title:'Massive Battery',
            content: 'A big boost in battery life you’ll notice every day. That means more time to watch, game, and do more of what you love with up to 19 hours of video playback on a single charge.',
            imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/fd06e35acb7943f1b82397a594efd7f5_18359c06f48_image.png?q=90'
      }
    ]
    }

];
const[currentImgSrc,setCurrentImgSrc] = useState('');
const {productId} = useParams();
console.log(productId);
const[filteredProduct,setFilteredProducts] = useState({});

useEffect(() => {
    const _filterProducts = products.find(product => product.id == productId);
    setFilteredProducts(_filterProducts);
    setCurrentImgSrc(_filterProducts.imgSrc);
},[]);


    return(
        <div className="container-fluid my-2">
            <div className="row">
               <div className="col-sm-4">
                      <div className="row">
                        <div className="col-sm-3">
                            {filteredProduct.thumbnaliimages?.map(imgsrc => (
                                <div className="border p-2 my-2">
                                <img src={imgsrc} width="70px" height="70px" onClick={() =>setCurrentImgSrc(imgsrc)}/> 
                                </div>
                            ))}

                        </div>
                        <div className="col-sm-9">
                            <div>
                        <img src={currentImgSrc} className="img-fluid"/>
                        </div>

                        </div>
                      </div>
               </div>
               <div className="col-sm-8">
                <h3>{filteredProduct.name}</h3>
                <h4>{filteredProduct.price}</h4>
                <ul>
                
                    {filteredProduct.specifications?.map(spec =>(
                    <li key={spec}>{spec}</li>
                        ))}

                </ul>
                
                <button className="btn btn-primary">Add to cart</button>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active bg-secondary mx-2" to="product-description">ProductDescription</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link bg-secondary mx-2" to="product-specifications">ProductSpecifications</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link bg-secondary mx-2" to="product-ratings">ProductRatingsReviews</Link>
        </li>

        </ul>
       
          
      
    </div>
  </div>
</nav>
<Outlet/>
               </div>

            </div>
             
        </div>
    )
}
export default ProductDetails;