import {useState, lazy, Suspense} from 'react';
import Masonry from "react-masonry-component";
import { createGlobalStyle } from 'styled-components';
import AOS from 'aos';
// import SplitFlap from '../articles/split-flap.jsx'
AOS.init();

const GlobalStyles = createGlobalStyle`
    body.hide{
          overflow-y: hidden; /* Hide vertical scrollbar */
          overflow-x: hidden; /* Hide horizontal scrollbar */
        }
`;

const data = [{
    title: 'Little Printer',
    type: 'Open Source Project',
    image: 'https://static.dezeen.com/uploads/2014/09/Little-Printer-by-BERG.jpg',
    component: '../articles/split-flap'
},
{
    title: 'Split Flap Display',
    type: 'Open Source Project',
    image: 'https://images.squarespace-cdn.com/content/v1/5c0c25e45b409b8fba29c0b4/1544397154585-GL25PIUKAP2U6JFNRU33/image-asset.png?format=2500w'
},
{
    title: 'Touche Screen Smart Mirror',
    type: 'Open Source Project',
    image: 'https://images.squarespace-cdn.com/content/v1/5c0c25e45b409b8fba29c0b4/1544397093617-6TM9JNZFT7X6YTUXFDTE/smartmirror.png?format=2500w'
}]

const Gallery= function() {

    const [Component, setComponent] = useState()

    /* lightbox */
    const [lighbx, setlighbx] = useState(false);
    const handleBtnClick = (componentPath): void => {
      setlighbx(!lighbx);
      const temp = lazy(() => import(componentPath));
      setComponent(temp)
      var x = document.getElementsByTagName("BODY")[0];
      x.style.overflow = "hidden";
    };
    const handleBtnClickclose = (): void => {
      setlighbx(!lighbx);
      var x = document.getElementsByTagName("BODY")[0];
      x.style.overflow = "auto";
    };

    return(
            <div className="container">
            <GlobalStyles/>
            
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2>Projects</h2>
                        <div className="space-border"></div>
                    </div>
                </div>
                 <Masonry
                    className={"row my-gallery-class"} elementType={"div"}>
                        {data.map(({title, type, image, component}) => 
                            <div className="col-lg-4 image-element-class de_modal de_modal" onClick={() => handleBtnClick(component)}
                            data-aos="fade-up"
                            data-aos-once="true"
                            >
                            <div className="card-image-1">
                                <div className="d-text">
                                    <h3>{title}</h3>
                                    <h5 className="d-tag">{type}</h5>
                                </div>
                                <img src={image} alt="gallery"/>
                            </div>
                        </div>
                        )}
                   
                  </Masonry>

                  {/* lightbox1 */}
                  {lighbx && ( 
                  <div className="LightboxGal">
                    <div className="closeGal">
                        <button className="button-close" onClick={handleBtnClickclose}></button>
                    </div>
                    <div className="v-center w-100">
                      <div className="mainLightbox container">
                      <Suspense fallback={<div>Loading...</div>}>
                        <Component/>
                        </Suspense>
                      </div>
                    </div>
                  </div>
                  )}

                

      </div>
    );
}

export default Gallery;