var canvas;
var ctx;

function bsDraw(){
    canvas = document.getElementById("bsVis");
    ctx = canvas.getContext("2d");
    ctx.canvas.width = window.innerWidth;
    ctx.fillStyle = "#fcfcfc";
    ctx.fillRect(0,0,innerWidth - 400,300);
}

function generateNumbers(){
    var min = 1;
    var max = 30;
    var x = 0;
    var i=0;
    var random;
    var numbers = [];

    while (x < 30){
        random = Math.floor(Math.random()*50)+1;
        numbers.push(random);
        x++;
    } 
    return numbers;
}

function drawSquares(numbers){
    var i = 0;
    var offset = 0;
    ctx.clearRect(0,0,innerWidth - 400,300);
    ctx.fillStyle = "#fcfcfc";
    ctx.fillRect(0,0,innerWidth - 400,300);

    while (i < 30){
        ctx.fillStyle = "#a50000";
        ctx.fillRect(0 + offset,300,canvas.width/50,-numbers[i]*5);
        i++;
        offset = offset + ((canvas.width/50)+2);
    }
}

function bubbleSort(){
    var nums = generateNumbers();
    var swapped;
    var x, y, temp, i, j;
    
    for (i = 0; i < nums.length-1; i++){
        swapped = false;
        for (j = 0; j < nums.length-i-1; j++){
            if (nums[j] > nums[j+1]){
                temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
                swapped = true;
            }
            drawSquares(nums);
        }
        if (swapped == false){
            break;
        }
    }
}

