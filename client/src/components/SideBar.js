import React from 'react'

export default function SideBar(props) {

  let styl;
  let stylL= {bxshd: '3px 3px 3px 3px #DEDEDE'};
  let stylD= {bxshd: '3px 3px 3px 3px black'};

  props.mode==='light'? styl=stylL: styl=stylD;

  return (
    <div>
      <div className='sidebar fixed-bottom' style={{backgroundColor: props.styl.bgclr, color: props.styl.txtclr}}>
        <a href='/dashboard'><div className='butn' style={{color: 'white', boxShadow: styl.bxshd}}>Dashboard</div></a>
        <a href='/data'><div className='butn' style={{color: 'white', boxShadow: styl.bxshd}}>Data</div></a>
      </div>
    </div>
  )
}
