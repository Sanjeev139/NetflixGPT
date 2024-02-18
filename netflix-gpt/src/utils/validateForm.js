const validateForm = (email, password) => {
    const validEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const validPassword = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/.test(password);

    if(!validEmail) return "Email is Inavlid";
    if(!validPassword) return "Password is Invalid"
    if(validEmail && validPassword) return null;
}
export default validateForm;