import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Data(props) {

  let styl;
  let stylL= {bxshd: '3px 3px 3px 3px #DEDEDE'};
  let stylD= {bxshd: '2px 2px 3px 3px black'};

  props.mode==='light'? styl=stylL: styl=stylD;

  const [data, setData] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // //const [itemsPerPage] = useState(10);
  // const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
const perPage = 10;
const totalPages = Math.ceil(data.length / perPage); // Calculate total pages


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://blackcoffer-rho.vercel.app/api/data"); // Update with your backend API URL
      setData(response.data);
      //console.log(response.data);
      //setFilteredData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  let count = 0;

  const sliceStart = (currentPage - 1) * perPage;
const sliceEnd = sliceStart + perPage;
const currentPageData = data.slice(sliceStart, sliceEnd);

const handlePreviousClick = () => {
  //count=count-10;
  setCurrentPage(Math.max(1, currentPage - 1));
};

const handleNextClick = () => {
  //count=count+10;
  setCurrentPage(Math.min(totalPages, currentPage + 1));
};

const pageNumbers = [...Array(totalPages).keys()].map((i) => i + 1);
const visiblePageNumbers = pageNumbers.slice(
  Math.max(currentPage - Math.floor(perPage / 2), 1),
  Math.min(currentPage + Math.floor(perPage / 2), totalPages)
);

  
  return (
    <div style={{backgroundColor: props.styl.bgclr2, color: props.styl.txtclr}}>
      <div style={{ display: "flex" }}>
        <div>
          <div style={{ width: 200 }}></div>
        </div>
        <div>
          <div style={{ height: 50 }}></div>
          <div >
            <h1 className="h1" style={{marginTop:10}}>This is data.</h1>
           

            <ul id="transactions">
               {/* {data.map((element) => {
                //console.log(element.balance);
                return (  */}
                {currentPageData.map((element) => (
                  <li key={element._id} style={{marginBottom: 10, backgroundColor: props.styl.bgclr, color: props.styl.txtclr}}>
                    <div id="databox" style={{boxShadow : styl.bxshd}}>
                     <div style={{display:"flex", justifyContent: "left"}}>
                      <div><b>{++count}.End Year:</b>{element.end_year}</div>
                      <div><b>Intensity:</b>{element.intensity}</div>
                      <div><b>Sector:</b>{element.sector}</div>
                      <div><b>Topic:</b>{element.topic}</div>
                      
                      </div>
                      <hr/>
                      <div style={{display:"flex",justifyContent: "left"}}><b>Insight:</b>{element.insight}</div>
                      <hr/>
                      <div style={{display:"flex",justifyContent: "left", width: 1060}}><b>URL:</b>{element.url}</div>
                      <hr/>
                      <div style={{display:"flex",justifyContent: "left"}}>
                      <div><b>Region:</b>{element.region}</div>
                      <div><b>Start_Year:</b>{element.start_year}</div>
                      <div><b>Impact:</b>{element.impact}</div>
                      <div><b>Added:</b>{element.added}</div>
                      <div><b>Published:</b>{element.published}</div>
                      </div>
                      <hr/>
                      <div style={{display:"flex",justifyContent: "left"}}>
                      <div><b>Country:</b>{element.country}</div>
                      <div><b>Relevance:</b>{element.relevance}</div>
                      <div><b>Pestle:</b>{element.pestle}</div>
                      <div><b>Source:</b>{element.source}</div>
                      </div>
                      <hr/>
                      <div style={{display:"flex", justifyContent: "left", width: 1060}}><b>Title:</b>{element.title}</div>
                      <hr/>
                      <div style={{display:"flex",justifyContent: "left"}}><b>Likelihood:</b>{element.likelihood}</div>
                    </div>
                  </li>
                )
                )}
            </ul>
          </div>
        </div>
        
      </div>


      <div className="" style={{ display: "flex", justifyContent: "center" }}>
      <button className="pagin" style={{backgroundColor:props.styl.bgclr, color: props.styl.txtclr, borderTopLeftRadius:10, borderBottomLeftRadius:10}} onClick={handlePreviousClick}>Previous</button>
      {visiblePageNumbers.map((pageNumber) => (
        <button className="pagin"
          key={pageNumber}
          style={{
            backgroundColor: pageNumber === currentPage ? props.styl.bgclr : props.styl.bgclr,
          }}
          onClick={() => setCurrentPage(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      <button className="pagin" style={{backgroundColor:props.styl.bgclr, color: props.styl.txtclr, borderTopRightRadius:10, borderBottomRightRadius:10}} onClick={handleNextClick}>Next</button>
    </div>

    </div>
  );
}
