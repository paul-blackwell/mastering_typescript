type User = {
  readonly id: number,
  username: string,
}


const user: User = {
  id: 12837,
  username: 'catgurl'
}

console.log(user.id);
// user.id = 11122321; // Will complain 
