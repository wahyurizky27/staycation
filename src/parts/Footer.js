import React from 'react'

import Button from 'elements/Button'
import IconText from 'parts/IconText'


export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-auto" style={{width: 350}}>
                        <IconText/>
                        <p className="brand-tagline">
                            Wee Kaboom your beauty holiday instanly and memorable
                        </p>
                    </div>
                    <div className="col-auto mr-5">
                        <h6 className="mt-2">For Beginners</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/register">New Account</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/properties">Start Booking Room</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/use-payment">Use Payment</Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-2 mr-5">
                    <h6 className="mt-2">Explore Us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/careers">Our Career</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/privacy">Privacy</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/term">Terms & Condition</Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3">
                    <h6 className="mt-2">Connect Us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button isExternal type="link" href="mailto:support@staycation">support@staycation.co.id</Button>
                            </li>
                            <li className="list-group-item">
                                <Button isExternal type="link" href="tel:+6221 021 - 2208 - 1996">021 - 2208 - 1996</Button>
                            </li>
                            <li className="list-group-item">
                                <span>Staycation, Nongsa, Batam</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center copyright">
                        Copyright 2020 - All right reserved - Staycation
                    </div>
                </div>
            </div>
            
        </footer>
    )
}
