import { useEffect, useState } from "react"
import Heading from "../Heading/Heading"
import Text from "../Text/Text"
import { TextInput } from "../textInput/TextInput"
import Button from "../Btn/Button"
import logo from '../../img/parrotLogo.svg'
import { User, Lock } from 'phosphor-react'
import "./Logo.css"
import { Link } from 'react-router-dom'
import { FormEvent } from "react"
import 'react-toastify/dist/ReactToastify.css';
interface AuthFormProps {
    formTitle: string;
    submitFormButton: string;
    linkDescription: string;
    submitFormButtonAction: (auth: Auth) => {};
    routeName: string;
    showNameInput?: boolean;
}

interface AuthFormElements extends HTMLFormControlsCollection {
    name?: HTMLInputElement;
    user: HTMLInputElement;
    password: HTMLInputElement;
}

interface AuthFormElement extends HTMLFormElement {
    readonly elements: AuthFormElements;
}

export interface Auth {
    name?: string;
    user: string;
    password: string;
}


function AuthForm({ formTitle, submitFormButton, linkDescription, submitFormButtonAction, routeName, showNameInput }: AuthFormProps) {

    const [inputValues, setInputValue] = useState({
        user: "",
        password: ""
    });

    const [validation, setValidation] = useState({
        user: "",
        password: ""
    });

    const [formValid, setFormValid] = useState(false)
    const [userValid, setUserValid] = useState(false)
    const [passwordValid, setPasswordValid] = useState(false)

    function handleChange(event: any) {
        const { name, value } = event.target;
        setInputValue({ ...inputValues, [name]: value });
    }

    const checkValidations = () => {
        let errors = validation;
        const usernameRegex = /^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

        if (usernameRegex.test(inputValues.user)) {
            errors.user = ''
            setUserValid(true)
        } else {
            errors.user = 'The minimum length is 3 characters - only letters, numbers, spaces, hyphens and underscores are allowed'
            setUserValid(true)
        }

        if (passwordRegex.test(inputValues.password)) {
            errors.password = ''
            setPasswordValid(true)
        } else {
            errors.password = 'The minimum length is 8 characters - must contain at least one uppercase letter, one lowercase letter and one number'
            setPasswordValid(false)
        }

        if (userValid && passwordValid) setFormValid(true)
        else setFormValid(false)

        setValidation({ ...errors })
    }

    useEffect(() => {
        checkValidations();
    }, [inputValues, userValid, passwordValid, formValid]);


    function handleSubmit(event: FormEvent<AuthFormElement>) {
        event.preventDefault()
        const form = event.currentTarget

        const auth = {
            name: form.elements.name?.value,
            user: form.elements.user.value,
            password: form.elements.password.value
        }

        submitFormButtonAction(auth)
    }

    return (
        <div className="h-screen w-screen flex flex-col items-center bg-[#1C1C1C] rounded-md p-7">
            <header className="flex flex-col items-center" >

                <div className="cards">
                    <figure className="card">
                        <figcaption className="card_title">
                            <img src={logo} alt="Conect" className="logo" />

                        </figcaption>
                    </figure>
                </div>
                <Heading size="lg">Connect Now</Heading>
                <Text size="md" className="mt-1 text-gray-500">{formTitle}</Text>
            </header>

            <form onSubmit={handleSubmit} className=" mt-20 flex flex-col gap-3 items-stretch w-full max-w-sm">
                {showNameInput && (
                    <label htmlFor="name" className=" flex flex-col gap-1">
                        <Text size="md"> Nome</Text>
                        <TextInput.Root>
                            <TextInput.Icon><User />
                            </TextInput.Icon>
                            <TextInput.Input type="text" id="name" name="name" placeholder="Digite seu nome"></TextInput.Input>
                        </TextInput.Root>
                    </label>
                )}

                <label htmlFor="user" className=" flex flex-col gap-1">
                    <Text size="md">Usuário</Text>
                    <TextInput.Root>
                        <TextInput.Icon><User />

                        </TextInput.Icon>
                        <TextInput.Input value={inputValues.user} onChange={(event) => handleChange(event)} type="text" id="user" name="user" placeholder="Digite seu login" required></TextInput.Input>
                    </TextInput.Root>

                    {showNameInput && validation.user !== "" && (
                        <p className="text-xs text-primaryDark">{validation.user}</p>
                    )}
                </label>
                <label htmlFor="password" className=" flex flex-col gap-1">
                    <Text size="md">Password</Text>
                    <TextInput.Root>
                        <TextInput.Icon><Lock /></TextInput.Icon>
                        <TextInput.Input value={inputValues.password} onChange={(event) => handleChange(event)} type="password" id="password" name="password" placeholder="*******" required></TextInput.Input>
                    </TextInput.Root>
                    {showNameInput && validation.password !== "" && (
                        <p className="text-xs text-primaryDark">{validation.password}</p>
                    )}
                </label>
                <Button type="submit" disabled={!formValid} className="mt-4">{submitFormButton}</Button>

            </form>

            <footer className=" flex flex-col items-center gap-4 mt-3">
                <Text asChild size="sm">
                    <Link className=" text-blue-500 hover:underline"
                        to={routeName}
                    >
                        {linkDescription}
                    </Link>
                </Text>
            </footer>

        </div>

    )
}

export default AuthForm