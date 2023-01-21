import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Chef.css';


function Chef() {
  return (
    <div className="app__bg app__wrapper section__padding" >
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="chef" />
      </div>

      <div className="app__wrapper_info">
        <SubHeading title="chefs word" />
        <h1 className="headtext__cormorant">What we believe in</h1>

        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote" />
            <p className="p__opensans">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            
          </div>
          <p className="p__opensans"> Assumenda sed, illo obcaecati adipisci id voluptatibus aliquid quisquam soluta dolore fuga ab dicta 
          tempore sequi sint nostrum tempora voluptas perferendis placeat totam. Voluptatum, 
          blanditiis inventore aliquid dolores quis earum odio sapiente, sit accusamus soluta nostrum laborum iste est quam neque ratione?</p>
        </div>
        
        <div className="app__chef-sign">
          <p>Kevin Luo</p>
          <p className="p__opensans"> Chef & Founders</p>
          <img src={images.sign} alt="sign" />
        </div>

      </div>        
    </div>
  );
}

export default Chef;