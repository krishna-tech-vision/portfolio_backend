const validation = (form) => {
  const { name, email, message } = form;

  const error = {};

  const nameRegex = /^[a-zA-Z\s\'-]{2,50}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !name.trim()) {
    error.name = "Name is required!";
  } else if (name.trim().length < 2) {
    error.name = "Name must be atleast 2 digit character!";
  } else if (!nameRegex.test(name)) {
    error.name = "Invalid name!";
  }

  if (!email || !email.trim()) {
    error.email = "Email is required!";
  } else if (!emailRegex.test(email)) {
    error.email = "Invalid email!";
  }

  // Message validation
  if (!message || !message.trim()) {
    error.message = "Messsage is required!";
  } else if (message.trim().length < 8) {
    error.message = "Message must be atleast 8 digit character!";
  } else if (message.trim().length > 300) {
    error.message = "Message is too long!";
  }

  return { isValid: Object.keys(error).length === 0, error: error };
};

export default validation;
