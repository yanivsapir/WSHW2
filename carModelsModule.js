var cars = [ 
{ 
   "id": 1, 
   "manufacturer": 'Volksvagen', 
   "model": 'Polo',
   "color": 'black', 
   "year": 2010
},
{ 
   "id": 2, 
   "manufacturer": 'Volksvagen', 
   "model": 'Golf',
   "color": 'white', 
   "year": 2011
},
{ 
   "id": 3, 
   "manufacturer": 'Volksvagen', 
   "model": 'Passat',
   "color": 'blue', 
   "year": 2010
},
{ 
   "id": 4, 
   "manufacturer": 'Hyundai', 
   "model": 'I25',
   "color": 'white', 
   "year": 2016
}, 
{ 
   "id": 5, 
   "manufacturer": 'Hyundai', 
   "model": 'I35',
   "color": 'black', 
   "year": 2015
}, 
{ 
   "id": 6, 
   "manufacturer": 'Mazda', 
   "model": '3',
   "color": 'blue', 
   "year": 2014
}, 
{ 
   "id": 7, 
   "manufacturer": 'Mazda', 
   "model": '6',
   "color": 'white', 
   "year": 2013
}, 
{ 
   "id": 8, 
   "manufacturer": 'BMW', 
   "model": 'Z8',
   "color": 'Titanum', 
   "year": 2016
},
{ 
   "id": 9, 
   "manufacturer": 'Bugatti', 
   "model": 'Vayron',
   "color": 'black', 
   "year": 2015
},
{ 
   "id": 10, 
   "manufacturer": 'Volksvagen', 
   "model": 'Jetta',
   "color": 'gold', 
   "year": 2012
}]; 

exports.getAllCars = function() 
{
      return cars;
};

exports.getCarById = function(id) 
{ 
  for (var i = 0; i < cars.length; i++)
  { 
      if (cars[i].id == id) 
      { 
          return cars[i]; 
      } 
  } 
  return "No car with " + id + " found"; 
}; 

exports.getCarsByYear = function(year)
{
    var carOfTheYear = [];  
    for (var i = 0; i < cars.length; i++) 
    { 
        if (cars[i].year == year) 
        { 
            carOfTheYear.push(cars[i]);
        } 
    } 
    if(carOfTheYear.length > 0)
      return carOfTheYear; 
    else
      return "No cars created in this year";
};