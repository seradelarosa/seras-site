import React from "react";
import "./style.css";




<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!--imports-->
    <link href="https://fonts.googleapis.com/css2?family=Swanky+and+Moo+Moo&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="./style.css">

    <title>Utopia's Cute Store - Homepage</title>
</head>

<body>

    <!--hamburger-->
    <div class="header">
        <span class="title">Utopia's Cute Store</span>
        <span class="subtitle">welcome!</span>
        <span class="hamburger" onclick="toggleMenu()">☰</span>
        <div class="menu">
            <a href="#home">Home</a>
            <a href="#pins">Pins</a>
            <a href="#badge-clips">Badge Clips</a>
            <a href="#plushies">Plushies</a>
            <a href="#lip-glosses">Lip Glosses</a>
            <a href="#profile">Profile</a>
        </div>
    </div>

    <!--Pins section-->
    <div class="container">
        <section id="pins" class="category">
            <h1><a class="section-link" href="#pins">Pins</a></h1>
            <div class="gallery">
                <div class="item">
                    <img src="https://i.imgur.com/Wfkgzg5.png" alt="Pin 1">
                    <span class="star" onclick="toggleFavorite(this)">★</span>
                    <div class="description">Cute pin featuring a kawaii design.</div>
                </div>
                <div class="item">
                    <img src="https://i.imgur.com/69VuaiS.png" alt="Pin 2">
                    <span class="star" onclick="toggleFavorite(this)">★</span>
                    <div class="description">Adorable pin with a fun pattern.</div>
                </div>
                <div class="item">
                    <img src="https://i.imgur.com/r5LTx7U.png" alt="Pin 3">
                    <span class="star" onclick="toggleFavorite(this)">★</span>
                    <div class="description">Charming pin with a unique design.</div>
                </div>
                <div class="item">
                    <img src="https://i.imgur.com/awZVxWg.png" alt="Pin 2">
                    <span class="star" onclick="toggleFavorite(this)">★</span>
                    <div class="description">Adorable pin with a fun pattern.</div>
                </div>
            </div>
        </section>

        <!--badge clips section-->
        <section id="badge-clips" class="category">
            <h1><a class="section-link" href="#badge-clips">Badge Clips</a></h1>
            <div class="gallery">
                <div class="item">
                    <img src="https://i.imgur.com/chrXWmj.png" alt="Badge Clip 1">
                    <span class="star" onclick="toggleFavorite(this)">★</span>
                    <div class="description">Badge clip description.</div>
                </div>
                <div class="item">
                    <img src="https://i.imgur.com/e74P6bg.png" alt="Badge Clip 2">
                    <span class="star" onclick="toggleFavorite(this)">★</span>
                    <div class="description">Another badge clip description.</div>
                </div>
                <div class="item">
                    <img src="https://i.imgur.com/UTXu1vU.png" alt="Badge Clip 3">
                    <span class="star" onclick="toggleFavorite(this)">★</span>
                    <div class="description">Yet another badge clip description.</div>
                </div>
                <div class="item">
                    <img src="https://i.imgur.com/JOUX9r3.png" alt="Badge Clip 3">
                    <span class="star" onclick="toggleFavorite(this)">★</span>
                    <div class="description">Yet another badge clip description.</div>
                </div>
            </div>
        </section>

        <!--plushies-->
        <section id="plushies" class="category">
            <h1><a class="section-link" href="#plushies">Plushies</a></h1>
            <div class="gallery">
                <div class="item">
                    <img src="https://i.imgur.com/afQSve7.png" alt="Plushie 1">
                    <span class="star" onclick="toggleFavorite(this)">★</span>
                    <div class="description">Plushie description.</div>
                </div>
                <div class="item">
                    <img src="https://i.imgur.com/1JHIuha.png" alt="Plushie 2">
                    <span class="star" onclick="toggleFavorite(this)">★</span>
                    <div class="description">Another plushie description.</div>
                </div>
                <div class="item">
                    <img src="https://i.imgur.com/oIu11pn.png" alt="Plushie 3">
                    <span class="star" onclick="toggleFavorite(this)">★</span>
                    <div class="description">Yet another plushie description.</div>
                </div>
                <div class="item">
                    <img src="https://i.imgur.com/aPYUhlH.png" alt="Plushie 3">
                    <span class="star" onclick="toggleFavorite(this)">★</span>
                    <div class="description">Yet another plushie description.</div>
                </div>
            </div>
        </section>

        <!--lip glosses-->
        <section id="lip-glosses" class="category">
            <h1><a class="section-link" href="#lip-glosses">Lip Glosses</a></h1>
            <div class="gallery">
                <div class="item">
                    <img src="https://i.imgur.com/vNpeEnN.png" alt="Lip Gloss 1">
                    <span class="star" onclick="toggleFavorite(this)">★</span>
                    <div class="description">Lip gloss description.</div>
                </div>
                <div class="item">
                    <img src="https://i.imgur.com/oWeri4W.png" alt="Lip Gloss 2">
                    <span class="star" onclick="toggleFavorite(this)">★</span>
                    <div class="description">Another lip gloss description.</div>
                </div>
                <div class="item">
                    <img src="https://i.imgur.com/uOW5pIq.png" alt="Lip Gloss 3">
                    <span class="star" onclick="toggleFavorite(this)">★</span>
                    <div class="description">Yet another lip gloss description.</div>
                </div>
                <div class="item">
                    <img src="https://i.imgur.com/g157ijV.png" alt="Lip Gloss 3">
                    <span class="star" onclick="toggleFavorite(this)">★</span>
                    <div class="description">Yet another lip gloss description.</div>
                </div>
            </div>
        </section>

        <!--favorites section-->
        <section id="profile" class="favorites">
            <h2><a class="section-link" href="#profile">Favorites</a></h2>
            <!-- Favorites will be added here -->
        </section>
    </div>