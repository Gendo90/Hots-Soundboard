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

The app itself is available online [here](https://hots-soundboard.vercel.app) - enjoy!

## Usage

Using the app is fairly straightforward - simply click on the hero name tab you wish to view the soundboard for, and then navigate down the page to view the hero's available quotes, grouped by overall categories. 

Any of these quotes may be clicked to play the resulting sound clip, voiced by the hero themself! You can click another quote while the first is playing to interrupt the first quote and start playback for the new quote. You can also press the Spacebar during any quote playback to stop the sound clip instantly.

The initial hero loaded into the application is Tyrael, who was the first character added!

## Planned Features

Some of the planned features that will improve the functionality and experience with this app are listed as follows:
- Improved loading of each sound clip (currently lazy-loaded, should be loaded in parallel all quotes for each hero only ~10 mb)
- Additional heroes (currently thinking of Kerrigan, Greymane, Arthas, and [D.Va](#))

## Technologies

This application uses the [React](https://reactjs.org/) (v17) frontend framework, a Jupyter Notebook to "clean" the source quote files from YouTube in conjunction with the [pydub](https://github.com/jiaaro/pydub) and [speech_recognition](https://pypi.org/project/SpeechRecognition/) Python libraries and the [Google Speech Recognition API](https://cloud.google.com/speech-to-text) to split and transcribe each hero's quotes.