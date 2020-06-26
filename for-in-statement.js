var stopWatch = {
    elapsedTime: 0,
    resultsHistory: [],
    isTiming: true,
    isPaused: true,
    start: function(){console.log("start");},
    pause: function(){console.log("pause");},
    resume: function(){console.log("resume");},
    stop: function(){console.log("stop");}
    };
    for (const name in stopWatch) {
        console.log(name, ":", stopWatch[name]);
      };