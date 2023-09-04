const users = [
    {
      name: 'Brook',
      scores: 75,
      skills: ['HTM', 'CSS', 'JS'],
      age: 16
    },
    {
      name: 'Alex',
      scores: 80,
      skills: ['HTM', 'CSS', 'JS'],
      age: 18
    },
 
  ];
  //1
  for (const user of users) {
    const keys = Object.keys(user);
    console.log(keys);
  }
//2
  const lessThanTwoSkills = users.filter(user => user.skills.length < 2);
  console.log(lessThanTwoSkills);