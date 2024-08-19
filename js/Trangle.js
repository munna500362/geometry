function myTrangle(){
            
    const trangleBase = document.getElementById("base");
    const trangleBaseString = trangleBase.value;
    const trangleBaseNumber = parseFloat(trangleBaseString);
    trangleBase.value ='';
    // console.log(trangleBaseNumber)

   const trangleHeigt = document.getElementById("height");
   const trangleHeigtString = trangleHeigt.value;
   const trangleHeigtNumber = parseFloat(trangleHeigtString);
   trangleHeigt.value = '';
//    console.log(trangleHeigtNumber) 

   const area = 0.5*trangleBaseNumber*trangleHeigtNumber;
    // console.log(area);

   const setAreaValue = document.getElementById("AreaValue");
   setAreaValue.innerText = area;

    
}