const CheckValidation = (name, email, password) => {
  if (name !== null && name !== undefined) {
    const isname = /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/.test(name);
    if (!isname) return "Name is not Valid";
  }
  const isemail = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(
    email
  );
  const ispassword =
    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/.test(
      password
    );

  if (!isemail) return "Incorrect Email Id";
  if (!ispassword) return "Incorrect Password";

  return null;
};
export default CheckValidation;
