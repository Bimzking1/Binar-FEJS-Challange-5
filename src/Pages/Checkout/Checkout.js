import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion'
import 'bootstrap/dist/css/bootstrap.min.css';
import './checkout.css'
import PanelDisabled from '../../Components/PanelDisabled/PanelDisabled'
import { Link } from 'react-router-dom'

import IconPeople from "../../Assets/fi_users.svg"
import IconGear from "../../Assets/fi_settings.svg"
import IconCalendar from "../../Assets/fi_calendar.svg"
import Arrow from "../../Assets/fi_arrow-left.svg"

const Checkout = (props) => {

    const param = useParams()
    const [car, setCar] = useState(null)

    useEffect(() => {
        fetch(`https://rent-cars-api.herokuapp.com/customer/car/${param.id}`)
        .then( response => {
            return response.json()
        })
        .then( data => {
            setCar({...data})
        })
    },[])

    return (
        <div>
            {/* <h1>Car Name: {car.name}</h1>
            <p>{car.category}</p> */}
            { car !== null &&
                <>
                <div className='upper-div-container'>
                    <Link to={`/car/${car.id}`} className='button-back'>
                        <div className='arrow-image-container'>
                            <img src={Arrow} className='arrow-image'/>
                        </div>
                        <div className='arrow-text'>
                            Pembayaran
                        </div>
                    </Link>
                </div>
                <PanelDisabled/>
                    <div className='details-container-main'>
                        <div className='details-container'>
                            <div className='details-container-left'>
                                <div className='details-container-left-upper'>
                                    <p style={{fontSize:"16px", fontWeight:"600"}}>Pilih Bank Transfer</p>
                                    <p>Kamu bisa membayar dengan transfer melalui ATM, Internet Banking, atau Mobile Banking</p>

                                    <div className='banks-container'>
                                        <div className='bank-container'>
                                            <div className='bank-button'>
                                                BCA
                                            </div>
                                            <div className='bank-text'>
                                                BCA Transfer
                                            </div>
                                        </div>
                                        <div className='bank-container'>
                                            <div className='bank-button'>
                                                BNI
                                            </div>
                                            <div className='bank-text'>
                                                BNI Transfer
                                            </div>
                                        </div>
                                        <div className='bank-container'>
                                            <div className='bank-button'>
                                                Mandiri
                                            </div>
                                            <div className='bank-text'>
                                                Mandiri Transfer
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='details-container-right-checkout'>
                                <div className='details-container-right-inner'>
                                    <div className='car-name'>
                                        {car.name} / {car.category}
                                    </div>
                                    <div className='car-details-container'>
                                        <div className='car-detail-icons'>
                                            <div className='car-detail-icon'>
                                                <img src={IconPeople} className='car-icon'/>
                                            </div>
                                            <div className='car-book-text'>
                                                4 orang
                                            </div>
                                        </div>
                                        <div className='car-detail-icons'>
                                            <div className='car-detail-icon'>
                                                <img src={IconGear} className='car-icon'/>
                                            </div>
                                            <div className='car-book-text'>
                                                Manual
                                            </div>
                                        </div>
                                        <div className='car-detail-icons'>
                                            <div className='car-detail-icon'>
                                                <img src={IconCalendar} className='car-icon'/>
                                            </div>
                                            <div className='car-book-text'>
                                                Tahun 2020
                                            </div>
                                        </div>
                                    </div>
                                    <div className='car-book-price'>
                                        <div className='car-total'>
                                            Total
                                        </div>
                                        <div className='car-price-text'>
                                            Rp. {car.price}
                                        </div>
                                    </div>
                                    <p>Include</p>
                                    <ul className="text-muted">
                                        <li>1 Mobil dengan sopir</li>
                                    </ul>

                                    <p>Biaya Lainnya</p>
                                    <ul className="text-muted">
                                        <li>Pajak</li>
                                        <li>Biaya makan sopir</li>
                                    </ul>

                                    <p>Belum Termasuk</p>
                                    <ul className="text-muted">
                                        <li>Bensin</li>
                                        <li>Tol dan parkir</li>
                                    </ul>

                                    <Link to={`/transfer/${car.id}`} style={{textDecoration:"none", color:"#FBFAF5"}}>
                                        <button className='btn button-right-details-container'>
                                            <div type="submit" className='button-right-details'>
                                                Bayar
                                            </div>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default Checkout