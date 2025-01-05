export const validatePassword = (password: string) => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const strength = {
    score: 0,
    messages: [] as string[],
  };

  if (password.length < minLength) {
    strength.messages.push(`At least ${minLength} characters`);
  } else {
    strength.score += 1;
  }

  if (!hasUpperCase) {
    strength.messages.push("At least one uppercase letter");
  } else {
    strength.score += 1;
  }

  if (!hasLowerCase) {
    strength.messages.push("At least one lowercase letter");
  } else {
    strength.score += 1;
  }

  if (!hasNumbers) {
    strength.messages.push("At least one number");
  } else {
    strength.score += 1;
  }

  if (!hasSpecialChar) {
    strength.messages.push("At least one special character");
  } else {
    strength.score += 1;
  }

  return strength;
};

export const validateUsername = (username: string) => {
  const messages: string[] = [];

  if (username.length < 3) {
    messages.push("Username must be at least 3 characters");
  }

  if (username.length > 20) {
    messages.push("Username must be less than 20 characters");
  }

  if (!/^[a-zA-Z0-9_]+$/.test(username)) {
    messages.push(
      "Username can only contain letters, numbers, and underscores"
    );
  }

  return messages;
};

export const validateEmail = (email: string) => {
  const messages: string[] = [];

  // Basic email format
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    messages.push("Invalid email format");
  }

  // Check for common typos in domain
  if (email.match(/\.con$/)) {
    messages.push("Did you mean .com?");
  }

  return messages;
};
