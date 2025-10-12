import { toast } from 'react-toastify';
import axios from 'axios';

export const handleAxiosError = (error: unknown): void => {
  let message = 'An unknown error occurred';

  if (axios.isAxiosError(error)) {
    if (error.response) {
      const status = error.response.status;
      const serverMessage = error.response.data?.message;

      switch (status) {
        case 400:
          message = 'Bad request' 
          break;
        case 401:
          message =
            'User with this email or password was not found'
          break;
        case 403:
          message = 'The entered email is already taken' 
          break;
        case 404:
          message = 'Resource not found'
          break;
        case 412:
          message =
            'Request rejected. Additional conditions are required.' 
          break;
        case 500:
          message = 'Server error. Please try again later.' 
          break;
        default:
          message = `Error: ${status}` || serverMessage;
      }
    } else if (error.request) {
      message =
        'No response from the server. Please check your internet connection.' 
    } else {
      message = 'Error while sending the request.' 
    }
  }

  toast.error(message);
};
