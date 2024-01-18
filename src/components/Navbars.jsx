import { Link } from "react-router-dom";

export const Navbars = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-white py-3'>
        <div className='container px-5'>
          <Link className='navbar-brand' to={`/`}>
            <span className='fw-bolder text-primary'>CODE BABA</span>
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder'>
              <li className='nav-item'>
                <Link to={`/`} className='nav-link'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to={`/about`} className='nav-link'>
                  About
                </Link>
              </li>
              <li className='nav-item'>
                <Link to={`/product`} className='nav-link'>
                  Product
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
