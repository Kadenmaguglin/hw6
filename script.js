$(document).ready(function(){

      displayLocalList();
  
      console.log(localStorage)
      var searchedCities =[];
      var onLoad  = JSON.parse(localStorage.getItem("history")) 

      if (onLoad == null){
      }else if (onLoad.length>10){
          for(i=onLoad.length-10; i<onLoad.length; i++){
              searchedCities[searchedCities.length] = onLoad[i]
          }
      } else{
          for(i=0; i<onLoad.length; i++){
              searchedCities[searchedCities.length] = onLoad[i]
          }
      }

    $("#searchButton").click(function(){
              console.log("you clicked the search btn...")
              var city = $("#inputBar").val();
              var key  = '4de3768c62b67fe359758977a3efc069';
              console.log(city);



              if(city != null){
                console.log("WE LOVE FORTNITE WE LOVE FORTNITE")
                  
                  searchedCities[searchedCities.length] = {city}
                  localStorage.setItem("history", JSON.stringify(searchedCities) )
                  };
          

              
          if(city != null){
            addToList();
          }
      function addToList(){
        localStorage.setItem("searchedCity", city);
        console.log("you type this mutherfucken city: " + city);
        $("#theList").prepend("<li>" + localStorage.getItem("searchedCity") + "</li>");
        


      }

          $.ajax({
            url:'http://api.openweathermap.org/data/2.5/weather',
            dataType:'json',
            type:'GET',
            data:{q:city, appid: key, units: 'imperial'},
            
            success: function(data){
              console.log(data);
              console.log(data.weather);
              console.log(data.weather[0].icon);
             $("#displayNameInfo").html(data.name);
             $("#iconDisplayed").attr("src", "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png");
             $("#displayTempInfo").html("Tempurature: " + data.main.temp + "&deg;F");
             $("#displayHumidityInfo").html("Humidity: " + data.main.humidity + "%");
             $("#displayWindInfo").html("Wind Speed: " + data.wind.speed + " MPH");
              console.log(data.coord.lon);
              console.log(data.coord.lat)
//uv index shit',
              var lon = data.coord.lon;
              var lat = data.coord.lat;
              $.ajax("https://api.openweathermap.org/data/2.5/uvi" + "?appid=" + key + "&lat=" + lat + "&lon=" + lon,{
                
                dataType:'json',
                type:'GET',
    
                success: function (uvdata){
                  console.log(uvdata.value);
                  $("#displayUvInfo").html("UV Index: " + uvdata.value); 
                }
                
              })
    
              $.ajax("https://api.openweathermap.org/data/2.5/forecast" + "?q=" + city + "&appid=" + key, {
                dataType:'JSON',
                type:'GET',
                data:{units: 'imperial'},
                success: function(response){
                  console.log("I hate my life.")
                  console.log(response)
                    console.log(response.list[8]);
                    console.log(response.list[8].weather[0].icon)
                    console.log(response.list[16]);
                    console.log(response.list[16].weather[0].icon)
                    console.log(response.list[24]);
                    console.log(response.list[24].weather[0].icon)
                    console.log(response.list[32]);
                    console.log(response.list[32].weather[0].icon)



                    $("#displayNameInfo1").html(data.name);
                    $("#iconDisplayed1").attr("src", "https://openweathermap.org/img/wn/" + response.list[8].weather[0].icon + ".png");
                    $("#displayTempInfo1").html("Tempurature: " + response.list[8].main.temp + "&deg;F");
                    $("#displayHumidityInfo1").html("Humidity: " + response.list[8].main.humidity+ "%");
                    $("#displayWindInfo1").html("Wind Speed: " + response.list[8].wind.speed + " MPH");

                    $("#displayNameInfo2").html(data.name);
                    $("#iconDisplayed2").attr("src", "https://openweathermap.org/img/wn/" + response.list[16].weather[0].icon + ".png");
                    $("#displayTempInfo2").html("Tempurature: " + response.list[16].main.temp + "&deg;F");
                    $("#displayHumidityInfo2").html("Humidity: " + response.list[16].main.humidity+ "%");
                    $("#displayWindInfo2").html("Wind Speed: " + response.list[16].wind.speed + " MPH");

                    $("#displayNameInfo3").html(data.name);
                    $("#iconDisplayed3").attr("src", "https://openweathermap.org/img/wn/" + response.list[24].weather[0].icon + ".png");
                    $("#displayTempInfo3").html("Tempurature: " + response.list[24].main.temp + "&deg;F");
                    $("#displayHumidityInfo3").html("Humidity: " + response.list[24].main.humidity+ "%");
                    $("#displayWindInfo3").html("Wind Speed: " + response.list[24].wind.speed + " MPH");

                    $("#displayNameInfo4").html(data.name);
                    $("#iconDisplayed4").attr("src", "https://openweathermap.org/img/wn/" + response.list[32].weather[0].icon+ ".png");
                    $("#displayTempInfo4").html("Tempurature: " + response.list[32].main.temp + "&deg;F");
                    $("#displayHumidityInfo4").html("Humidity: " + response.list[32].main.humidity+ "%");
                    $("#displayWindInfo4").html("Wind Speed: " + response.list[32].wind.speed + " MPH");
                  
                }
              })



            }

          })

        });
      });

      function displayLocalList(){
        console.log("I want to add every local storage item to the list...")
      }
