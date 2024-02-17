function showSalary(users, age) {
  const filtered = users.filter( item => item.age <= age);
  return filtered.map(item => `${item.name}, ${item.balance}`).join('\n');
}
