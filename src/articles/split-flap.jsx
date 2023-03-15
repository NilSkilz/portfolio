
const article = () => {
	return(
		<div className="row g-5">
            <div className="col-lg-8">
                <div className="row g-4">
                    <div className="col-lg-12 item">
                        <img src="./img/single-gallery/pf-2-1.jpg" alt="galleryimage" className="img-fluid"/>
                    </div>
                    <div className="col-lg-6 item">
                        <img src="./img/single-gallery/pf-2-2.jpg" alt="galleryimage" className="img-fluid"/>
                    </div>
                    <div className="col-lg-6 item">
                        <img src="./img/single-gallery/pf-2-3.jpg" alt="galleryimage" className="img-fluid"/>
                    </div>
                    <div className="col-lg-12 item">
                        <img src="./img/single-gallery/pf-2-4.jpg" alt="galleryimage" className="img-fluid"/>
                    </div>
                    <div className="col-lg-6 item">
                        <img src="./img/single-gallery/pf-2-5.jpg" alt="galleryimage" className="img-fluid"/>
                    </div>
                    <div className="col-lg-6 item">
                        <img src="./img/single-gallery/pf-2-6.jpg" alt="galleryimage" className="img-fluid"/>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 de_project-info">
                <h3>Rob Test</h3>
                <p>Duis ad adipisicing id id in duis nisi qui veniam esse voluptate cillum pariatur cupidatat ut dolore amet aliquip cillum ad minim cillum nulla consectetur dolor culpa deserunt mollit dolor ea pariatur laboris sed tempor laboris quis commodo. Ut duis cupidatat consectetur cillum veniam eu quis minim irure fugiat ut consequat do veniam duis dolor quis cupidatat deserunt ut qui minim id dolor nisi sed non ut proident enim culpa dolor elit dolor aliquip dolore enim excepteur.</p>
                
                <div className="de_project-details">
                    <div className="d-field">
                        <i className="fa fa-user-o"></i>Client: <span>Envato</span>
                    </div>
                    <div className="d-field">
                        <i className="fa fa-file-text-o"></i>Type: <span>Branding</span>
                    </div>
                    <div className="d-field">
                        <i className="fa fa-calendar-o"></i>Year: <span>2020</span>
                    </div>
                    <div className="d-field">
                        <i className="fa fa-external-link"></i>Preview: <span><a href="https://www.envato.com" target="_blank" rel="noreferrer">www.envato.com</a></span>
                    </div>
                </div>
                <div className="spacer-30"></div>
                <blockquote>
                    "Very well done theme. Versatile, extremely well coded, and gorgeous. That's a great combo. Highly recommended."
                    <span>John Archi</span>
                </blockquote>
            </div>
        </div>
	);
}

export default article;