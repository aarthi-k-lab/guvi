var obj1={'name':"aarthi","age":23};
var obj2={"age":23,'name':"aarthi"};
var obj3={"age":24,"name":"aarthi"};
var obj4={"age":23,'name':"aarthi","hobby":"badminton"};
console.log(_.isEqual(obj1,obj2));
console.log(_.isEqual(obj1,obj3));
console.log(_.isEqual(obj1,obj4));