const express = require('express');
const app = express();
const version = "v1";
const bikes = [];
app.use(express.json());

app.get(`/${version}/api/get-bikes`, (req, res) => {
    res.status(200).json({
        message: "fetched all bikes",
        bikes: bikes
    });
});

app.get(`/${version}/api/get-bikes/id/:id`, (req, res) => {
    const bikeId = parseInt(req.params.id);
    const bike = bikes.find(b => b.id === bikeId);
    if (!bike) {
        return res.status(404).json({ message: "bike not found" });
    }
    res.status(200).json({
        message: "bike id fetched",
        bike: bike
    });
});

app.get(`/${version}/api/get-bikes/name/:name`, (req, res) => {
    const bikename = req.params.name.toLowerCase();
    const bike = bikes.filter(b => b.name?.toLowerCase().includes(bikename));
    res.status(200).json({
        message: "bike name fetched",
        bikes: bike
    });
});

app.get(`/${version}/api/get-bikes/brand/:brand`, (req, res) => {
    const bikebrand = req.params.brand.toLowerCase();
    const bike = bikes.filter(b => b.brand?.toLowerCase().includes(bikebrand));
    res.status(200).json({
        message: "bike brand fetched",
        bikes: bike
    });
});

app.get(`/${version}/api/get-bikes/model/:model`, (req, res) => {
    const bikemodel = req.params.model.toLowerCase();
    const bike = bikes.filter(b => b.model?.toLowerCase().includes(bikemodel));
    res.status(200).json({
        message: "bike model fetched",
        bikes: bike
    });
});

app.get(`/${version}/api/get-bikes/engine/:engine`, (req, res) => {
    const bikeengine = req.params.engine.toLowerCase();
    const bike = bikes.filter(b => b.engine?.toLowerCase().includes(bikeengine));
    res.status(200).json({
        message: "bike engine fetched",
        bikes: bike
    });
});

app.post(`/${version}/api/search-bikes`, (req, res) => {
    const { brand, model, year, color } = req.body;
    let superbikes = bikes;
    if (brand) {
        superbikes = superbikes.filter(b => b.brand?.toLowerCase().includes(brand.toLowerCase()));
    }
    if (model) {
        superbikes = superbikes.filter(b => b.model?.toLowerCase().includes(model.toLowerCase()));
    }
    if (year) {
        superbikes = superbikes.filter(b => b.year == year);
    }
    if (color) {
        superbikes = superbikes.filter(b => b.color?.toLowerCase().includes(color.toLowerCase()));
    }
    res.status(200).json({
        message: "Bike search success",
        bikes: superbikes,
        count: superbikes.length
    });
});

// app.put(`/${version}/api/update-bikes/:id`, (req, res) => {
//     const bikeId = parseInt(req.params.id);
//     const updatedData = req.body;

//     let bike = bikes.find(b => b.id === bikeId);
//    

//     for (let key in updatedData) {
//         if (bike.hasOwnProperty(key)) {
//             bike[key] = updatedData[key];
//         }
//     }

//     res.status(200).json({
//         message: "Bike updated",
//         bike: bike
//     });
// });

app.post(`/${version}/api/add-bikes`, (req, res) => {
    const Bikes = req.body;
    for (let bike of Bikes) {
        bike.id = bikes.length + 1;
        bikes.push(bike);
    }

    res.status(201).json({
        message: "many bikes uploaded",
        bikes: Bikes
    });
});

app.listen(3000, () => console.log(" http://localhost:3000"));

