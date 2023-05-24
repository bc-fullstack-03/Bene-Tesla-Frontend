import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AuthForm, { Auth } from "../../components/Authform/index";
import api from "../../services/api";
interface UserToken {
    profile: {
        _id: string;
        name: string;
    };
    user: string;
}

function Login() {

    const navigate = useNavigate()
   

    async function handleLogin(auth: Auth) {
        try {
            const res = await toast.promise(api.post('/security/login', auth), {
                pending: 'loading...',
            })

            if (res.status === 200) {
                toast.success("User logged in", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                });
            }

            const decodedToken = (jwt_decode(res.data.accessToken)) as UserToken
            localStorage.setItem('profile', decodedToken.profile._id)
            localStorage.setItem('name', decodedToken.profile.name)
            localStorage.setItem('user', decodedToken.user)
            localStorage.setItem('accessToken', res.data.accessToken)
            return navigate("/Home")
        } catch (err) {
            console.error(err)
            toast.error("Please enter a valid username and password", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
            });
        }
    }

    return (
        <>
            <AuthForm
                formTitle="With your account"
                submitFormButton="Login"
                linkDescription="Don't have an account? create one here"
                submitFormButtonAction={handleLogin}
                routeName="/Signup"
            />
            <ToastContainer />
        </>
    )
}

export default Login