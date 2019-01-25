/*

    tipJar
    tipJarSpawner.js
    Created by Milad Nazeri on 2019-01-24
    Copyright 2019 High Fidelity, Inc.

    Distributed under the Apache License, Version 2.0.
    See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html

    Spawn file for the tipJar

*/


var log = Script.require('https://hifi-content.s3.amazonaws.com/milad/ROLC/d/ROLC_High-Fidelity/02_Organize/O_Projects/Repos/hifi-content/developerTools/sharedLibraries/easyLog/easyLog.js')

var SPAWN_DISTANCE = 2;
var entity = null;
var clientScript = Script.resolvePath("../entityClientScripts/tipJar_client.js?" + Date.now());
var tipJarJSON = Script.require("./tipJar.json?" + Date.now()).Entities[0];
var tipJarModel = Script.resolvePath("../resources/models/TipJar.fbx");

tipJarJSON.script = clientScript;
tipJarJSON.position = Vec3.sum(
    MyAvatar.position,
    Vec3.multiply(
        Quat.getForward(MyAvatar.orientation), 
        SPAWN_DISTANCE
    ) 
);
tipJarJSON.modelURL = tipJarModel;
tipJarJSON.userData = JSON.stringify({
    destinationName: "miladn",
    hfcAmount: 1,
    message: "THANKS FOR DONATING TO MILAD!"
});

entity = Entities.addEntity(tipJarJSON);

Script.scriptEnding.connect(function(){
    Entities.deleteEntity(entity);
});