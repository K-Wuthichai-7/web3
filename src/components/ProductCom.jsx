import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import { ProductList } from "../json/data";
import "../css/product.css";

export const ProductCom = () => {
  return (
    <>
      <section className='section-products bg-light'>
        <div className='container'>
          <div className='row justify-content-center text-center'>
            <div className='col-md-8 col-lg-6'>
              <div className='header'>
                <h3>Featured Product</h3>
                <h2>Popular Products</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            {/* Single Product */}
            {ProductList.map((item, index) => (
              <div key={index} className='col-md-6 col-lg-4 col-xl-3'>
                <div id={`product-${index}`} className='single-product m-3 '>
                  <div className='part-1'>
                    <Image
                      src={item.img}
                      alt={`Product ${index + 1}`}
                      thumbnail
                      style={{ width: "400px", height: "180px" }}
                    />

                    <ul>
                      <li>
                        <Link to='#'>
                          <i className='bi bi-bag-check' />
                        </Link>
                      </li>
                      <li>
                        <Link to='#'>
                          <i className='bi bi-heart-fill' />
                        </Link>
                      </li>
                      <li>
                        <Link to='#'>
                          <i className='bi bi-plus-lg' />
                        </Link>
                      </li>
                      <li>
                        <Link to='#'>
                          <i className='bi bi-arrows-angle-expand' />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className='part-2 text-center'>
                    <h3 className='product-title'>{item.title}</h3>
                    <h4 className='product-price'>{item.price} ฿</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
