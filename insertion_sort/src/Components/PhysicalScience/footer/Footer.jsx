import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

import './footer.css'
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <MDBFooter  className='text-center text-lg-start text-muted '>
      <div className='vivColor'>
        <div className='container text-center  text-md-start mt-5   gradient__bg section__padding'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 vivTextColor'>
                <i className='fas fa-gem me-3'></i>Andc Virtual-Labs
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </div>


            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 vivTextColor'>Links</h6>
              <p>
                <Link to='/' className='text-reset'>
                  Home
                </Link>
              </p>
              <p>
                <Link to='/about' className='text-reset'>
                  About Us
                </Link>
              </p>
              <p>
                <Link to='/contact' className='text-reset'>
                  Contact Us
                </Link>
              </p>
              <p>
                <Link to='/feedback' className='text-reset'>
                  Feedback
                </Link>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 vivTextColor'>Contact</h6>
              <p>
                <i className='fas fa-home me-3'></i> kalkaji new delhi
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> + 91 9899819133
              </p>
              <p>
                <i className='fas fa-print me-3'></i> + 91 8010011556
              </p>
            </div>
          </div>
        </div>
        
      </div>

    </MDBFooter>
  );
}