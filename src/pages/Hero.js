import React from 'react';

const Hero = ({handleLogout}) => {

    return (
        <section className="hero">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>Cerrar Sesion</button>
            </nav>
        </section>
    )
}

export default Hero;