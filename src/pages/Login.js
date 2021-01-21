import React from 'react';


const Login = (props) => {
    const { email, setEmail, password, setPassword, handleLogin, handleSignUp, hasAccount, setHasAccount, emailError, passwordError } = props;


    return (
        <section className="login">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="loginContainer">
                <label>Usuario</label>
                <input
                    type="text"
                    autoFocus
                    required
                    value={email}
                    onChange={
                        (e) => setEmail(e.target.value)
                    }
                />
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>


                <input type="password"
                    required
                    value={password}
                    onChange={
                        (e) => setPassword(e.target.value)}

                />
                <p className='errorMsg'>{passwordError}</p>


                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                            <button onClick={handleLogin}>Iniciar Sesion</button>
                            <p>No tienes una cuenta? <span onClick={() => setHasAccount(!hasAccount)}>Registrate</span></p>

                        </>

                    ) : (
                            <>
                                <button onClick={handleSignUp}>Registrarse</button>
                                <p>Tengo una cuenta? <span onClick={() => setHasAccount(!hasAccount)} >Inicia Sesion</span></p>

                            </>
                        )
                    }
                </div>
            </div>

        </section>
    )

}

export default Login;