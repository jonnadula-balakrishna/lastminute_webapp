import React from 'react'

const HomePage = () => {
  return (
    <div>
        <div className="dark-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="content-box">
                <h3 className="content-title">Responsive Design</h3>
                <p className="content-text">
                  Our design adjusts seamlessly to different screen sizes, ensuring a great user experience on any device.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="content-box">
                <h3 className="content-title">Modern Look</h3>
                <p className="content-text">
                  Clean, modern design elements that make your website look professional and up-to-date.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="content-box">
                <h3 className="content-title">Easy Customization</h3>
                <p className="content-text">
                  Easily customize the layout and styles to fit your brand’s unique identity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage