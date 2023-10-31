import React from "react";

function ProductDescription(){
    const des = [{
        name:' Smart MediaTek 6020 Processor',
        content:'smartphone delivers impeccable performance and lets you work seamlessly with a multitude of applications, play uninterrupted games and watch lag-free entertainment.  As this phone is 5G built, you can get internet at lightning-fast speed clearing the way for quick downloads, easy streaming, and trouble-free browsing.',
        imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/b25321fd1fab4340ac2781e35b06bc52_189488b6501_Design.jpg.jpeg?q=90'
         },
         {
            name:' Smart MediaTek 6020 Processor',
            content:'smartphone delivers impeccable performance and lets you work seamlessly with a multitude of applications, play uninterrupted games and watch lag-free entertainment.  As this phone is 5G built, you can get internet at lightning-fast speed clearing the way for quick downloads, easy streaming, and trouble-free browsing.',
            imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/b25321fd1fab4340ac2781e35b06bc52_189488b6501_Design.jpg.jpeg?q=90'
             },
             {
                name:' Smart MediaTek 6020 Processor',
                content:'smartphone delivers impeccable performance and lets you work seamlessly with a multitude of applications, play uninterrupted games and watch lag-free entertainment.  As this phone is 5G built, you can get internet at lightning-fast speed clearing the way for quick downloads, easy streaming, and trouble-free browsing.',
                imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/b25321fd1fab4340ac2781e35b06bc52_189488b6501_Design.jpg.jpeg?q=90'
                 },
                 {
                    name:' Smart MediaTek 6020 Processor',
                    content:'smartphone delivers impeccable performance and lets you work seamlessly with a multitude of applications, play uninterrupted games and watch lag-free entertainment.  As this phone is 5G built, you can get internet at lightning-fast speed clearing the way for quick downloads, easy streaming, and trouble-free browsing.',
                    imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/b25321fd1fab4340ac2781e35b06bc52_189488b6501_Design.jpg.jpeg?q=90'
                     },

    ]
    return(
        <div className="container-fluid">
            <h1 ClassName="border">Product Description</h1>
            {des.map((d,index) => (
                <div className="row my-1 border">
                   {index%2== 0 ? (
                   <React.Fragment>
                        <div className="col-sm-9">
                            <h4>{d.name}</h4>
                            <p>{d.content}</p>
                        </div>
                        <div className="col-sm-3">
                            <img src={d.imgsrc} className="img-fluid" />
                        </div>
                    </React.Fragment>)
                    :(
                    <React.Fragment>
                        <div className="col-sm-3">
                        <img src={d.imgsrc} className="img-fluid" />
                        </div>
                        <div className="col-sm-9">
                        <h4>{d.name}</h4>
                        <p>{d.content}</p>
                        </div> 
                    </React.Fragment>)}
                </div>

              

            ))}

          
        </div>
    )
}
export default ProductDescription;