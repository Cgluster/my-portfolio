let turnAngle = 90;

function turn(image) {
    image.setAttribute('style', 'transform: rotate(' + turnAngle + 'deg)');
    turnAngle = turnAngle + 90;
}