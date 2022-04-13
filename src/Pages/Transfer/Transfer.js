import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion'
import 'bootstrap/dist/css/bootstrap.min.css';
import './transfer.css'
import PanelDisabled from '../../Components/PanelDisabled/PanelDisabled'
import { Link } from 'react-router-dom'

import IconPeople from "../../Assets/fi_users.svg"
import IconGear from "../../Assets/fi_settings.svg"
import IconCalendar from "../../Assets/fi_calendar.svg"
import Arrow from "../../Assets/fi_arrow-left.svg"

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const Transfer = (props) => {
    const [key, setKey] = useState("home");

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
            { car !== null &&
                <>
                <div className='upper-div-transfer'>
                    <Link to={`/checkout/${car.id}`} className='button-back-transfer'>
                        <div className='arrow-image-container'>
                            <img src={Arrow} className='arrow-image'/>
                        </div>
                        <div className='arrow-text'>
                            BCA Transfer
                        </div>
                    </Link>
                </div>
                    <div className='details-container-transfer'>
                        <div className='details-container'>
                            <div className='details-transfer-left'>
                                <div className='details-transfer-left-upper'>
                                    <p style={{fontSize:"16px", fontWeight:"600"}}>Selesaikan Pembayaran Sebelum</p>
                                    <p>Rabu, 19 Jun 2022 jam 13.00 WIB</p>
                                </div>
                                <div className='details-transfer-left-upper'>
                                    <p style={{fontSize:"16px", fontWeight:"600"}}>Lakukan Transfer Ke</p>

                                    <div className='banks-container'>
                                        <div className='bank-container'>
                                            <div className='bank-button'>
                                                BCA
                                            </div>
                                            <div className='bank-text'>
                                                BCA Transfer a.n. Binar Car Rental
                                            </div>
                                        </div>
                                        <div className='title-rekening'>
                                            <div className='title-text'>
                                                Nomor Rekening
                                            </div>
                                            <div className='content'>
                                                xxxx-xxxx-xxxx
                                            </div>
                                        </div>
                                        <div className='title-rekening'>
                                            <div className='title-text'>
                                                Total Bayar
                                            </div>
                                            <div className='content'>
                                                Rp. {car.price}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='details-transfer-left-upper'>
                                    <p style={{fontSize:"16px", fontWeight:"600"}}>Pilih Bank Transfer</p>
                                    <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)}>
                                        <Tab eventKey="home" title="ATM BCA">
                                            <ul className="text-instruction">
                                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                                <li> Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                                <li> Tidak termasuk akomodasi penginapan</li>
                                                <li> Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                                <li> Tidak termasuk akomodasi penginapan</li>
                                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                                <li> Tidak termasuk akomodasi penginapan</li>
                                            </ul>
                                        </Tab>
                                        <Tab eventKey="profile" title="M-BCA">
                                            <ul className="text-instruction">
                                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                                <li> Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                                <li> Tidak termasuk akomodasi penginapan</li>
                                                <li> Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                                <li> Tidak termasuk akomodasi penginapan</li>
                                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                                <li> Tidak termasuk akomodasi penginapan</li>
                                            </ul>
                                        </Tab>
                                        <Tab eventKey="contact" title="BCA KLIK">
                                            <ul className="text-instruction">
                                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                                <li> Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                                <li> Tidak termasuk akomodasi penginapan</li>
                                                <li> Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                                <li> Tidak termasuk akomodasi penginapan</li>
                                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                                <li> Tidak termasuk akomodasi penginapan</li>
                                            </ul>
                                        </Tab>
                                        <Tab eventKey="contactz" title="Internet Banking">
                                            <ul className="text-instruction">
                                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                                <li> Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                                <li> Tidak termasuk akomodasi penginapan</li>
                                                <li> Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                                <li> Tidak termasuk akomodasi penginapan</li>
                                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                                <li> Tidak termasuk akomodasi penginapan</li>
                                            </ul>
                                        </Tab>
                                    </Tabs>
                                </div>
                            </div>
                            <div className='details-transfer-right-checkout'>
                                <div className='details-container-right-inner'>
                                    <div className='car-transfer-price'>
                                        Klik konfirmasi pembayaran untuk mempercepat proses pengecekan
                                    </div>

                                    <button className='btn button-right-details-container'>
                                        <div type="submit" className='button-right-details'>
                                            Konfirmasi Pembayaran
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default Transfer