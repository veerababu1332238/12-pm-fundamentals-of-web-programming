function Home(){
    return(
       <div className="container-fluid bg-dark">
            <div className="row">
                <div className="col-sm-6">
                  <div className="text-white  justify-cotent-center"style={{marginTop:200, marginLeft:200}}>
                        <p > I am sai kumar,Devops Engineer</p>
                        <h1>I Love To Create</h1>
                        <p>Python snakes are Large in size and powerful They can<br></br> 
                            kill any living animal or human by squeezing</p>
                        <button className="btn btn-light mx-5">contact me</button>
                    </div>
                </div>
                <div className="col-sm-6 bg-dark" style={{marginTop:150}}>
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QDw8PDxAPDw4NEBUQEBAPDw8QFREQFxIXFhUVFRMYHSggGBolHRUVIjEhJSktLy4uFx8zODMvNygtLisBCgoKDg0OGhAQGi0lHyUtMDctLS0tLS0tLi0tMC0tKy0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAEBAAEFAQAAAAAAAAAAAAAAAQcCAwUGCAT/xAA/EAACAQMBBQYDBQYDCQAAAAAAAQIDBBEhBQYSMUEHE1FhcYEikaEycrHB8BQjQlJikjPC0RUlY2RzgpOi4f/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACQRAQEAAgEEAQQDAAAAAAAAAAABAhEDEiExQQQTIjJhM4GR/9oADAMBAAIRAxEAPwDOAAAAAAAAAAAAAACAAAABACQZAABAAABAANi+u6dClUrVZcNKjCVScn0jFZb+hg3eDtZ2jXlL9j4LO3y1B8EKlZrxk5ZivRLTxZG0ybZ5BgHdztWv7bijcJ38ZNf4lRU5Q8cSjB59zK26+/VjfwpcNSNG4qylBW1Sce94o+CXNNa5XT0Y2WO0EAJVAAAIASAAAAADfABVIAAAAAAEAAAAAABCkAAEJAAgAAgAA4TfXazs9n3Vwvtwp8MP+pOShF+zkn7AY/7Td+o1FW2fb8Lp/Yr1Xq5NPWMF0Saw2+evq8UwprDWVryfy/JHJ7uWiuLqlGouKMnmXn5GQbrcmyqL/ClTa6wk1n2ehhlySXVdGHHcp2YnpuLjjlJdCU686clKEpQnF5jKLcZJ+TXI75V7PqPG339Tu+keFcWfDi5fQ+HaW6FGEc0+8001eSPrYrfQyd07JN7p13+w15ValSEZTpyfDJSjx5m6kn8TknLx1T5aGUzyvsK8laXlKTlOHd1UnKE3TajnEviSbXwtrRdT1Hb1FKEJKSlGUVKMo8pRaymvLGDaXbmymm4ACyoCAAAAAAJH0AAqkBABSAAAAAAIBQQAAAyRACAACAACAU6x2lbNlc7Ku6UftRjCt6qlUjUkvdRZ2YA2wD2cWbld1cxw6FLKi1jMm8LP1O0XEXRy1d3MqjnLjko95SU8cUo8LWcJeHJHOUbGnTvZzgsYpu2m225T4GpU2/bjWTRtLZEK/BF6d3Jyi1zi2sNrzaOK3d278Zrs+Cdy42vezkpPheJL7LfQ6jK3VXMqtW6y8TjJSahFNtRaprVRzopNYZ3rbdmlaqCy1DGPRLB1ylbqS4tPsqD0SfCuUfRFN6a634dQ2hsCrcbRpW1JLvbhR15RXNSm/JJNno23pKEIQXKnGMF6RSS/Axfu3BR2xbSUeLiouEnj7CjCth598e5lM6+G7xcPPNZKQA1YAIAKCACggA+gAEJAAAAAAEAAAAAASBCkAEBAABAABAgAIBwG8uzp4VxRlwum3KpDpKL6rwa/BvwOIs9oQkpNtRlBfEm+R2jbt33Nrc1u7dXuqM592njjSi21kxTbX9Cpxyp1eOlJNYeklnXhlHnkw5cPcdXDyeq2t4dq3M1UVCSVKponOrwvCyk4R5pPlnx1Pms9pxVBy+J1Ivh
                    lB8+NvXJs7yWNpGpRq1Y1ZzWHBxlPEmsY9FyPhupwhB8XwyeKjz/Cln8kc2tuzL7ZvbKPZpaKVKrdVIp1J1HThNrVU4xWceGsmvY7qdW7M7h1Nk2k3Du+LvdMt5xXqLi98Z9ztB3Y49M08vPLquwAFlQEAFBCgAQEj6QAVSAEApACQAAAAACAAAwAIyFIAIAEIQpAAPnvr2lQg51qkKUF1nJR+XiY93g7V6NPMLOk6suXeVcxh6qPN++C+PHll4VuUnl3jeG+pW9rXq1nimoOL+GUtZfClha6to8107mVKblHSXKS6SX61ycvt3e68vZJV6snCLyqcMQh4axXP1eTr1d6v9fU6JxzHCysuq3Lcc7PeOEoR7xScovWOrWPL11ODv8AaDqSbX2X0fN//D5Zej+Sf5m3jy+f+hzThxxu46cubLKarPXY5t+nWso2TeLi0Unh4/eU51JSTiv6eLD9vEyCeS7evOElKDlGcfszjJxlH0a5exkTd3tVvqKjC6jC7ppY4pfu6uPvpYl7rPmXuG+8ZdWvLOAOlbN7UNmVcd5KrbyfSpTcl/dDP1wc/abz7PrShCleW851HiEFUipSfgk+vkUuGU9JmUvtywLgYKrIC4AEBQB9AAISAACAAkAAAAAAgAA4y92t3NVRqRxSfKp4Pxx4HJnz39pGrBxfP+F+DK5b12Wxs33byedVqnywGcFsW5dKrK1qZSxxU+JrR9Yfmvc51jHLqmzLHpughSFlQxt2r73VrZwtLSo6dVrvK1SDxKMf4YJ9G+b9vEySea9+doOvf3VTOjrSUfuxfDH6JG3DjLbb6Zcl9Rw91e1asnOrVqVJvnKpOU382zY4jtW7Vrs26oxtakXSvXKWKvG13mW3FRz8OiwuFrXHU4veDd6vZSSqYlCTxGpHOH5Nfwvy+pecsuXTfJeOzHqnhxTZp4iNkyabU0j/AFqTHkvfU1ArpIAikoVFVRp6N6G254TfgSLwkucnr6DZpnzso3nqXttOjXk53Fo4rjby50pZ4JS8ZJppvyT5s7yYM7FLtx2lKnnSvbTWP6oyjJfRSM5nNyTVa43sAAosAAD6AAQkIUAQFIAABIAACApABJvR9NOpT5tpVHGlOSWcLXHh1IvaJk3XRNv1ccdRzi6kcuUan8q54l+vY5Dd7b0oRoRqScqFdR7uVTKnT4sKKedXHVc+Xjg6pvXN1abt4UnWlcqSxKLj3bawpSb9dOpyN2s29OL04aaj7pYOLHLV3HfljLjqsmEOL3Y2i7m0pVJazScKn34Phb98J+5yh2y7m3BZq6aak+GLk+UU2/ZZPKlzN1JcXWXxfPU9Nbz1nCxvZrnC1rSXqqUmeaqrjTUY85uKz/SsLT1Orgna7c/L5j55Rxj55Ms7I2Vc3FqqO0VSqxrUozjUjJuaTSaVTRZklj4k+njq8OO4cqmOWv0Msdmt7OdlXhOpOfcVVGnGSyoQcE0oy58+LTOmnJGPytZYbnpv8btlq+3T94tz69vNuipV6XPRZnFeaX2l5r5HWc9Oq0M61YcSy9Xy9joe+W7fG3Xor96lmcEvtpdfvfic/F8qztn/AK25PjTzi6PkptJ/Nfia0zvl247GoMmTTKRNqNJOXJeaNUY831fN/kjapay+7+Jvsid+6b2dr7K6vDtiy/rlVg/e3q/mkeiDzVuFV4NqWEv+ZhH+58H+Y9LGXL5i2CAoMl0BQBvgAhIAAAAAgAAAAkAAAIUgHB7U2XLPFTSlH+TTK9PE6hd1OKTi44xlvKxh+niZLMbdot5Vs6zrTpKVnXiuGrBNyhXSfFCovCSSaf3kYZ8W++Lo4+bXbJxWyt7f9mXVOlVadnd1H3jejozaSVVf06JNeGX
                    0w8tnlHbG0p3NTvJ6dEl0Rk3su7RowjT2ffzUYQXDb3M5JKMUtKVVvklyUvRPo3vhx2YxhyZzLK1kbfa67rZt9PCb/Z5wSfJymuCKfvJHmKvDVuTzJvLb11PQHa3tSFLZjimm7ucYww08xXxuS8Votf6kefaksm+E1gxt+5sp4lHxzg73uRvNTtVO3rfDSrTU1U6Qnw8L4vJpLXodBb+KPqvxOQYmMzxuNW6rhZYzbUvFLhccNSWU1hprxTXNE7rifE036fmYWt76vRWKVWpTXPhjJ8OfHheh2fd7fyvCXd3jVWnLEVU4cSg/NLmvRZ9Th5Pi5T9uvD5GN/T6u0Gzt1GM+BRrznwxlH4W4pa8S69PmdDnFrzXic9vTtRXNw5Q/wAOmuCGmM6tyl7v6JHEHXwcdxwkvly82fVnbHz8ZonM+l04vy9NDYnbS6NP6dTS41SWJacm/Fn0GzbwcViSa1fTP4G+v1oWw8K5eXI7uVeC9s5/yXVGXsqsWz1G0eUrLPe08c3OOPXiWD1azPm9L4AAMVwAAbwAISAAAAABCgCAAkAAAIUgBnx7V2dSuqFS3rx46VaLjJfg0+jTw0+jR9jIB5Z3m2JUsbuta1NXSl8Ms
                    Y44PWEl6pr3yuhxHLXwZ6K7R9yY7SpKrS4YXtBfu5PRVYZz3c388Po2+jZ59vbOpRnUpVIyhUpyalCSw4yXNNG8u4zs00VL6rKnClOc5U6XEqUZSk1BN5aiuifgj5eL9czVP8zQ+b/XMi0kfbs
                    HZ/7VdUqH86qS0/4dGdT/ACFi8pHdOw/ZPf39xVazChaTh/31nwL/ANVUOmOm4fA+cfhfqtGW4vaM2iSNuUTeaNDNLFI2lNx814G9GSeqNqSNK01RTelm9
                    IcRtxmn5M1NFto018f+pJPqaCjZpym7VPvLy0hjWVzRT806sVk9SM869lVi621rXCzGi5Vp+UYR0f8Af3a9z0UY8t8L4RAUGS6AoA3QUhCQAAAAAAAAhSAAASBCgCMhWQCHU9+NxrfaUePSjdwWIVks8S6RqL
                    +KPnzX0fbSEy6RZt5Y3k3curCr3VzTcG/sSWsKiXWE+T/FdUjhZLn6HrXauy6F3SlQuaUa1
                    KfOMlyfRxa1i/NanXdg9nGzLKv+0U6c6lWLzTdefeKk/GEcJZ83lrxLdSNPi7Id3JWOz+9q
                    wcLi9l39SMk1KFNLFODT1TxmWOjm10MI7UrKdapUS4e9m6nD4cb4sfU9S1pqMZSfKMXJ+iWWeUqlXjk5YxxPPouiNeH2pyeY0M25G5I22aVSNLIzUzSylWbU0WFRrzX66lYiiizk9j7Ir3k+7tabq1eGUlTTjFtRSbw5NLqup817b1KE3SrwnRqx+1CrGVOS8+GWuPM712Ix/wB5yX8
                    lvUl7PhT/ABRnWpQhJxcoQk4axcoxbi/JvkMs9Ex26F2QbrztLaV1Xi4XF4lwwkmpU6C1imnylJ6teHDnVGQQDK3d2vJoABAAFA3QAQlAAAAAAAACFBIgAABgMCEKQARlIAAAHCb7V5U9mX84faja1ceTcGs+2cnmtw4Ul1ep6Y3tpKez72L5O3qP5Rb/ACPNd6/il6nVw
                    T7bWHJ+WnySZMBINlkIzQzUzS2Vq0aWEgVFEshdjVrOe1KdWOeClQquo1yw0oJP1ck/YzyYa7CruEbi6ot/HVoxnBePdzfFj/yL5GZinJ5Ww8BCgzXQoAAAAboAIAgAAAAAAAAAEABIAACAgAEKAIAAOq9plxKGzK3C8ccoQl5xbzj5pHnu4eWyA6+L+P8Atz5/m2WjS0ASN
                    LNOCAosqiVIoJ0bc9uVdTpbRsZ038X7VSg/OE5qnNf2ykemwDLl8r4AAMlwAAAAB//Z" className="img-fluid" width="500" height="500"/>
                </div>
            </div>
      </div>
        



      
    )
}
export default Home;