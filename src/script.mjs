//Part1: The scenario
// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.mjs";

async function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3,
  };
  let result = {};
  result.id = id;
  try {
    let waiting = await central(id);
    console.log(waiting);
    // console.log(dbs[waiting](id));
    let db = await dbs[waiting](id);
    // console.log(db);
    result.username = db.username;
    result.website = db.website;
    result.company = db.company;
    // console.log(result);
    let info = await vault(id);
    console.log(info);
    result.name = info.name;
    result.email = info.email;
    result.address = info.address;
    result.phone = info.phone;
    console.log(result);
    ret;
  } catch {
    console.log("err");
  }
}
// getUserData(8);
function getUserData2(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3,
  };
  let result = {};
  result.id = id;
  central(id)
    .then((data) => {
      console.log(data);
      dbs[data](id)
        .then((db) => {
          // console.log(db);
          result.username = db.username;
          result.website = db.website;
          result.company = db.company;
          console.log(result);
        })
        .catch((err) => {
          console.error(err);
        });
    })
    .catch((err) => {
      console.error(err);
    });
  vault(id).then((data) => {
    // console.log(data);
    result.name = data.name;
    result.email = data.email;
    result.address = data.address;
    result.phone = data.phone;
    console.log(result);
  });
}
getUserData2(5);
// async function getUserData(id) {
//   const dbs = {
//     db1: db1,
//     db2: db2,
//     db3: db3
//   };

//   try {
//     let waiting = await central(id);
//     console.log(waiting);
//     console.log(dbs[waiting](id));
//     let db = await dbs[waiting](id);

//     //console.log(db);
//     result.username = db.username;
//     result.website = db.website;
//     result.company = db.company;
//     console.log(result);
//     let info = await vault(id);
//     console.log(info)

//   }catch {
//     console.log("err")
//   }

//   // console.log(dbs.db1(id));
//   // Promise.any([dbs.db1(id), dbs.db2(id), dbs.db3(id)]).then((x) =>{
//   //   console.log(x)
//   // })
//   // .catch((err) =>{
//   //   console.error(err)
//   // })
//   // Promise.resolve(dbs.db1(id)).then((x) =>{
//   //   console.log(x);
//   // }).catch((errr) => {
//   //   console.error(errr)
//   // })
//   // try {
//   //   let waiting = await dbs.db1(id); //when we put async in function
//   //   console.log(waiting);
//   // }catch{
//   //   console.log(error)
//   // // };
//   // console.log(dbs.db1(id));
  
// // part2
//   Promise.all([vault(id)])
//   .then((x) =>{
//     console.log(x)
//   })
//   .catch((err) =>{
//     console.error(err)
//   })

//   Promise.any([central(id)])
//   .then((x) =>{
//     console.log(x)
//   })
//   .catch((err) =>{
//     console.error(err)
//   })
// }



// getUserData(5);

// function getUserData2(id) {
//   const dbs = {
//     db1: db1,
//     bd2: db2,
//     db3: db3
//   }
// }
 
// {
//   id: number,
//   name: string,
//   username: string,
//   email: string,
//   address: {
//     street: string,
//     suite: string,
//     city: string,
//     zipcode: string,
//     geo: {
//       lat: string,
//       lng: string
//     }
//   },
//   phone: string,
//   website: string,
//   company: {
//     name: string,
//     catchPhrase: string,
//     bs: string
//   }
// }

