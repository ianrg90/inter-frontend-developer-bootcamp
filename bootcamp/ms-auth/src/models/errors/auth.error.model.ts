class AuthError extends Error {
    constructor(public message: string, public error?: any) {
      super(message);
    }
  }
  
  export default AuthError;