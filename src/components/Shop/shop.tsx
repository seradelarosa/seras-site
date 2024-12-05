import React from "react";
import ".";
import "./style.css";

const ShopPage: React.FC = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="header">
        <span className="title">Utopia's Cute Store</span>
        <span className="subtitle">welcome!</span>
        <span className="hamburger">☰</span>
        <div className="menu">
          <a href="#home">Home</a>
          <a href="#pins">Pins</a>
          <a href="#badge-clips">Badge Clips</a>
          <a href="#plushies">Plushies</a>
          <a href="#lip-glosses">Lip Glosses</a>
          <a href="#profile">Profile</a>
        </div>
      </div>

      {/* Pins Section */}
      <div className="container">
        <section id="pins" className="category">
          <h1>
            <a className="section-link" href="#pins">Pins</a>
          </h1>
          <div className="gallery">
            <div className="item">
              <img src="https://i.imgur.com/Wfkgzg5.png" alt="Pin 1" />
              <span className="star">★</span>
              <div className="description">Cute pin featuring a kawaii design.</div>
            </div>
            <div className="item">
              <img src="https://i.imgur.com/69VuaiS.png" alt="Pin 2" />
              <span className="star">★</span>
              <div className="description">Adorable pin with a fun pattern.</div>
            </div>
            <div className="item">
              <img src="https://i.imgur.com/r5LTx7U.png" alt="Pin 3" />
              <span className="star">★</span>
              <div className="description">Charming pin with a unique design.</div>
            </div>
            <div className="item">
              <img src="https://i.imgur.com/awZVxWg.png" alt="Pin 2" />
              <span className="star">★</span>
              <div className="description">Adorable pin with a fun pattern.</div>
            </div>
          </div>
        </section>

        {/* Badge Clips Section */}
        <section id="badge-clips" className="category">
          <h1>
            <a className="section-link" href="#badge-clips">Badge Clips</a>
          </h1>
          <div className="gallery">
            <div className="item">
              <img src="https://i.imgur.com/chrXWmj.png" alt="Badge Clip 1" />
              <span className="star">★</span>
              <div className="description">Badge clip description.</div>
            </div>
            <div className="item">
              <img src="https://i.imgur.com/e74P6bg.png" alt="Badge Clip 2" />
              <span className="star">★</span>
              <div className="description">Another badge clip description.</div>
            </div>
            <div className="item">
              <img src="https://i.imgur.com/UTXu1vU.png" alt="Badge Clip 3" />
              <span className="star">★</span>
              <div className="description">Yet another badge clip description.</div>
            </div>
            <div className="item">
              <img src="https://i.imgur.com/JOUX9r3.png" alt="Badge Clip 3" />
              <span className="star">★</span>
              <div className="description">Yet another badge clip description.</div>
            </div>
          </div>
        </section>

        {/* Plushies Section */}
        <section id="plushies" className="category">
          <h1>
            <a className="section-link" href="#plushies">Plushies</a>
          </h1>
          <div className="gallery">
            <div className="item">
              <img src="https://i.imgur.com/afQSve7.png" alt="Plushie 1" />
              <span className="star">★</span>
              <div className="description">Plushie description.</div>
            </div>
            <div className="item">
              <img src="https://i.imgur.com/1JHIuha.png" alt="Plushie 2" />
              <span className="star">★</span>
              <div className="description">Another plushie description.</div>
            </div>
            <div className="item">
              <img src="https://i.imgur.com/oIu11pn.png" alt="Plushie 3" />
              <span className="star">★</span>
              <div className="description">Yet another plushie description.</div>
            </div>
            <div className="item">
              <img src="https://i.imgur.com/aPYUhlH.png" alt="Plushie 3" />
              <span className="star">★</span>
              <div className="description">Yet another plushie description.</div>
            </div>
          </div>
        </section>

        {/* Lip Glosses Section */}
        <section id="lip-glosses" className="category">
          <h1>
            <a className="section-link" href="#lip-glosses">Lip Glosses</a>
          </h1>
          <div className="gallery">
            <div className="item">
              <img src="https://i.imgur.com/vNpeEnN.png" alt="Lip Gloss 1" />
              <span className="star">★</span>
              <div className="description">Lip gloss description.</div>
            </div>
            <div className="item">
              <img src="https://i.imgur.com/oWeri4W.png" alt="Lip Gloss 2" />
              <span className="star">★</span>
              <div className="description">Another lip gloss description.</div>
            </div>
            <div className="item">
              <img src="https://i.imgur.com/uOW5pIq.png" alt="Lip Gloss 3" />
              <span className="star">★</span>
              <div className="description">Yet another lip gloss description.</div>
            </div>
            <div className="item">
              <img src="https://i.imgur.com/g157ijV.png" alt="Lip Gloss 3" />
              <span className="star">★</span>
              <div className="description">Yet another lip gloss description.</div>
            </div>
          </div>
        </section>

        {/* Favorites Section */}
        <section id="profile" className="favorites">
          <h2>
            <a className="section-link" href="#profile">Favorites</a>
          </h2>
          {/* Favorites will be added here */}
        </section>
      </div>
    </div>
  );
};

export default ShopPage;
