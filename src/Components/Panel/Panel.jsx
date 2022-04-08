import React from 'react'
import './Panel.css'
import { Link } from "react-router-dom";

const Panel = (props) => {


  return (
    // <Panel show="true" cari="false"></Panel>
    <div className="search-bar-container">
        <div className="search-bar">
            <div className="search-bar-title">{!props.cari /* Apakah != 'false'*/ ? "Pencarianmu" : "AWAL"}</div>
            {/* <h6 className="fw-bold px-4">{!props.show ? "Pencarianmu" : "AWAL"}</h6> */}


            {/* <div className={`search-bar-operations ${props.show ? "col-11" : "col-12"}`}> */}
            <div className='search-bar-operations'>
                <div className="search-bar-operations-container">
                    <label className="form-label">Tipe Driver</label>
                    <select id="disabledSelect" className="form-control" disabled={props.form}>
                        <option></option>
                        <option>Disabled select</option>
                    </select>
                </div>
                
                <div className="search-bar-operations-container">
                    <label className="form-label">Tanggal</label>
                    <input type="date" className="form-control" disabled={props.form}/>
                </div>

                <div className="search-bar-operations-container">
                    <label className="form-label">Waktu Jemput/Ambil</label>
                    <input type="time" className="form-control"  disabled={props.form} />
                </div>

                <div className="search-bar-operations-container">
                    <label className="form-label">Jumlah Penumpang</label>
                    <input type="number" className="form-control" disabled={props.form} />
                </div>
                
                <div className='btn button-cari-container'>
                    <Link to='/cari' className='button-cari'>
                        <small>
                            {!props.cari ? "Edit" /*INI TRUE*/ : "Cari mobil" /*INI FALSE*/ }
                        </small>
                    </Link>
                </div>
            </div>
           
            {/* <div className={props.show ? 'col-1 px-0' : 'd-none'}> */}
            {/* <div className='button-cari'>
                <Link to='/cari' className={`btn ${props.edit ? 'btn btn-outline-primary' : 'btn-warning'} mt-5`}>
                    <small>
                        {!props.cari ? "Edit" : "Cari mobil" }
                    </small>
                </Link>
            </div> */}
        </div>

        <div className="spacer"></div>
    </div>
   
  )
}

export default Panel