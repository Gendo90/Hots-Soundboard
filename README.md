# Heroes of the Storm Soundboard

## Table of Contents
- [Introduction](#introduction)
- [Usage](#usage)
- [Planned Features](#planned-features)
- [Technologies](#technologies)

## Introduction
This application was developed as an educational, exhibition project to showcase my React and data science skills in a fully-functional, interactive project.  This is my first production React app, planned and developed on my own, because all the other React apps I have built so far have been guided by requirements or walkthroughs in online courses.

The app itself is a soundboard that will feature a few different Heroes of the Storm characters' quotes for endless replayability on demand. So far the only hero released is Tyrael, the Archangel of Justice from Diablo. That will change over time as more heroes are added to the application, when I have the spare time.

The sound files were sourced from quote compilation videos provided on Youtube by the user [Danserkk](https://www.youtube.com/channel/UCOjo_LxIJ0aKSwt4pOttPvA). These were broken into individual quotes from the selected characters, and then loaded into the app for playback!

The app itself is available online [here](https://hots-soundboard-8wbyfi7xp-patrickgendotti.vercel.app/) - enjoy!

## Usage

Using the app is fairly straightforward - simply click on the hero name tab you wish to view the soundboard for, and then navigate down the page to view the hero's available quotes, grouped by overall categories. 

Any of these quotes may be clicked to play the resulting sound clip, voiced by the hero themself! Sound clips can overlap in the current version of the app, so please wait for one sound bite to end before starting another, or else your hero will start saying the new sound clip before the other has ended.

The initial hero loaded into the application is Tyrael, who was the first character added!

## Planned Features

Some of the planned features that will improve the functionality and experience with this app are listed as follows:
- "Stop" playback button
- Improved loading of each sound clip (currently lazy-loaded, should be loaded in parallel all quotes for each hero only ~10 mb)
- Prevent overlap in playback when multiple buttons are pressed (interrupt previous quote and start new quote, ending previous quote playback)
- Additional heroes (currently thinking of Kerrigan, Greymane, Arthas, and [D.Va](#))

## Technologies