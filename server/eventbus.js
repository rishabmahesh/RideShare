const express = require("express");
const app = express();
const axios = require("axios");
const config = require("../routes/appConfig.json")
const port = config.ports.eventBus;
app.use(express.json());

//JS Object containing the events and addresses intrested in the events in the format {event:[address1,address2,...]}
//Add default addresses here
let event_subs = {"example":["http://localhost:5003/events"],
  "test":["http://localhost:5000/events"],
  "createRide":["http://localhost:5000/events"],
};

app.listen(port, "0.0.0.0", () => {
  console.log(`Event Bus listening at http://localhost:${port}`);
});

/*Endpoint that recieves events and relays them to relevent microservices

  Prefrerred Event Structure
  {
    name: name of the event
    data : {event data in JSON format}
  }
*/

app.post("/events", (req, res) => {
  const event = req.body;
  event_subs[event.name].forEach((sub) => {
    axios.post(sub, event).catch((err) => {
      console.log(err.message);
    });
  });
  res.send({ status: "OK" });
});
//Endpoint for microservices to subscribe to certain events
app.post("/subscribe", (req, res) => {
  const address = req.body.address;
  let events = req.body.events;
  events.forEach((event) => {
    event_subs[event] === undefined
      ? (event_subs[event] = [address])
      : event_subs[event].push(address);
  });
  res.send({ status: "OK" });
});

