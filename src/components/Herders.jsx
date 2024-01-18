export const Herders = () => {
  return (
    <>
      <div
        id='carouselExampleDark'
        className='carousel carousel-dark slide'
        data-bs-ride='carousel'
      >
        <div className='carousel-indicators'>
          <button
            type='button'
            data-bs-target='#carouselExampleDark'
            data-bs-slide-to={0}
            className='active'
            aria-current='true'
            aria-label='Slide 1'
          />
          <button
            type='button'
            data-bs-target='#carouselExampleDark'
            data-bs-slide-to={1}
            aria-label='Slide 2'
          />
          <button
            type='button'
            data-bs-target='#carouselExampleDark'
            data-bs-slide-to={2}
            aria-label='Slide 3'
          />
        </div>
        <div className='carousel-inner'>
          <div className='carousel-item active' data-bs-interval={10000}>
            <img
              src='src/image/header-bg.jpg'
              className='d-block w-100'
              alt='...'
              style={{ height: "600px" }}
            />
            <div className='carousel-caption d-none d-md-block'>
              <h5 className='text-white'>First slide label</h5>
              <p className='text-white'>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className='carousel-item' data-bs-interval={2000}>
            <img
              src='https://png.pngtree.com/thumb_back/fh260/background/20230519/pngtree-an-abstract-image-of-a-butterfly-with-colorful-paint-splats-on-image_2571231.jpg'
              className='d-block w-100'
              alt='...'
              style={{ height: "600px" }}
            />
            <div className='carousel-caption d-none d-md-block'>
              <h5 className='text-white'>Second slide label</h5>
              <p className='text-white'>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className='carousel-item'>
            <img
              src='https://i.pinimg.com/originals/ff/18/ff/ff18ff882e8ff216e0bd5b866ea5cc80.jpg'
              className='d-block w-100'
              alt='...'
              style={{ height: "600px" }}
            />
            <div className='carousel-caption d-none d-md-block'>
              <h5 className='text-white'>Third slide label</h5>
              <p className='text-white'>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleDark'
          data-bs-slide='prev'
        >
          <span className='carousel-control-prev-icon' aria-hidden='true' />
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleDark'
          data-bs-slide='next'
        >
          <span className='carousel-control-next-icon' aria-hidden='true' />
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </>
  );
};
