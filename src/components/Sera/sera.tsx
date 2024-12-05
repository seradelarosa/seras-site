import React from "react";
import "./style.css";

const SeraPage = (): JSX.Element => {
  return (
    <div className="sera-page">
      <body>
        <div className="margin">

          <header className="topic">
            <h1>sophia de la rosa</h1>

            <nav>
              {/* <a href="#portfolio" onclick="scrollToSection('portfolio'); return false;"> </a>
          <a href="#experience" onclick="scrollToSection('experience'); return false;"> </a> */}
              <button>portfolio</button>
              <button>experience</button>
            </nav>
          </header>

          <div className="background">
            <div id="aboutme" className="topic">

              <h2>about me:</h2>
              <div className="inline">
                <img id="profilepic" src="https://i.imgur.com/DQ4lGot.jpeg" alt="Profile Picture"></img>
                <div className="stack">
                  <p id="profile-paragraph">Hi, my name is Sophia! By day, I'm a part-time Software Developer I at a small tech
                    startup in Atlanta, GA. By night, I'm Utopia, the Twitch streamer and gamer.<br />
                    <br /> My hobbies and skills all revolve around technology and work hand-in-hand together. From video editing,
                    to Remote Workflow Technology Leader; from computer building to coding; from video game player, to debugger
                    and tester, to Blender and Unity asset design; from Virtual Reality to AI development pioneering. Everything
                    I've been doing has led up to this moment and I'm so ready to get started.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="background">
            <div id="portfolio" className="topic">
              <h2>portfolio</h2>
              <h3>Dungeons & Devs v.2</h3>
              <p>This is a pixel-style mobile game inspired by the game Dungeons & Dragons but with a developer twist. The
                objective is to battle and defeat a boss using code snippets. After three defeated bosses, the user can level
                up, unlock the next location and more advanced code snippets.</p>
              <a href="https://www.dropbox.com/s/c4yrfb1pfmcqxel/finalproject.mp4?dl=0"> <button>Demo</button> </a>
              <a href="https://github.com/hackpres/DnDevs_React"> <button>Repo</button> </a>

              <h3>Progressive Web Application Text Editor</h3>
              <p>This is a single page text editor application that runs in the browser and meets the PWA criteria. It features
                data persistence techniques that serve as redundancy in case one of the options is not supported by the browser.
                The application also functions offline.</p>
              <a href="https://www.dropbox.com/s/abnflpti6d2emjg/19-PWA-text-editor.mp4?dl=0"> <button>Demo</button> </a>
              <a href="https://github.com/sophiadelarosa/19-PWA-text-editor"> <button>Repo</button> </a>

              <h3>NoSQL Social Networking App</h3>
              <p>This is an API for a social network web application where users can share their thoughts, react to friends
                thoughts, and create a friend list. It uses Express.js for routing, a MongoDB database, the Mongoose ODM, and
                the native JavaScript Date object to format timestamps.</p>
              <a href="https://www.dropbox.com/s/ubuezk0sg6hi4xt/18-No-SQL-API.mp4?dl=0"> <button>Demo</button> </a>
              <a href="https://github.com/sophiadelarosa/18-NoSQL-Social-Network-API"> <button>Repo</button> </a>

              <h3>Dungeons & Devs v.1</h3>
              <p>Dungeons & Devs is a turn-based battle game. The user chooses from a character list, each with different
                strengths, and battles a boss using cards that boost various character stats.</p>
              <a href="https://dn-devs-react.vercel.app/"> <button>Demo</button> </a>
              <a href="https://github.com/wtguenthner/Dungeons-Devs"> <button>Repo</button> </a>

              <h3>Object-relational mapping (ORM) E-Commerce back-end</h3>
              <p>Use this CLI application to manage your internet retail company's database and easily view all or individual
                categories, products and tags, create new ones or delete them. This e-commerce site back end uses an Express.js
                API and Sequelize to interact with a MySQL database.</p>
              <a href="https://www.dropbox.com/s/dc0te6egx24dlr8/ORMretailbackenddemo.mp4?dl=0"> <button>Demo</button> </a>
              <a href="https://github.com/sophiadelarosa/ORM-E-Commerce-Back-End"> <button>Repo</button> </a>

              <h3>Express.js Note Taker</h3>
              <p>This Note Taker application can be used to write and save notes using an Express.js back end and will save and
                retrieve note data from a JSON file. Clone the repository and install Node. Run "npm i" to install the
                dependencies and then "npm start" to run the server. This server runs on port 5000. View the page by typing
                "localhost:5000" in your browser.</p>
              <a href="https://github.com/sophiadelarosa/Express.js-Note-Taker"> <button>Repo</button> </a>

              <h3>Object-Oriented Programming Team Profile Generator</h3>
              <p>This is a Node.js command-line application that takes in information about employees on a software engineering
                team, then generates an HTML webpage that displays summaries for each person. This application uses Jest for
                testing.</p>
              <a href="https://www.dropbox.com/s/hcjlbvinlwxzm49/teamprofilegeneratordemo.mp4?dl=0"> <button>Demo</button> </a>
              <a href="https://github.com/sophiadelarosa/Node.js-CLI-Team-Profile-Generator"> <button>Repo</button> </a>

              <h3>Music Discovery App</h3>
              <p>IMDA is an international music discovery app. It utilizes Spotify's API to search for songs by country and
                genre, which the user is then able to favorite and view in their favorites list on their profile page.</p>
              <a href="https://sophiadelarosa.github.io/Music-Discovery-App/"> <button>Demo</button> </a>
              <a href="https://github.com/sophiadelarosa/Music-Discovery-App"> <button>Repo</button> </a>


              <h3> Day Planner using Third-Party APIs </h3>
              <p>
                Use this simple planner to schedule your day by filling in tasks into the hour timeblocks. The date is listed at
                the top of the page and will always be correct. Hitting the save button after writing in the textbox will save
                your input, even on refreshing the page. Hour blocks are color coded based on the current time, which updates
                every 15 seconds. Past timeblocks have a gray tab, future timeblocks are tabbed in green and the current
                timeblock is highlighted in yellow.
              </p>
              <a href="https://sophiadelarosa.github.io/Moment.js-Workday-Scheduler/">
                <button> Demo </button>
              </a>
              <a href="https://github.com/sophiadelarosa/Moment.js-Workday-Scheduler">
                <button> Repo </button>
              </a>

              <h3> Web API Code Quiz </h3>
              <p>
                This quiz displays one question at a time using a function to replace the main content with question items in an
                array. Points are tallied and your score is shown at the end. You can input your initials and the initials and
                score are added to a highscore board from local storage. A timer starts at the beginning of the quiz, and when
                it reaches zero, the endQuiz() function is called.
              </p>
              <a href="https://sophiadelarosa.github.io/Web-API-Code-Quiz/">
                <button> Demo </button>
              </a>
              <a href="https://github.com/sophiadelarosa/Web-API-Code-Quiz">
                <button> Repo </button>
              </a>

              <h3> JavaScript Password Generator </h3>
              <p>
                This generator uses a function to generate a random number which is used to select characters in dataset
                strings. Each dataset string is only included if the user confirms the criteria. The new randomized password is
                then returned to the textbox on the page.
              </p>
              <a href="https://sophiadelarosa.github.io/Password-Generator/">
                <button> Demo </button>
              </a>
              <a href="https://github.com/sophiadelarosa/Password-Generator">
                <button> Repo </button>
              </a>

            </div>
          </div>

          <div className="background">
            <div id="experience" className="topic">


              <div className="section">
                <h2> experience </h2>
                <h3> Production Assistant </h3>
                <h4> CNN | Atlanta, GA </h4>
                <p>
                  Editing and distributing news video to CNN affiliates using Premiere Pro.
                </p>
              </div>

              <div className="section">
                <h2> achievements </h2>
                <p> &#8226; CNN AI manual testing and shadowing testing automation. </p>
                <p> &#8226; CNN internal application library UI development, maintenance and debugging. </p>
                <p> &#8226; CNN Atlanta video library cloud consolidation and back-end development shadowing. </p>
                <p> &#8226; CNN Tech Training VDI transition assistance and training, Premiere 2020 implementation guidance and
                  editing workflow transition support. </p>
                <p> &#8226; Remote Workforce Technology Team Lead: Identified and determined strategy to address hybrid workflow
                  technological needs across east coast CNN bureaus. </p>
                <p> &#8226; Production team pioneer remote workflow tester. </p>
                <p> &#8226; Avid Mediacentral web-based iNews application testing. </p>
              </div>

              <div className="section">
                <h2> education </h2>
                <h3> Georgia Institute of Technology, 2022 </h3>
                <p> Full Stack Flex Web Development </p>
                <h3> Texas State University, 2017 </h3>
                <p> Journalism, International Studies </p>
              </div>

              <div className="section">
                <h2> workshops </h2>
                <p> QA Engineering </p>
                <p> JavaScript Basics </p>
                <p> Python Basics </p>
              </div>

              <div className="section">
                <h2> expertise </h2>
                <p> JavaScript </p>
                <p> Technology Project Management </p>
                <p> Jest testing </p>
                <p> React </p>
                <p> UI Design </p>
                <p> Node.js, Express.js </p>
                <p> Object-Oriented Programming </p>
                <p> Model-View-Controller </p>
                <p> mySQL, noSQL </p>
                <p> MongoDB </p>
                <p> Mongoose </p>
                <p> APIs </p>
              </div>

              <a href="https://i.imgur.com/wmGvrsH.png" download="SophiaDeLaRosa.pdf">
                <button id="resume"> download her resume here </button>
              </a>

            </div>
          </div>
        </div>

      </body>

      {/* <a href="#top" onclick="scrollToSection('top'); return false;">
    <button className="backtotop">^back to top^</button>
  </a> */}

    </div >

  );
};

export default SeraPage;