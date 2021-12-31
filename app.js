
//Your node url (port and /getinfo)
const url = 'http://blocksum.org:11898/getinfo'

// Set goal to reach
const goal = 1000000

//HTML Elements
const percentageText = document.getElementById('percentage')
const progressBar = document.getElementById('progress')
const timeText = document.getElementById('time')

//Get height from node
function start() {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        render(data.height, goal)
    })
}

//Calculate and render
function render(height, goal) {

    //Calc percentage
    const percentageToGoal = (((height / goal) * 100).toFixed(2)) + "%"

    //Calc time left
    const blocksLeft = goal - height
    const timeleft = blocksLeft * 90
    const daysLeft = "est." + " " + (((timeleft / 60) / 60) / 24).toFixed(0) + " Days"


    //Render
    percentage.textContent = percentageToGoal
    progressBar.style.width = percentageToGoal
    timeText.textContent = daysLeft

    //just to check
    console.log('Success')
}

//Start
start()
setInterval(start, 60000)
