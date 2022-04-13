import React, { useState } from 'react'
import './Panel.css'
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form'
import Car from '../../Components/Car/Car'
import Navi from '../../Components/Navbar/Navbar'

const Panel = (props) => {
    
//   const [item, setItem] = useState([])
//   item = <Car/>

    const { register, handleSubmit } = useForm()
    const onSubmit = () => {
        // setItem( () => {
        //     const newState = <Navi/>
        //     return newState
        // })
        fetch('https://rent-cars-api.herokuapp.com/customer/car')
        .then( response => {
            return response.json()
        })
        .then( data => {
            props.setCarList([...data.filter( (item) => {
                return true
            })])
            console.log('ini data api:', data)
            console.log('ini data api:', data.name)
        })
    }

  return (
      <>
      {/* {item} */}
      <Car/>
    <div className="search-bar-container">
        <form id="searc-movie" className="search-bar" onSubmit={handleSubmit(onSubmit)}>

            <div className="search-bar-title">
                {props.cari ? '' : 'Pencarianmu'}
            </div>

            <div className='search-bar-operations'>
                <div className="search-bar-operations-container">
                    <label className="form-label">Tipe Driver</label>
                    <select id="tipe" className="form-control" disabled={props.form} {...register('tipe')}>
                        <option></option>
                        <option>Disabled select</option>
                    </select>
                </div>
                
                <div className="search-bar-operations-container">
                    <label className="form-label">Tanggal</label>
                    <input id="date" type="date" className="form-control" disabled={props.form} {...register('date')}/>
                </div>

                <div className="search-bar-operations-container">
                    <label className="form-label">Waktu Jemput/Ambil</label>
                    <input id="time" type="time" className="form-control"  disabled={props.form} {...register('time')}/>
                </div>

                <div className="search-bar-operations-container">
                    <label className="form-label">Jumlah Penumpang</label>
                    <input id="pass" type="number" className="form-control" disabled={props.form} {...register('pass')}/>
                </div>
                
                <button className='btn button-cari-container'>
                    <div type="submit" className='button-cari'>
                        Cari Mobil
                    </div>
                </button>
            </div>
        </form>

        <div className="spacer"></div>
    </div>
    </>
  )
}

export default Panel