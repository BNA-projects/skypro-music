type FormatValidationResult = {
  hasErrors: boolean;
  errors: Record<string, boolean>;
  errorMessage?: string;
};

type FormValues = {
  email: string;
  password: string;
  [key: string]: string;
};

export const formatValidator = (values: FormValues): FormatValidationResult => {
  const errors: Record<string, boolean> = {};
  let hasErrors = false;
  let errorMessage = '';

  const email = values.email.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errors.email = true;
    hasErrors = true;
    errorMessage ||= 'Неверный формат email';
  }

  const password = values.password;
  if (password.length < 6) {
    errors.password = true;
    hasErrors = true;
    errorMessage ||= 'Пароль должен быть не менее 6 символов';
  }

  if ('confirmPassword' in values) {
    if (values.confirmPassword !== password) {
      errors.confirmPassword = true;
      hasErrors = true;
      errorMessage ||= 'Пароли не совпадают';
    }
  }

  if ('username' in values) {
    const username = values.username.trim();
    if (username.length < 3) {
      errors.username = true;
      hasErrors = true;
      errorMessage ||= 'Имя пользователя должно содержать минимум 3 символа';
    }
  }

  return { hasErrors, errors, errorMessage };
};
