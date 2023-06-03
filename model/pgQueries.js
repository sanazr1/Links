const client = require("./dbConfig");
/*
module.exports.workerSignIn = async (name,pass) => {

    const res =  await client.query(`Select "name","password" from Public.user2 where "name" = '${name}'`);
    val = res.rows[0].password;
    user = res.rows[0];
    if(res.rows[0].name != "" && res.rows[0].name != undefined ) 
    {
      await bcrypt.compare(pass,val).then((res) =>{
        if(res){
          
        console.log("trouver !!");
      console.log("Account : ",val)
    return user;
    }
      else
      throw Error('Email or password is wrong');
      })
      
    }
    //console.log(res.rows[0].Founded);
      return res.rows[0];
  };    

  module.exports.insertWorker = async (name,pass) => {
    const res =  await client.query(`Insert into Public.user2("name","password") VALUES('${name}','${pass}')`); 
    //console.log(res.rows[0].Founded);
    if(res[1]) throw err
     console.log("inserted successfully")
     const resp =  await client.query(`Select "name","password" from Public.user2 where "name" = '${name}'`);
     val = resp.rows[0].password;
     user = resp.rows[0];
     if(resp.rows[0].name != "" && resp.rows[0].name != undefined ) 
     {
      console.log("trouver !!");
      console.log("Account : ",user)
       
     }
     //console.log(res.rows[0].Founded);
       return resp.rows[0];
  };
  module.exports.findEmail = async (name) => {
  const resp =  await client.query(`Select "name","password" from Public.user2 where "name" = '${name}'`);
  console.log('====>>>>',resp.rows[0].name)
  return resp.rows[0].name;
  }

  // connectDb().then((res) => console.log(res));

  */