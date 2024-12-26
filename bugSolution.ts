function printName(name: string | null | undefined): void {
  if (name === null || name === undefined) {
    console.log('No name provided');
  } else {
    console.log(name.toUpperCase());
  }
}

printName(null); // Works fine
printName(undefined); // Works fine
printName('John'); // Works fine