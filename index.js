var musiciansArr = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
var instrumentsArr = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

function theBeatlesPlay(musiciansArr, instrumentsArr){
  var array = [];
for (let i = 0; i<3; i++)
  array.push("${musiciansArr[i]} plays ${instrumentsArr[i]}");
}
  return array;
}


