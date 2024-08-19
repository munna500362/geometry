 // Rectengle Area
 function myRectengle(){
   console.log("li")
   const RectangleInputValue = document.getElementById("RectangleInput");
   const RectangleInputString = RectangleInputValue.value;
   const RectangleInputNumber = parseFloat(RectangleInputString);
   RectangleInputValue.value = '';

    const RectangleLineValue = document.getElementById("RectangleLine");
   const RectangleLineString = RectangleLineValue.value;
   const RectangleLineNumber = parseFloat(RectangleLineString);
   RectangleLineValue.value = '';

   const RectangleArea = RectangleInputNumber*RectangleLineNumber;

   const setRectangleValue = document.getElementById("Rectanglevalue");
   setRectangleValue.innerText = RectangleArea;
}