import React from 'react';
import { Parallax, Button } from 'react-materialize';
import coding from '../images/coding.jpg'
import sote from '../images/sote.png'
import mytrax from '../images/mytrax.png'
import wayfarer from '../images/wayfarer.png'
import aniblitz from '../images/aniblitz.png'

const Projects = (props) => {
  return (
    <div className="" id="projects">
      <Parallax
        image={<img alt="coding" src={ coding }/>}
        options={{
          responsiveThreshold: 0
        }}
      />
      <div className="section black container">
        <h2 className="header">
          Projects
        </h2>
        {/* SONS OF THUNDER ELECTRICAL */}
        <div className="row proj" id="aniblitz">
          <div className="col s12 m6">
            <img 
              src={ sote } 
              width="450px"
              className="proj-img"
            />
            <div>
              <Button
                href="https://sot-electrical.herokuapp.com/"
                target="_blank"
                node="a"
                waves="light"
                className="black btns"
              >
                Live App
              </Button>
              <Button
                href="https://github.com/onias17/sonsofthunder"
                target="_blank"
                node="a"
                waves="light"
                className="black btns"
              >
                GitHub
              </Button>
            </div>
          </div>
          <div className="col s12 m6" >
            <h4 className="center">Sons of Thunder Electrical</h4>
            <p>A football themed version of the famous 90’s game Tamagotchi. Users must interact with their AniBLitz! character to prevent them from dying.</p>
            <p>*Best viewed in browser</p>
            <h5>Technologies Used</h5>
            <p>HTML5 | CSS | JavaScript</p>
          </div>
        </div>
        {/* MYTRAX */}
        <div className="row proj" id="mytrax">
          <div className="col s12 m6" >
            <h4 className="center">myTrax</h4>
            <p>A music app where users can create playlists of their favorite tracks and genre and share it with others. Users can also listen to Spotify and YouTube tracks directly from the app.</p>
            <h5>Technologies Used</h5>
            <p>HTML5 | CSS | Bootstrap | JavaScript | Express | Node | MongoDB | Mongoose</p>
          </div>
          <div className="col s12 m6">
            <img 
              src={ mytrax } 
              width="450px"
              className="proj-img"
            />
            <div>
              <Button
                href="https://enigmatic-cliffs-18729.herokuapp.com/"
                target="_blank"
                node="a"
                waves="light"
                className="black btns"
              >
                Live App
              </Button>
              <Button
                href="https://github.com/onias17/mytrax"
                target="_blank"
                node="a"
                waves="light"
                className="black btns"
              >
                GitHub
              </Button>
            </div>
          </div>
        </div>
        {/* WAYFARER */}
        <div className="row proj" id="aniblitz">
          <div className="col s12 m6">
            <img 
              src={ wayfarer } 
              width="450px"
              className="proj-img"
            />
            <div>
              <Button
                href="https://wayfarer-20.herokuapp.com/"
                target="_blank"
                node="a"
                waves="light"
                className="black btns"
              >
                Live App
              </Button>
              <Button
                href="https://github.com/onias17/wayfarer"
                target="_blank"
                node="a"
                waves="light"
                className="black btns"
              >
                GitHub
              </Button>
            </div>
          </div>
          <div className="col s12 m6" >
            <h4 className="center">Wayfarer</h4>
            <p>A football themed version of the famous 90’s game Tamagotchi. Users must interact with their AniBLitz! character to prevent them from dying.</p>
            <h5>Technologies Used</h5>
            <p>HTML5 | CSS | JavaScript</p>
          </div>
        </div>
        {/* ANIBLITZ */}
        <div className="row proj" id="mytrax">
          <div className="col s12 m6" >
            <h4 className="center ani-head">AniBlitz!</h4>
            <p>A football themed version of the famous 90’s game Tamagotchi. Users must interact with their AniBLitz! character to prevent them from dying.</p>
            <p>*Best viewed in browser</p>
            <h5 className="ani-head2">Technologies Used</h5>
            <p>HTML5 | CSS | JavaScript</p>
          </div>
          <div className="col s12 m6">
            <img 
              src={ aniblitz } 
              width="450px"
              className="proj-img"
            />
            <div>
              <Button
                href="https://onias17.github.io/tamagatchi/"
                target="_blank"
                node="a"
                waves="light"
                className="btns ani-btn"
              >
                Live App
              </Button>
              <Button
                href="https://github.com/onias17/tamagatchi"
                target="_blank"
                node="a"
                waves="light"
                className="btns ani-btn"
              >
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Parallax
        image={<img alt="" src="http://materializecss.com/images/parallax2.jpg"/>}
        options={{
          responsiveThreshold: 0
        }}
      />
    </div>
  );
};

export default Projects;