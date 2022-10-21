function check(){
    let name1 = document.getElementById('name1')
    let name2 = document.getElementById('name2')
    let button = document.getElementById('button')
    button.style.display = 'none'
    let guess_content = document.getElementsByClassName('image')
    let love_percent = Math.random()

    love_percent = love_percent * 100
    love_percent = Math.floor(love_percent)

    function sleep(milliseconds) {  
        return new Promise(resolve => setTimeout(resolve, milliseconds))
     }  
     async function fun() {  
        for (let i = 1; i <=love_percent ; i++) {          
           await sleep(200);  
           guess_content[0].innerHTML = '<p>' + i + '%</p>'
        }  
     }  
    fun();  
}