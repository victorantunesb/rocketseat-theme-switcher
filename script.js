const moon = document.querySelector("#moon")
const sun = document.querySelector("#sun")
const ball = document.querySelector("#ball")
const container = document.querySelector(".container-dark")
const switcher = document.querySelector(".switcher")

 changeTheme = () => {
     if (container.className === 'container-dark') {
    container.className = 'container-light'
    }
    else {container.className = 'container-dark'
    }
}

 animation = () => { 
    if (ball.className == ''){
        ball.className = 'ball-right'
    } 
    if (ball.className == 'ball-right'){
        ball.className = 'ball-left'
    }
    else if (ball.className == 'ball-left'){
        ball.className = 'ball-right'
    }
 }

ball.addEventListener("click", changeTheme) 
ball.addEventListener("click", animation)