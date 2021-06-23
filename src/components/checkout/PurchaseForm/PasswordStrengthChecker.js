import zxcvbn from "zxcvbn";

const passwordStrengthChecker=(password,passwordBar1,passwordBar2,passwordBar3,passwordBar4,passwordBar5,passwordBar6)=> {
    const strength = zxcvbn(password);
    console.log(strength.score);
    if (password !== "") {
        switch (strength.score) {
            case 0:
                if (passwordBar1 && passwordBar1.current) {
                    passwordBar1.current.style.borderColor = "red";
                    passwordBar1.current.style.backgroundColor = "red";
                }
                if (passwordBar2 && passwordBar2.current) {
                    passwordBar2.current.style.borderColor = '#9E9E9E';
                    passwordBar2.current.style.backgroundColor = '#9E9E9E';
                }
                if (passwordBar3 && passwordBar3.current) {
                    passwordBar3.current.style.borderColor = '#9E9E9E';
                    passwordBar3.current.style.backgroundColor = '#9E9E9E';
                }
                if (passwordBar4 && passwordBar4.current) {
                    passwordBar4.current.style.borderColor = '#9E9E9E';
                    passwordBar4.current.style.backgroundColor = '#9E9E9E';
                }
                if (passwordBar5 && passwordBar5.current) {
                    passwordBar5.current.style.borderColor = '#9E9E9E';
                    passwordBar5.current.style.backgroundColor = '#9E9E9E';
                }
                if (passwordBar6 && passwordBar6.current) {
                    passwordBar6.current.style.borderColor = '#9E9E9E';
                    passwordBar6.current.style.backgroundColor = '#9E9E9E';
                }
                break;
            case 1:
                if (passwordBar1 && passwordBar1.current) {
                    passwordBar1.current.style.borderColor = "red";
                    passwordBar1.current.style.backgroundColor = "red";
                }
                if (passwordBar2 && passwordBar2.current) {
                    passwordBar2.current.style.borderColor = "red";
                    passwordBar2.current.style.backgroundColor = "red";
                }
                if (passwordBar3 && passwordBar3.current) {
                    passwordBar3.current.style.borderColor = '#9E9E9E';
                    passwordBar3.current.style.backgroundColor = '#9E9E9E';
                }
                if (passwordBar4 && passwordBar4.current) {
                    passwordBar4.current.style.borderColor = '#9E9E9E';
                    passwordBar4.current.style.backgroundColor = '#9E9E9E';
                }
                if (passwordBar5 && passwordBar5.current) {
                    passwordBar5.current.style.borderColor = '#9E9E9E';
                    passwordBar5.current.style.backgroundColor = '#9E9E9E';
                }
                if (passwordBar6 && passwordBar6.current) {
                    passwordBar6.current.style.borderColor = '#9E9E9E';
                    passwordBar6.current.style.backgroundColor = '#9E9E9E';
                }
                break;
            case 2:
                if (passwordBar1 && passwordBar1.current) {
                    passwordBar1.current.style.borderColor = "yellow";
                    passwordBar1.current.style.backgroundColor = "yellow";
                }
                if (passwordBar2 && passwordBar2.current) {
                    passwordBar2.current.style.borderColor = "yellow";
                    passwordBar2.current.style.backgroundColor = "yellow";
                }
                if (passwordBar3 && passwordBar3.current) {
                    passwordBar3.current.style.borderColor = "yellow";
                    passwordBar3.current.style.backgroundColor = "yellow";
                }
                if (passwordBar4 && passwordBar4.current) {
                    passwordBar4.current.style.borderColor = "yellow";
                    passwordBar4.current.style.backgroundColor = "yellow";
                }
                if (passwordBar5 && passwordBar5.current) {
                    passwordBar5.current.style.borderColor = '#9E9E9E';
                    passwordBar5.current.style.backgroundColor = '#9E9E9E';
                }
                if (passwordBar6 && passwordBar6.current) {
                    passwordBar6.current.style.borderColor = '#9E9E9E';
                    passwordBar6.current.style.backgroundColor = '#9E9E9E';
                }
                break;
            case 3:
                if (passwordBar1 && passwordBar1.current) {
                    passwordBar1.current.style.borderColor = "green";
                    passwordBar1.current.style.backgroundColor = "green";
                }
                if (passwordBar2 && passwordBar2.current) {
                    passwordBar2.current.style.borderColor = "green";
                    passwordBar2.current.style.backgroundColor = "green";
                }
                if (passwordBar3 && passwordBar3.current) {
                    passwordBar3.current.style.borderColor = "green";
                    passwordBar3.current.style.backgroundColor = "green";
                }
                if (passwordBar4 && passwordBar4.current) {
                    passwordBar4.current.style.borderColor = "green";
                    passwordBar4.current.style.backgroundColor = "green";
                }
                if (passwordBar5 && passwordBar5.current) {
                    passwordBar5.current.style.borderColor = '#9E9E9E';
                    passwordBar5.current.style.backgroundColor = '#9E9E9E';
                }
                if (passwordBar6 && passwordBar6.current) {
                    passwordBar6.current.style.borderColor = '#9E9E9E';
                    passwordBar6.current.style.backgroundColor = '#9E9E9E';
                }
                break;
            case 4:
                if (passwordBar1 && passwordBar1.current) {
                    passwordBar1.current.style.borderColor = "green";
                    passwordBar1.current.style.backgroundColor = "green";
                }
                if (passwordBar2 && passwordBar2.current) {
                    passwordBar2.current.style.borderColor = "green";
                    passwordBar2.current.style.backgroundColor = "green";
                }
                if (passwordBar3 && passwordBar3.current) {
                    passwordBar3.current.style.borderColor = "green";
                    passwordBar3.current.style.backgroundColor = "green";
                }
                if (passwordBar4 && passwordBar4.current) {
                    passwordBar4.current.style.borderColor = "green";
                    passwordBar4.current.style.backgroundColor = "green";
                }
                if (passwordBar5 && passwordBar5.current) {
                    passwordBar5.current.style.borderColor = "green";
                    passwordBar5.current.style.backgroundColor = "green";
                }
                if (passwordBar6 && passwordBar6.current) {
                    passwordBar6.current.style.borderColor = "green";
                    passwordBar6.current.style.backgroundColor = "green";
                }

                break;

        }
    }
}
export default passwordStrengthChecker;