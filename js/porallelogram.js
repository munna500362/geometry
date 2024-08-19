function porallelogram(){
    const porallelogramBaseInput=  baseField ("porallelogram-base");
    

   const porallelogramHeightInput =  heightField ("porallelogram-height");

   Area = porallelogramBaseInput * porallelogramHeightInput;

   const setAreaValue = document.getElementById("area-Field" );
   setAreaValue.innerText = Area;

}