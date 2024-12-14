"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const roles = ["Admin", "Editor", "Usuario Básico"];
const schema = z
  .object({
    name: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
    email: z.string().email("email inválido"),
    password: z
      .string()
      .min(8, "La contraseña debe tener al menos 8 caracteres")
      .regex(/[a-z]/, "La contraseña debe tener al menos una letra minúscula")
      .regex(/[A-Z]/, "La contraseña debe tener al menos una letra mayúscula")
      .regex(/\d/, "La contraseña debe tener al menos un número"),
    confirmPassword: z.string(),
    role: z.string().nonempty("Debes seleccionar un rol")
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Las contraseñas no coinciden"
  });

type FormData = z.infer<typeof schema>;
const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onsubmit = (data: FormData) => {
    console.log(data);
    alert(`Usuario creado exitosamente: ${JSON.stringify(data)}`);
  };

  return (
    <div>
      <div className="bg-gray-200 p-4 box-shadow rounded-lg max-w-md mx-auto mt-10">
        <h1>Register</h1>
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="mt-4">
            <label htmlFor="">Nombre Completo</label>
            <input
              id="name"
              {...register("name")}
              type="text"
              placeholder="Nombre"
              className="border border-gray-400 p-2 rounded-md w-full mt-1"
            />
            {errors.name && (
              <p className="text-red-500 text-sm pl-2 text-xs">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="mt-4">
            <label htmlFor="">Email</label>
            <input
              id="email"
              {...register("email")}
              type="email"
              placeholder="Email"
              className="border border-gray-400 p-2 rounded-md w-full mt-1"
            />
            {errors.email && (
              <p className="text-red-500 text-sm pl-2 text-xs">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mt-4">
            <label htmlFor="">Contraseña</label>
            <input
              id="password"
              {...register("password")}
              type="password"
              placeholder="Contraseña"
              className="border border-gray-400 p-2 rounded-md w-full mt-1"
            />
            {errors.password && (
              <p className="text-red-500 text-sm pl-2 text-xs">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="mt-4">
            <label htmlFor="">Confirmar Contraseña</label>
            <input
              id="confirmPassword"
              {...register("confirmPassword")}
              type="password"
              placeholder="Confirmar Contraseña"
              className="border border-gray-400 p-2 rounded-md w-full mt-1"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm pl-2 text-xs">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <div className="mt-4">
            <label htmlFor="">Selecciona tu rol</label>
            <select
              id="role"
              {...register("role")}
              className="border border-gray-400 p-2 rounded-md w-full mt-1"
            >
              <option value="">Select</option>
              {roles.map((role, index) => (
                <option key={index} value={role}>
                  {role}
                </option>
              ))}
            </select>
            {errors.role && (
              <p className="text-red-500 text-sm pl-2 text-xs">
                {errors.role.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
