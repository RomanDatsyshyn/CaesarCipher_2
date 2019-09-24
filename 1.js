function test(){
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ'-,.; "
  var text = document.getElementById("text1").value;
  text = text.toUpperCase();
  console.log(text);
  var result = [];
  var counter = 0;
  
  for(let i = 0; i < alphabet.length; i++){
      var counter = 0;
      for(let j = 0; j < text.length; j++){
          if(alphabet[i] == text[j]){
              counter++;
          }
      }
      result.push({letter:alphabet[i] , quantity:counter});
  }
  
  
  
  console.log(result);
  
  var byQuantity = result.slice(0);
  byQuantity.sort(function(a,b) {
      return b.quantity - a.quantity;
  });
  console.log(byQuantity);
  
  biResult = [];
  
  for(let i = 0; i < alphabet.length; i++){
      for(let j = 0; j < alphabet.length; j++){
          var biAlphabet = alphabet[i] + alphabet[j];
          counter = 0;
          for(let k = 0; k < text.length - 1; k++){
              if(biAlphabet == text[k] + text[k+1]){
                  counter++;
              }
          }
          if(counter >= 10 && counter <= 15){biResult.push({letters:biAlphabet , quantity:counter});}
          
      }
  }
  
  // var byQuantityTwo = biResult.slice(0);
  // byQuantityTwo.sort(function(a,b) {
  //     return b.quantity - a.quantity;
  // });
  // console.log(byQuantityTwo);
  
  tripleResult = [];
  for(let i = 0; i < text.length; i++){
      counter = 1;
      for(let j = i + 3; j < text.length; j++){
          if(text[j] + text[j+1] + text[j+2] == text[i] + text[i+1] + text[i+2]){
              counter++;
          }
      }
      if(counter > 1){
      }
      
      var tempo1 = tripleResult.map(function (obj) {
          return obj.letters;
        });
      var z = 0;
      for(let k = 0; k < tempo1.length; k++){
          if(text[i] + text[i+1] + text[i+2] == tempo1[k]){
              z++;
          }
      }
      if(z == 0){tripleResult.push({letters:text[i] + text[i+1] + text[i+2] , quantity:counter});}
  }
  
  function filterByQ(item){
      if(item.quantity >= 10 && item.quantity <= 15){
          return true;
      }
      return false;
  }
  
  tripleResult = tripleResult.filter(filterByQ);
  console.log(tripleResult);
  
  // var byQuantityThree = tripleResult.slice(0);
  // byQuantityThree.sort(function(a,b) {
  //     return b.quantity - a.quantity;
  // });
  // console.log(byQuantityThree);
  
  twoResult = [];
  
  for(let i = 0; i < alphabet.length; i++){
      var twoAlphabet = alphabet[i] + alphabet[i];
      counter = 0;
      for(let k = 0; k < text.length - 1; k++){
          if(twoAlphabet == text[k] + text[k+1]){
              counter++;
          }
      }
      if(counter >= 1){twoResult.push({letters:twoAlphabet , quantity:counter});}
  }
  
  var byQuantityTwoS = twoResult.slice(0);
  byQuantityTwoS.sort(function(a,b) {
      return b.quantity - a.quantity;
  });
  console.log(byQuantityTwoS);
  
  threeResult = [];
  
  for(let i = 0; i < alphabet.length; i++){
      var threeAlphabet = alphabet[i] + alphabet[i] + alphabet[i];
      counter = 0;
      for(let k = 0; k < text.length - 2; k++){
          if(threeAlphabet == text[k] + text[k+1] + text[k+2]){
              counter++;
          }
      }
      if(counter >= 1){threeResult.push({letters:threeAlphabet , quantity:counter});}
  }
  
  var byQuantityThreeS = threeResult.slice(0);
  byQuantityThreeS.sort(function(a,b) {
      return b.quantity - a.quantity;
  });
  console.log(byQuantityThreeS);
  
  fourResult = [];
  
  for(let i = 0; i < alphabet.length; i++){
      var fourAlphabet = alphabet[i] + alphabet[i] + alphabet[i] + alphabet[i];
      counter = 0;
      for(let k = 0; k < text.length - 2; k++){
          if(fourAlphabet == text[k] + text[k+1] + text[k+2] + text[k+3]){
              counter++;
          }
      }
      if(counter >= 1){fourResult.push({letters:fourAlphabet , quantity:counter});}
  }
  
  var byQuantityFourS = fourResult.slice(0);
  byQuantityFourS.sort(function(a,b) {
      return b.quantity - a.quantity;
  });
  console.log(byQuantityFourS);
  
  
  
  
  
  var finalA = result.map(function (obj) {
      return [obj.letter, obj.quantity];
    });
  
  var aConfig = {
      type: 'bar',
      "background-color":"rgb(32, 32, 32)",
      plot:{
          "background-color":"rgba(79, 255, 146, 0.856)",
          "hover-state":{
              "background-color":"rgb(50, 206, 109)"
          },
          "tooltip":{
              "background-color":"black"
          }
      },
      plotarea:{ 
          margin: 'dynamic',
          "background-color":"rgb(32, 32, 32)" 
      },
      "scale-x":{   
          "items-overlap":true,
          "max-items":40,
          "line-color":"white",
          item:{
              "font-color":"white"
          } 
      },
      "scale-y":{   
          "line-color":"white",
          item:{
              "font-color":"white"
          },
          "guide":{
              "alpha":"0.1"
          } 
      },
      series: [
        {
          values: finalA
        }
      ]
    };
     
    zingchart.render({ 
        id : 'aChart', 
        data : aConfig,
        height: "250px"
    });
  
    var finalA2 = byQuantity.map(function (obj) {
      return [obj.letter, obj.quantity];
    });
  
  var a2Config = {
      type: 'bar',
      "background-color":"rgb(32, 32, 32)",
      plot:{
          "background-color":"rgba(79, 255, 146, 0.856)",
          "hover-state":{
              "background-color":"rgb(50, 206, 109)"
          },
          "tooltip":{
              "background-color":"black"
          }
      },
      plotarea:{ 
          margin: 'dynamic',
          "background-color":"rgb(32, 32, 32)" 
      },
      "scale-x":{   
          "items-overlap":true,
          "max-items":40,
          "line-color":"white",
          item:{
              "font-color":"white"
          } 
      },
      "scale-y":{   
          "line-color":"white",
          item:{
              "font-color":"white"
          },
          "guide":{
              "alpha":"0.1"
          } 
      },
      series: [
        {
          values: finalA2
        }
      ]
    };
     
    zingchart.render({ 
        id : 'a2Chart', 
        data : a2Config,
        height: "250px"
    });
  
    var finalab = biResult.map(function (obj) {
      return [obj.letters.replace(/ /gi, '_'), obj.quantity];
    });
  
  var abConfig = {
      type: 'bar',
      "background-color":"rgb(32, 32, 32)",
      plot:{
          "background-color":"rgba(79, 255, 146, 0.856)",
          "hover-state":{
              "background-color":"rgb(50, 206, 109)"
          },
          "tooltip":{
              "background-color":"black"
          }
      },
      plotarea:{ 
          margin: 'dynamic',
          "background-color":"rgb(32, 32, 32)" 
      },
      "scale-x":{   
          "items-overlap":true,
          "max-items":100,
          "line-color":"white",
          item:{
              "font-color":"white"
          } 
      },
      "scale-y":{   
          "line-color":"white",
          item:{
              "font-color":"white"
          },
          "guide":{
              "alpha":"0.1"
          } 
      },
      series: [
        {
          values: finalab
        }
      ]
    };
     
    zingchart.render({ 
        id : 'abChart', 
        data : abConfig,
        height: "230px"
    });
  
    var finalabc = tripleResult.map(function (obj) {
      return [obj.letters.replace(/ /gi, '_'), obj.quantity];
    });
  
  var abcConfig = {
      type: 'bar',
      "background-color":"rgb(32, 32, 32)",
      plot:{
          "background-color":"rgba(79, 255, 146, 0.856)",
          "hover-state":{
              "background-color":"rgb(50, 206, 109)"
          },
          "tooltip":{
              "background-color":"black"
          }
      },
      plotarea:{ 
          margin: 'dynamic',
          "background-color":"rgb(32, 32, 32)" 
      },
      "scale-x":{   
          "items-overlap":true,
          "max-items":70,
          "line-color":"white",
          item:{
              "font-color":"white"
          } 
      },
      "scale-y":{   
          "line-color":"white",
          item:{
              "font-color":"white"
          },
          "guide":{
              "alpha":"0.1"
          } 
      },
      series: [
        {
          values: finalabc
        }
      ]
    };
     
    zingchart.render({ 
        id : 'abcChart', 
        data : abcConfig,
        height: "200px"
    });
  }