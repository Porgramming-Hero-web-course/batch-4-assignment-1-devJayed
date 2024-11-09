{
  //
  const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]): boolean =>
    keys.every((key) => key in obj);

  // Sample Input:
  const person = { name: "Alice", age: 25, email: "alice@example.com" };
  //   console.log(validateKeys(person, ["name", "age"]));

  console.log(validateKeys(person, ["name", "height"]));
  //
}