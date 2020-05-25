const main = () => {
  // Put your code here
  let names = ["Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"]
  console.log("All Place Names")
  for (const name of names) {
    console.log(name)
  }
  console.log("")
  console.log("'The' Place Names")
  const theNames = names.filter(n => n.startsWith("The"))
  theNames.forEach(theName => console.log(theName))
}



main();