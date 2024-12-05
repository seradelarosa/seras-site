import React from "react";
import "./script";
import "./style.css";

const UtopiaPage: React.FC = () => {
  return (
    <div>
      <title>sophia's site</title>

      <div className="container">
        {/* ads */}
        <div className="row">
          <div className="carousel-wrapper">
            <div className="carousel">
              <img src="https://i.imgur.com/cSgZIfM.jpeg" alt="Cricket Ad" />
              <img src="https://i.imgur.com/BvVKWfa.gif" alt="Pizza Hut Ad" />
              <img src="https://i.imgur.com/k6IKQZj.gif" alt="Match.com Ad" />
            </div>
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="column">
          {/* bio section */}
          <img
            className="profilePhoto"
            src="https://i.imgur.com/5nuddz0.jpeg"
            alt="Photo 1"
          />
          <p className="metaText"> Last Login: 09-07-04 </p>
          <button id="friendButton" className="friend-button">
            Add Friend
          </button>

          <h1 className="titleStyling spacing"> Hai! My name is Sophia.</h1>
          <p className="text">Welcome to my page! Hope you stay a while</p>
          <p className="text">Click around a bit to see more about me!</p>

          {/* songs section */}
          <div className="songs">
            <h1 className="titleStyling"> my favorite songs!</h1>
            <ul>
              <li>
                <p className="text">
                  Light - Polyphia{" "}
                  <a
                    href="https://youtu.be/_x5_9SD0SqM?si=9FDlW5ynv8xUlE_1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="play-button" id="playButton">
                      Play
                    </button>
                  </a>
                </p>
              </li>
              <li>
                <p className="text">
                  Best Friend - Saweetie, Doja Cat{" "}
                  <a
                    href="https://youtu.be/i85LB0tdYcY?si=EcHBnVXPcCe8u097"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="play-button" id="playButton">
                      Play
                    </button>
                  </a>
                </p>
              </li>
              <li>
                <p className="text">
                  Afterthought - Joji, Benee{" "}
                  <a
                    href="https://youtu.be/0cNxrVaghlE?si=iFrMcudzC3Hmlcoj"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="play-button" id="playButton">
                      Play
                    </button>
                  </a>
                </p>
              </li>
              <li>
                <p className="text">
                  THE DEATH OF PEACE OF MIND - Bad Omens{" "}
                  <a
                    href="https://youtu.be/ouW_RCAI0sg?si=tEJkBdAg-T5TozEn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="play-button" id="playButton">
                      Play
                    </button>
                  </a>
                </p>
              </li>
            </ul>
          </div>

          {/* haikus section */}
          <div className="haikus spacing">
            <h1 className="titleStyling"> funny, stupid & spooky haikus </h1>
            <div className="haiku-wrapper">
              <p className="textFix haikuStyling">Phone’s battery low, </p>
              <p>charger’s in the other room— </p>
              <p>exercise is real.</p>
              <button className="thumbs-up" data-haiku="1">
                👍
              </button>
              <button className="thumbs-down" data-haiku="1">
                👎
              </button>
            </div>
            <div className="haiku-wrapper">
              <p className="textFix haikuStyling">Cat’s latest mischief, </p>
              <p>paw prints on the keyboard— </p>
              <p>typing out a novel.</p>
              <button className="thumbs-up" data-haiku="2">
                👍
              </button>
              <button className="thumbs-down" data-haiku="2">
                👎
              </button>
            </div>
            <div className="haiku-wrapper">
              <p className="textFix haikuStyling">Burnt my toast again, </p>
              <p>smoke alarm’s morning greeting— </p>
              <p>breakfast has a beat.</p>
              <button className="thumbs-up" data-haiku="3">
                👍
              </button>
              <button className="thumbs-down" data-haiku="3">
                👎
              </button>
            </div>
            <div className="haiku-wrapper">
              <p className="textFix haikuStyling">Mirror cracks at dawn, </p>
              <p>face behind the glass now grins</p>
              <p>is it really me?</p>
              <button className="thumbs-up" data-haiku="4">
                👍
              </button>
              <button className="thumbs-down" data-haiku="4">
                👎
              </button>
            </div>
            <div className="haiku-wrapper">
              <p className="textFix haikuStyling">Creepy lullabies, </p>
              <p>played on a music box’s— </p>
              <p>broken, haunted tune.</p>
              <button className="thumbs-up" data-haiku="5">
                👍
              </button>
              <button className="thumbs-down" data-haiku="5">
                👎
              </button>
            </div>
            <div className="haiku-wrapper">
              <p className="textFix haikuStyling">Under the bed’s edge, </p>
              <p>eyes glow in the darkness— </p>
              <p>don’t look, just don’t look down.</p>
              <button className="thumbs-up" data-haiku="6">
                👍
              </button>
              <button className="thumbs-down" data-haiku="6">
                👎
              </button>
            </div>
          </div>

          {/* socials section */}
          <div className="socials">
            <h1 className="titleStyling spacing">
              join me on twitch for scary games!
            </h1>
            <a
              href="https://twitch.tv/utopiastreemz"
              className="twitch-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://i.imgur.com/QPCQjgW.png"
                alt="Twitch Logo"
              />
              follow utopiastreemz
            </a>
          </div>
        </div>

        <div className="column">
          {/* friends list section */}
          <div className="friendsList">
            <h1 className="titleStyling"> my best friends </h1>
            <ul style={{ color: "#E492C8" }}>
              <li>
                <p className="text"> khage_music </p>
              </li>
              <li>
                <p className="text"> jinjojunimo </p>
              </li>
              <li>
                <p className="text"> miixplays</p>
              </li>
            </ul>
          </div>

          {/* interests section */}
          <div className="interests">
            <h1 className="titleStyling"> other interests </h1>

            {/* games section */}
            <h2 className="subtitle"> Games </h2>
            <p className="text"> Anything SCARY! </p>
            <ul style={{ color: "#E492C8" }}>
              <li>
                <p className="text"> Morbid </p>
              </li>
              <p className="textFix">
                Inspired by H.P. Lovecraft, the game features familiar
                settings—from fishing hamlets to industrial cities—along with
                nightmarish environments that complete the horror trope. The
                enemies fit well within these settings, and your main task is to
                hunt down the seven Acolytes.
              </p>
              <li>
                <p className="text"> Dead by Daylight </p>
              </li>
              <p className="textFix">
                An asymmetrical horror game where one player is the Killer and
                the other four are Survivors. The Survivors must escape while
                the Killer tries to capture them.
              </p>
            </ul>

            {/* more games */}
            <h2 className="subtitle"> More Games </h2>
            <ul style={{ color: "#E492C8" }}>
              <li>
                <p className="text"> My Friend Pedro </p>
              </li>
              <li>
                <p className="text"> Phasmophobia </p>
              </li>
              <li>
                <p className="text"> Resident Evil </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UtopiaPage;
