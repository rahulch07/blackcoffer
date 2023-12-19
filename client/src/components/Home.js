import React from "react";
import logo1 from '../logo.svg'




export default function Home(props) {

  let styl;
  let stylL= {bxshd: '4px 4px 4px 4px #DEDEDE'};
  let stylD= {bxshd: '4px 4px 4px 4px black'};

  props.mode==='light'? styl=stylL: styl=stylD;

  return (
    <div
      style={{ backgroundColor: props.styl.bgclr2, color: props.styl.txtclr }}
    >
      <div style={{ display: "flex" }}>
        <div>
          <div style={{ width: 200 }}></div>
        </div>
        <div>
        <div style={{ height: 50 }}></div>
          <div id="featureBox" style={{backgroundColor:props.styl.bgclr, color: props.styl.txtclr, boxShadow: styl.bxshd}}>
            <div style={{width:400}}>
            <h1 className="h1">This is home Page.</h1>
            <div>
              <img src={logo1} className="App-logo" style={{marginLeft:40, marginTop:40}} alt={'App-logo'}  />
            </div>
            </div>
            <div style={{textAlign: 'left'}}>
              <h3 className="h3">Features:</h3>
              <h5 className="h5">NavBar</h5>
              <div>Light and Dark mode Toggle button.</div>
              <hr/>
              <h5 className="h5">Dashboard</h5>
              <div>Data Visualization Dashboard.</div>
              <div>Used D3.js for making graphs.</div>
              <div>Data fetched from MongoDB database through NodeJS backend api.</div>
              <div>Charts are Dynamic(change with change in data).</div>
              <div>Components of different charts are made.</div>
              <div>Good looking UI.</div>
              <hr/>
              <h5 className="h5">Data</h5>
              <div>Fetches all the data from backend.</div>
              <div>Pagination applied(to avoid to much scrolling).</div>
              <div>Easy readability of data.</div>
              <hr/>
              <h5 className="h5">Made By</h5>
              <div>Rahul Chougule, chouguler310@gmail.com, 9594884973</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
