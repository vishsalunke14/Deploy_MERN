import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <h2 className='text-center'>Home Components</h2>
            <div className="d-flex justify-content-center  align-items-center bg-secondary vw-50 vh-50">
                <img src=''></img>
                <Link to={'/register'} className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
                    Register
                </Link>
                <Link to={'/login'} className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
                    Login
                </Link>
            </div>
        </>
    )
}

export default Home
