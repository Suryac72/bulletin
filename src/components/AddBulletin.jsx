import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from 'next/navigation'
import { useState } from "react";
const AddBulletin = () => {
  const router = useRouter();
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true); 

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("image", data?.image?.[0]); 

    try {
      const res = await fetch("http://localhost:3000/api/bulletins", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        toast.success("Bulletin added successfully!", {
          position: "center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        router.push('/')
      } else {
        toast.error("Oops! Something is wrong.", {
          position: "center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
      }

      setLoading(false); 
    } catch (error) {
      console.error("Error adding bulletin:", error);
    }
  }


  return (
    <FormProvider setValue={setValue}>
      <ToastContainer />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center h-full mt-24"
      >
        <div className="rounded-lg shadow-lg p-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 bg-[#F2EFE5]">
          <h1 className="text-4xl font-bold mb-10">Add Bulletin</h1>
          <div className="grid gap-6 mb-6 md:grid-cols-1">
            <Input
              label="Title"
              required={true}
              placeholder="Enter your title"
              register={register}
              errors={errors}
              name="title"
              validationSchema={{
                required: "Title is required",
              }}
            />
            <Input
              label="Description"
              placeholder="Enter description"
              register={register}
              errors={errors}
              name="description"
              required={true}
              validationSchema={{
                required: "Description is required",
              }}
            />
            <Input
              label="Upload Image"
              type="file"
              register={register}
              name="image"
            />
            <div className="flex justify-end">
              <Button title={`${loading ? 'Please wait.........':'Add Bulletin'}`} type="submit" />
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};


export default AddBulletin;
