import React, { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let count = 0;

function Form() {
  const { register, control, handleSubmit, formState, watch } = useForm({
    defaultValues: {
      username: "",
      email: "sriram@gmail.com",
      channel: "sriram",
      social: {
        twitter: "",
        facebook: "",
      },
      phoneNumbers: [{ number: "" }],
    },
  });

  const { errors, isDirty, isValid, touchedFields } = formState;

  const { fields, append, remove } = useFieldArray({
    name: "phoneNumbers",
    control,
  });

  count++;

  useEffect(() => {
    const subscription = watch((value) => {
      console.log(value);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [watch]);

  const user = watch("username");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1>render-{count}</h1>
      {user && <h1>Hello {user}</h1>}
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            {...register("username", {
              required: {
                value: true,
                message: "Username is required",
              },
            })}
          />
          <p>{errors.username?.message}</p>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
          />
          <p>{errors.email?.message}</p>
        </div>

        <div>
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            {...register("channel", {
              required: {
                value: true,
                message: "Channel is required",
              },
            })}
          />
          <p>{errors.channel?.message}</p>
        </div>

        <div>
          <label htmlFor="twitter">Twitter</label>
          <input
            type="text"
            id="twitter"
            {...register("social.twitter", {
              required: {
                value: true,
                message: "Twitter is required",
              },
            })}
          />
          <p>{errors.social?.twitter?.message}</p>
        </div>

        <div>
          <label htmlFor="facebook">Facebook</label>
          <input
            type="text"
            id="facebook"
            {...register("social.facebook")}
          />
          <p>{errors.social?.facebook?.message}</p>
        </div>

        <div>
          <label>Phone Numbers</label>
          {fields.map((field, index) => (
            <div className="form-control" key={field.id}>
              <input
                type="text"
                {...register(`phoneNumbers.${index}.number`)}
              />
              {index > 0 && (
                <button type="button" onClick={() => remove(index)}>
                  Remove
                </button>
              )}
            </div>
          ))}
          <button type="button" onClick={() => append({ number: "" })}>
            Add
          </button>
        </div>

        <button type="submit">Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default Form;
