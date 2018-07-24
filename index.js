var request=require('request');

let getjson=function(hitpoint,sentence)
{
    return new Promise(function(resolve,reject){
        var options={method:'GET',url:hitpoint+sentence};
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
          body=JSON.parse(body);
          
          resolve(body);
          
          try{
            resolve(body);
         }
         catch(ex)
         {
            console.error(ex);
            resolve('');
         }
   
       })
    });

}

let gettopintent=function(hitpoint,sentence)
{
    return new Promise(function(resolve,reject){
        var options={method:'GET',url:hitpoint+sentence};
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
          body=JSON.parse(body);
          
          
          try{
            resolve({
                "intent":body.intents[0].intent,
                "score":body.intents[0].score
            });
         }
         catch(ex)
         {
            console.error(ex);
            resolve('');
         }
       })
    });

}



let getallentities=function(hitpoint,sentence)
{
    return new Promise(function(resolve,reject){
        var options={method:'GET',url:hitpoint+sentence};
        var entity=[];
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
          body=JSON.parse(body);
       
        try{
            for(a in body.entities){
                entity.push(body.entities[a].entity);
            }
          resolve(entity);
         }
         catch(ex)
         {
            console.error(ex);
            resolve('');
         }
       })
    });

}
let getentitytype=function(hitpoint,sentence)
{
    return new Promise(function(resolve,reject){
        var options={method:'GET',url:hitpoint+sentence};
        var entity=[];
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
          body=JSON.parse(body);
        
        try{
            for(a in body.entities){
                entity.push(body.entities[a].type);
            }
          resolve(entity);
         }
         catch(ex)
         {
            console.error(ex);
            resolve('');
         }
        
       })
    });

}

let getentity=function(hitpoint,sentence)
{
    return new Promise(function(resolve,reject){
        var options={method:'GET',url:hitpoint+sentence};
        
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
          body=JSON.parse(body);
         try{
            resolve(body.entities[0].entity);
         }
         catch(ex)
         {
            console.error(ex);
            resolve('');
         }
       })
    });

}

let getentitylength=function(hitpoint,sentence)
{
    return new Promise(function(resolve,reject){
        var options={method:'GET',url:hitpoint+sentence};
        
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
          body=JSON.parse(body);
          try{
            resolve(body.entities.length);
          }
          catch(ex)
          {
              console.error(ex);
              resolve('');
          }
       })
    });

}
let getsentiment=function(hitpoint,sentence)
{
    return new Promise(function(resolve,reject){
        var options={method:'GET',url:hitpoint+sentence};
        
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
          body=JSON.parse(body);
          try{
            resolve({
                "sentiment":body.sentimentAnalysis.label,
                "score":body.sentimentAnalysis.score
            });
          }
          catch(ex)
          {console.error(ex);
              resolve('');
          }
       })
    });

}










