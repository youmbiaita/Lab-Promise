//Part1: The scenario
// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.mjs";

async function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };

  let waiting = await central(id);
  console.log(waiting);

  // console.log(dbs.db1(id));
  // Promise.any([dbs.db1(id), dbs.db2(id), dbs.db3(id)]).then((x) =>{
  //   console.log(x)
  // })
  // .catch((err) =>{
  //   console.error(err)
  // })
  // Promise.resolve(dbs.db1(id)).then((x) =>{
  //   console.log(x);
  // }).catch((errr) => {
  //   console.error(errr)
  // })
  // try {
  //   let waiting = await dbs.db1(id); //when we put async in function
  //   console.log(waiting);
  // }catch{
  //   console.log(error)
  // // };
  // console.log(dbs.db1(id));
  
// part2
  Promise.all([vault(id)])
  .then((x) =>{
    console.log(x)
  })
  .catch((err) =>{
    console.error(err)
  })

  Promise.any([central(id)])
  .then((x) =>{
    console.log(x)
  })
  .catch((err) =>{
    console.error(err)
  })
}



getUserData(10);
 
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

