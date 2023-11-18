import React from 'react'
import image from '../images/logo.png'

export default function Image() {
    return (
        <>
            <img src={image} alt='logo' className='card-img-top w-100 text-center mx-auto bg-light' />
            <h5 class="card-title text-center text-light my-3">Jawahirah Alsafari</h5>
            <h6 class="card-subtitle mb-2 text-warning text-center">Frontend Developer</h6>
            <div className='container  my-3 text-center'>
                <div class="row ">
                    <div class="col-12 col-sm-6  ">
                        <a class="btn btn-light my-3"   rel="noreferrer">
                            <i class="bi bi-envelope-fill"></i> Email
                        </a>
                    </div>
                    <div class="col-12 col-sm-6 ">
                        <a class="btn btn-primary my-3" rel="noreferrer" href='https://www.linkedin.com/in/jawahirah-alsafari' target='_blank'>
                            <i class="bi bi-linkedin"></i> LinkedIn
                        </a>
                    </div>
                </div>
            </div>

        </>
    )

}