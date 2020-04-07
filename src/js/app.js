import changeText from "./changetext"
import animate from "./animate"
import BackgroundCheck from "./bgcheck"

animate()

BackgroundCheck.init({
    targets: '.target',
    images: 'body',
    maxDuration: 100, 
  });