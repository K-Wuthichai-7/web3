import "../App.css";
export const AboutCmponent = () => {
  return (
    <>
      <section className='bg-light py-5'>
        <div className='container px-5'>
          <div className='row gx-5 justify-content-center'>
            <div className='col-xxl-8'>
              <div className='text-center my-5'>
                <h2 className='display-5 fw-bolder'>
                  <span className='text-gradient d-inline'>About Me</span>
                </h2>
                <p className='lead fw-light mb-4'>
                  My name is Mr. Wutthichai Khamnon.
                </p>
                <p className='text-muted'>
                  Hello My name is Wutthichai Khamnon or you can call me "Get"
                  I'm 26 years old. I always like to learn someting new. I can
                  use html css javascript to create a website. l looking for job
                  web developer.
                </p>
                <div className='d-flex justify-content-center fs-2 gap-4'>
                  <a className='text-gradient' href='#!'>
                    <i className='bi bi-twitter'></i>
                  </a>
                  <a className='text-gradient' href='#!'>
                    <i className='bi bi-linkedin'></i>
                  </a>
                  <a className='text-gradient' href='#!'>
                    <i className='bi bi-github'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
