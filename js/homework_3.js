const users = [
    { name: "Игорь", sex: "male", age: 29 },
    { name: "Михаил", sex: "male", age: 21 },
    { name: "Ирина", sex: "female", age: 25 },
    { name: "Олег", sex: "male", age: 14 },
    { name: "Марина", sex: "female", age: 23 },
    { name: "Оксана", sex: "female", age: 17 },
    { name: "Алексей", sex: "male", age: 8 },
    { name: "Антон", sex: "male", age: 47 },
    { name: "Валерия", sex: "female", age: 50 },
    { name: "Екатерина", sex: "female", age: 12 }
  ];
  
  /* 
    1. В массиве users отфильтровать пользователей по возрасту так чтобы получить всех выше 18 лет.
       Найти самого младшего из них и в консоль написать сообщение: User самый молодой и ему/ей years лет
       !!!Важно понимать пол пользователя и определить в сообщении "ему" или "ей"
  */
  const getUsersOverEigtheen=(users)=>{
   
  let i= users.filter(user=>user.age>18);
  
  let j= [...i].sort((a,b)=>a.age-b.age);

for (let p of j){
if (p.sex==='male'){
  return `${p.name} самый молодой и ему ${p.age} лет`
}
else{
  return `${p.name} самая молодая и ей ${p.age} лет`
}
}
}
  console.log(getUsersOverEigtheen(users));


    // 2. В массиве users отфильтровать всех по полу, сначала female потом male 
    const getUsersSex=(users)=>{
      return [...users].sort((a,b)=>a.sex.localeCompare(b.sex));    
  }
    console.log(getUsersSex(users));



    const getUsersSex2_1=(users)=>{
      return users.filter(user=>user.sex==='female');    
  }
    console.log(getUsersSex2_1(users));
    
    
    const getUsersSex2=(users)=>{
      return users.filter(user=>user.sex==='male');    
  }
    console.log(getUsersSex2(users));
    


  /* 
    3. В массиве users найти пользователя по имени Марина
  */
    const getUser=(users)=>{
      return users.filter(user=>user.name==='Марина');   
  }
    console.log(getUser(users));
  /* 
    4. Пробежаться по массиву users, если пользователь мужчина добавить 10 лет к возрасту, 
    если женщина снять 5 лет
    !!! Важно проверять что возраст не отрицательное число :)
  */

    const getUsersAgePlus=(users)=>{
   

     
      const newAge=[];

      users
      .filter(user=>user.age>0)
      .forEach(user=>{
        newAge.push(user.sex==='male'?{name:user.name,sex:user.sex,age:user.age+10}:{name:user.name,sex:user.sex,age:user.age-5})
      })

      return newAge;

  }
    console.log(getUsersAgePlus(users));
    
