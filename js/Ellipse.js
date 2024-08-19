function Ellipse(){
    const EllipseValueA = baseField("Ellipse-a");
    
    const EllipseValueB = baseField("Ellipse-b");

    area = 3.14 *EllipseValueA *EllipseValueB;
    const  AreaValue = area.toFixed(2)

    const setAreaValue = document.getElementById("Ellipse-input");
    setAreaValue.innerText = AreaValue;      
}