function Dashboard() {
    document.body.style.background='#e8e3e7';
    
    return (
        <div style={{marginLeft:'10%', marginTop:'5%'}} >
            <h5>Dashboard</h5>
            <div className='row'>
                <div className="col-sm-4">
                  <div className="py-3" style={{backgroundColor:'violet'}}>
                    <h1>Total employes</h1>
                    <h1>7</h1>
                    <input type="range" />
                  </div>
                </div>
                <div className="col-sm-4">
                <div className="py-3" style={{backgroundColor:'lightblue'}}>
                    <h1>Total present</h1>
                    <h1>0</h1>
                    <input type="range" />
                  </div>
                </div>
                <div className="col-sm-4">
                <div className="py-3" style={{backgroundColor:'lightgreen'}}>
                    <h1>Total absent</h1>
                    <h1>7</h1>
                    <input type="range" />
                  </div>
                </div>
            </div>
            <h5 className='my-2'>department summary</h5>
            <div className="row">
                <div className="col-sm-3">
                    <div className='py-5' style={{backgroundColor:'white', textAlign:'center'}}>
                        <h3>Accounts</h3>
                        <h3>1</h3>
                    </div>

                </div>
                <div className="col-sm-3">
                <div className='py-5' style={{backgroundColor:'white', textAlign:'center'}}>
                        <h3>Development</h3>
                        <h3>1</h3>
                    </div>
                </div>
                <div className="col-sm-3">
                <div className='py-5' style={{backgroundColor:'white', textAlign:'center'}}>
                        <h3>Administrator</h3>
                        <h3>1</h3>
                    </div>
                </div>
                <div className="col-sm-3">
                <div className='py-5' style={{backgroundColor:'white', textAlign:'center'}}>
                        <h3>sales</h3>
                        <h3>4</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;