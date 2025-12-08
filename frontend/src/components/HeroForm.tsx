import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

type Inputs = {
    name: string
    images: string
}

const HeroForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const userInfo={
            name:data.name,
            images:data.images
        }
        await axios.post("http://localhost:4001/heros", userInfo)
        .then((res)=>{
            console.log(res.data)
            if(res.data){
                toast.success("Login successful");
                window.location.reload();
                
            }
            localStorage.setItem("Heroes", JSON.stringify(res.data.user));
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
                <span>Nom</span>
                <br/>
                <label className="input validator">
                    <input type="text" placeholder="Entrer le nom du héro"  required
                    {...register("name", { required: true })} />
                </label>
            </div>
            <div className="mt-4 space-y-2">
                <span>Lien image</span>
                <br/>
                <label className="input validator">
                    <input type="text" placeholder="Entrer le lien de l'image"  required
                    {...register("images", { required: true })} />
                </label>
            </div>
                <button className="bg-yellow-500 text-white rounded-md px-3 py-1 hover:bg-yellow-500 duration-200">
                    Envoyer
                </button>
        </form>
    </div>
    </>
  );
};

export default HeroForm;
