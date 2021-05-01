$(document).ready(function () {
    colorChange();
    $(".empty").on("click", emptyFunction)
    $(".bone").on("click",boneFunction)

});

let count = 0;
let gridSize = 5;  //grid size is bones
                   //when grid size is changed it becomes that many bones
                  // grid size is bones * bones


let percent = 0;
let range = [1,2,3,4]
function colorChange(event) {
    const COL_SIZE = gridSize;
    const ROW_SIZE = gridSize
    const BAR_WIDTH = 100;
    let bone = 0;
    let val = Math.random();
    val = Math.round(val);
    for (let row = 0; row < ROW_SIZE; row++) {
        for (let col = 0; col < COL_SIZE; col++) {
        val = Math.floor(Math.random()*11);;
            if(val > 5 && bone < gridSize){
                $("p").append("<span class='bone'>Diggable</span>");
                bone++;
            }
            else {
                $("p").append("<span class='empty'>Diggable</span>");
            }
        }
                $("p").append("<br>");
    }
    //progress bar
    for (let i = 0; i<BAR_WIDTH; i++){
        $(".bar").append("<span class='barGreen'></span>")
    }

}
function boneFunction(event) {
    $(this).removeClass("bone");
    $(this).replaceWith("<div class='correct'>Found Bone</div>");
    count++;
    //do math with 1/bones(gridsize) to 4/bones(gridsize)
    let percentAdder =((Math.floor(Math.random() * 4)+1)/gridSize**2)*100
    percent += percentAdder;
    $("#output").text(percent+ " percent")
    $("#outputPercent").text(percentAdder+ " percent Change")
    for( i=0; i < percentAdder; i++){
        $(".barGreen:first").addClass("barRed").removeClass("barGreen");
    }
    $(".bonesLeft").text(5-count +" Bones Left")
    if(count === gridSize){
        $("#output2").text("You Win")
        for( i=0; i < (gridSize**2)-gridSize; i++){
            $(".empty:first").replaceWith("<div class='unClickable'>No Bone</div>");
        }
        for( i=0; i <= gridSize; i++){
            $(".bone:first").replaceWith("<div class='correct'>Bone Here</div>");
        }
    }

}
function emptyFunction(event) {
    $(this).removeClass("empty");
    $(this).replaceWith("<div class='unClickable'>No Bone</div>");
    let percentAdder =((Math.floor(Math.random() * 4)+1)/gridSize**2)*100
    percent += percentAdder;
    $("#output").text(percent+ " percent")
    for( i=0; i < percentAdder; i++){
        $(".barGreen:first").addClass("barRed").removeClass("barGreen");
    }
    if(percent >= 100 ){
        $("#output").text(100+" percent")
        $("#output2").text("You Lose")
        for( i=0; i < (gridSize**2)-gridSize; i++){
            $(".empty:first").replaceWith("<div class='unClickable'>No Bone</div>");
        }
        for( i=0; i <= gridSize; i++){
            $(".bone:first").replaceWith("<div class='correct'>Missed Bone</div>");
        }
    }
}

