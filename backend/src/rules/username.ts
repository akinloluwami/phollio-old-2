const usernameRule = (username: string) => {
  const usernameRegex = /^[a-z0-9]{4,15}$/;

  if (!usernameRegex) {
    return "Username can only contain number a";
  }
};
