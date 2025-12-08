import React from "react";
import { Link } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
type Inputs = {
    name: string
    email: string
    password: string
}

const Home: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const userInfo={
            name:data.name,
            email:data.email,
            password:data.password,
        }
        await axios.post("http://localhost:4001/users/signup", userInfo)
        .then((res)=>{
            console.log(res.data)
            if(res.data){
                toast.success("Signup successful")
            }
            localStorage.setItem("Users", JSON.stringify(res.data.user));
        }).catch((err)=>{
            if(err.response){
                console.log(err);
                toast.error("Error: " + err.response.data.message);
            }
            
        })
    }
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <div className="mt-4 space-y-2">
                <span>Name</span>
                <br/>
                <label className="input validator">
                    <input
                        type="text"
                        placeholder="Enter your fullname"
                        required
                        {...register("name", { required: true })}
                    />
                </label>
            </div>
            <div className="mt-4 space-y-2">
                <span>Email</span>
                <br/>
                <label className="input validator">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                        >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </g>
                    </svg>
                    <input type="email" placeholder="Entrer votre email" required
                    {...register("email", { required: true })} />
                </label>
            </div>
            <div className="mt-4 space-y-2">
                <span>Mot de passe</span>
                <br/>
                <label className="input validator">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/4000/svg" viewBox="0 0 24 24">
                        <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                        >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </g>
                    </svg>
                    <input
                        type="password"
                        required
                        placeholder="Password"
                        minLength={8}
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Doit avoir au minimum 8 caractères, avec au moins un nombre, une minuscule et une majuscule"
                        {...register("password", { required: true })}
                    />
                    <p className="validator-hint hidden">
                        Doit avoir minimum 8 caractères, avec
                        <br />Au moins un nombre <br />Au moins une minuscule <br />Au moins une majuscule
                    </p>
                </label>
            </div>
                <button className="bg-yellow-500 text-white rounded-md px-3 py-1 hover:bg-yellow-500 duration-200">
                    Signup
                </button>
                <p>
                    Already have an account?{" "}
                    <Link
                    to="/login"
                    className="underline text-blue-500 cursor-pointer"
                    >
                        Login
                    </Link>{" "}
                </p>
                
        </form>
    </div>
    </>
  );
};

export default Home;