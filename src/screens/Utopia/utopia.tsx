import React from "react";
import "./style.css";

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!--fonts-->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
  <link
    href="https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Press+Start+2P&display=swap"
    rel="stylesheet">
  <link rel="stylesheet" href="./style.css">

  <title>sophia's site</title>
  <style>

  </style>
</head>

<body>
  <div class="container">

    <!--ads-->
    <div class="row">
      <div class="carousel-wrapper">
        <div class="carousel">
          <img src="https://i.imgur.com/cSgZIfM.jpeg" alt="Cricket Ad">
          <img src="https://i.imgur.com/BvVKWfa.gif" alt="Pizza Hut Ad">
          <img src="https://i.imgur.com/k6IKQZj.gif" alt="Match.com Ad">
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">

        <!--bio section-->
        <img class="profilePhoto" src="https://i.imgur.com/5nuddz0.jpeg" alt="Photo 1">
        <p class="metaText"> Last Login: 09-07-04 </p>
        <button id="friendButton" class="friend-button">Add Friend</button>

        <h1 class="titleStyling spacing"> Hai! My name is Sophia.</h1>
        <p class="text">Welcome to my page! Hope you stay a while<3< /p>
            <p class="text">Click around a bit to see more about me!</p>

            <!--songs section-->
            <div class="songs">
              <h1 class="titleStyling"> my favorite songs!</h1>
              <ul>
                <li>
                  <p class="text"> Light - Polyphia <a href="https://youtu.be/_x5_9SD0SqM?si=9FDlW5ynv8xUlE_1"
                      target="_blank"> <button class="play-button" id="playButton">Play</button> </a></p>
                </li>
                <li>
                  <p class="text"> Best Friend - Saweetie, Doja Cat <a
                      href="https://youtu.be/i85LB0tdYcY?si=EcHBnVXPcCe8u097" target="_blank"> <button
                        class="play-button" id="playButton">Play</button> </a></p>
                </li>
                <li>
                  <p class="text"> Afterthought - Joji, Benee <a href="https://youtu.be/0cNxrVaghlE?si=iFrMcudzC3Hmlcoj"
                      target="_blank"> <button class="play-button" id="playButton">Play</button> </a></p>
                </li>
                <li>
                  <p class="text"> THE DEATH OF PEACE OF MIND - Bad Omens <a
                      href="https://youtu.be/ouW_RCAI0sg?si=tEJkBdAg-T5TozEn" target="_blank"> <button
                        class="play-button" id="playButton">Play</button> </a></p>
                </li>
              </ul>
            </div>

            <!--haikus section-->
            <div class="haikus spacing">
              <h1 class="titleStyling"> funny, stupid & spooky haikus </h1>
              <div class="haiku-wrapper">
                <p class="textFix haikuStyling">Phone’s battery low, </br>
                  charger’s in the other room— </br>
                  exercise is real.</p>
                <button class="thumbs-up" data-haiku="1">👍</button>
                <button class="thumbs-down" data-haiku="1">👎</button>
              </div>
              <div class="haiku-wrapper">
                <p class="textFix haikuStyling">Cat’s latest mischief, </br>
                  paw prints on the keyboard— </br>
                  typing out a novel.</p>
                <button class="thumbs-up" data-haiku="2">👍</button>
                <button class="thumbs-down" data-haiku="2">👎</button>
              </div>
              <div class="haiku-wrapper">
                <p class="textFix haikuStyling">Burnt my toast again, </br>
                  smoke alarm’s morning greeting— </br>
                  breakfast has a beat.</p>
                <button class="thumbs-up" data-haiku="2">👍</button>
                <button class="thumbs-down" data-haiku="2">👎</button>
              </div>
              <div class="haiku-wrapper">
                <p class="textFix haikuStyling">Mirror cracks at dawn, </br>
                  face behind the glass now grins— </br>
                  is it really me?</p>
                <button class="thumbs-up" data-haiku="2">👍</button>
                <button class="thumbs-down" data-haiku="2">👎</button>
              </div>
              <div class="haiku-wrapper">
                <p class="textFix haikuStyling">Creepy lullabies, </br>
                  played on a music box’s— </br>
                  broken, haunted tune.</p>
                <button class="thumbs-up" data-haiku="2">👍</button>
                <button class="thumbs-down" data-haiku="2">👎</button>
              </div>
              <div class="haiku-wrapper">
                <p class="textFix haikuStyling">Under the bed’s edge, </br>
                  eyes glow in the darkness— </br>
                  don’t look, just don’t look down.</p>
                <button class="thumbs-up" data-haiku="2">👍</button>
                <button class="thumbs-down" data-haiku="2">👎</button>
              </div>
            </div>

            <!-- socials section -->
            <div class="socials">
              <h1 class="titleStyling spacing"> join me on twitch for scary games!</h1>
              <a href="https://twitch.tv/utopiastreemz" class="twitch-button" target="_blank">
                <img src="https://i.imgur.com/QPCQjgW.png" alt="Twitch Logo">
                follow utopiastreemz
              </a>
            </div>
      </div>

      <div class="column">

        <!--friends list section-->
        <div class="friendsList">
          <h1 class="titleStyling"> my best friends </h1>
          <ul style="color: #E492C8;">
            <li>
              <p class="text"> khage_music </p>
            </li>
            <li>
              <p class="text"> jinjojunimo </p>
            </li>
            <li>
              <p class="text"> miixplays</p>
            </li>
          </ul>
        </div>

        <!--interests section-->
        <div class="interests">
          <h1 class="titleStyling"> other interests </h1>

          <!--games section-->
          <h2 class="subtitle"> Games </h2>
          <p class="text"> Anything SCARY! </p>
          <ul style="color: #E492C8;">
            <li>
              <p class="text"> Morbid </p>
            </li>
            <p class="textFix"> Inspired by H.P. Lovecraft, the game features familiar settings—from fishing hamlets to
              industrial cities—along with nightmarish environments that complete the horror trope. The enemies fit well
              within these settings, and your main task is to hunt down the seven Acolytes. </p>
            <li>
              <p class="text"> Dead by Daylight </p>
            </li>
            <p class="textFix"> An asymmetrical horror game where one player is the Killer and the other four are
              Survivors. Matches are referred to as trials. The Survivors' objective is to escape the trial by repairing
              five of seven generators scattered throughout it to power the two exit gates. </p>
            <li>
              <p class="text"> SIFU </p>
            </li>
            <p class="textFix"> Set in China, players control the child of a martial arts school's sifu (master) who
              seeks revenge on those responsible for their father's death. Every time the protagonist dies, they are
              resurrected by a magical talisman and age up, gaining access to more powerful attacks but reducing their
              health. </p>
            <h2> check out this video i love! </h2>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/dxIJBvACjdE?si=e7emEGTfc8T-QRGx"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </ul>

          <!--movies section-->
          <h2 class="subtitle spacing"> Movies </h2>
          <p class="text"> ALSO anything scary! </p>
          <ul>
            <li>
              <p class="text"> The First Omen</p>
            </li>
            <p class="text textFix">When a young American woman is sent to Rome to begin a life of service to the
              church, she encounters a darkness that causes her to question her own faith and uncovers a terrifying
              conspiracy that hopes to bring about the birth of evil incarnate.</p>
            <li>
              <p class="text"> Insidious: The Red Door </p>
            </li>
            <p class="text textFix">INSIDIOUS is the terrifying story of a family who, shortly after moving, discovers
              that dark spirits have possessed their home and that their son has inexplicably fallen into a coma.</p>
            <li>
              <p class="text"> The Nun 2 </p>
            </li>
            <p class="text textFix">A priest is murdered. An evil is spreading. The sequel to the worldwide smash hit
              follows Sister Irene as she once again comes face-to-face with Valak, the demon nun..</p>
          </ul>
        </div>
      </div>
    </div>

</body>

</html>