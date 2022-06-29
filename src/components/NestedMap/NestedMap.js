import React  from "react";

const users=[
  {
    fullName:"Swapnil Mahmud",
    age:25,
    phones:[
      {home:"01839500005"},
      {office:"01612118246"},
    ]
  },
  {
    fullName:"Mahmud Siddeky",
    age:25,
    phones:[
      {home:"018395"},
      {office:"01613"},
    ]
  }
]
function NestedMap() {
  return (
    <div>
        <h1>React Data</h1>
        {users.map((user,index)=>(
          <article key={index}>
            <h3>{user.fullName}</h3>
            <p>{user.age}</p>
            {
              user.phones.map((phone,index)=>(
                <div key={index}>
                  <p>{phone.home}</p>
                  <p>{phone.office}</p>
                </div>
              ))}
          </article>
        ))}
    </div>
  );
}

export default NestedMap;


