function MyError(param1, param2) {
  var instance = new Error(`custome message ${param1}: ${param2}`);
  instance.name = "MyError";
  Object.setPrototypeOf(
      instance, Object.getPrototypeOf(this)
  );
  if (Error.captureStackTrace) {
    Error.captureStackTrace(instance, MyError)
  }
}

try {
  let test = "test";
  throw MyError("test",2);
} catch (error) {
  if (Error.captureStackTrace)
  console.log(error.name, error.message, error.stack)
}