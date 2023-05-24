import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AuthForm, { Auth } from "../../components/Authform/index";
import api from "../../services/api";


function SignUp() {

    const navigate = useNavigate()
    async function handleRegister(auth: Auth) {
        try {
            const res = await toast.promise(api.post('/security/register', auth), {
                pending: 'loading...',
            })
            if(res.status === 200) {
                toast.success("User registered successfully", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,

                });
            }

            return navigate("/")
        } catch(err) {
            console.log(err)
            toast.error("Ops! something went wrong", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,

            });
        }
    }

    return (
        <AuthForm 
            formTitle="Login to your account"
            submitFormButton="Sign up"
            linkDescription="Do you already have an account?"
            submitFormButtonAction={handleRegister}
            routeName="/"
            showNameInput
        />
    )
}

export default SignUp