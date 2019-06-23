#!json-server
// usa json-server --watch generate-data.js
var faker = require('faker');

function generateData () {
  var messages = [];
  for (var id = 0; id < 10; id++) {
    let priority = faker.random.number({min: 1, max: 2});
    let date = faker.date.between("2018-01-01", "2018-07-31").toISOString().split("T")[0];
    let fromId = faker.random.number({min: 1000, max: 9999})
    let message = faker.hacker.phrase();
    let status = faker.random.number(1);
    messages.push({
      "id": id,
      "from_userId": fromId,
      "date_sent": date,
      "priority": priority,
      "message": message,
      "status": status
    });
  }

  var bestia = [];
  for (var id = 0; id < 10; id++) {
    let WorkCenter = "Green";
    let Pause = faker.random.number({min: 0, max: 1});
    let RotationSpeed = []; //todo VETTORE
    let ErrorCode = faker.random.number({min: 0, max: 10});
    let Pieces2 = [] ;//todo VETTORE
    let EnergyConsumption = faker.random.number({min: 0, max: 9999});
    let Piece = faker.random.number({min: 0, max: 99});
    let TotalPieces= faker.random.number({min: 1, max: 99});
    let Order = faker.random.number({min: 0, max: 9999999});
    let ProductionPlant = "Napoli";

    
    RotationSpeed = [
      [
        [
          faker.random.number({min: 0, max: 360}),
          faker.random.number({min: 0, max: 360}),
          faker.random.number({min: 0, max: 360}),
        ],
        faker.random.number({min: 0, max: 9999999}),
      ]
    ];

    Pieces2 = [
      [
        [
          faker.random.number({min: 0, max: 360}),
          faker.random.number({min: 0, max: 360}),
          faker.random.number({min: 0, max: 360}),
        ],
        faker.random.number({min: 0, max: 9999999}),
      ]
    ];

    bestia.push({
      WorkCenter,
      Pause,
      RotationSpeed,
      ErrorCode,
      Pieces2,
      EnergyConsumption,
      Piece,
      TotalPieces,
      Order,
      ProductionPlant,
    });
  }

  return {bestia};
}

module.exports = generateData;

/*
   "WorkCenter":"Green",
   "Pause":0,
   "RotationSpeed":[todo],
   "ErrorCode":0,
   "Pieces2":[todo],
   "EnergyConsumption":3474.91,
   "Piece":25,
   "TotalPieces":25,
   "Order":"1000006",
   "ProductionPlant":"Napoli"
*/