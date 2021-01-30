import React, { useState, useContext } from 'react'

const Footer = props => {
    
    return (
        <div>
            <footer>
                <div className="container rodape" >
                    <h2>BRO</h2>
                    <ul className="social">
                        <li><a href="http://facebook.com/mirrorfashion">Facebook</a></li>
                        <li><a href="http://twitter.com/mirrorfashion">Twitter</a></li>
                        <li><a href="http://plus.google.com/mirrorfashion">Google Plus</a></li>
                    </ul>
                </div>
		    </footer>
        </div>
    )
}

export default Footer