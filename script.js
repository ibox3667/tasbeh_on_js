let btn = document.querySelector('.btn').addEventListener('click',
    function btnFunc() {
        let display = document.querySelector('.textPlace')
            // console.log(typeof parseInt(display.value));

        display.value = parseInt(display.value) + 1;
    })

let nullbtn = document.querySelector('.btnNull').addEventListener('click', function() {
    let btn = document.querySelector('.textPlace').value = 0;
})