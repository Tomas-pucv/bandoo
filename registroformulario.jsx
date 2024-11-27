import * as React from "react";
import { FormInput } from "./FormInput";

const formFields = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6bc274e2832d31e7715e44459b5502f3925130729c1bfc6dfb2a25052f278ffe?placeholderIfAbsent=true&apiKey=1d546d22bb724d1a8df01474164a0b03",
    label: "Numero de telefono/celular",
    type: "tel",
    value: "+56 9 12345678",
    placeholder: "Ingrese su número"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fdf208514b47efcf1c0213f1bf48c4fcd5edab8f25ed447a07fe6e7d470a71c2?placeholderIfAbsent=true&apiKey=1d546d22bb724d1a8df01474164a0b03",
    label: "Correo Electronico",
    type: "email", 
    value: "Ejemplo@mail.pucv.cl",
    placeholder: "Ingrese su correo"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fdf208514b47efcf1c0213f1bf48c4fcd5edab8f25ed447a07fe6e7d470a71c2?placeholderIfAbsent=true&apiKey=1d546d22bb724d1a8df01474164a0b03",
    label: "Contraseña",
    type: "password",
    value: "**************",
    placeholder: "Ingrese su contraseña"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fdf208514b47efcf1c0213f1bf48c4fcd5edab8f25ed447a07fe6e7d470a71c2?placeholderIfAbsent=true&apiKey=1d546d22bb724d1a8df01474164a0b03",
    label: "Repetir contraseña",
    type: "password",
    value: "**************",
    placeholder: "Repita su contraseña"
  }
];

export function RegisterForm() {
  return (
    <main className="flex overflow-hidden flex-col mx-auto w-full bg-white max-w-[480px]">
      <header className="flex flex-col pt-5 w-full bg-white min-h-[50px]">
        <div className="flex justify-between items-center w-full">
          <div className="flex-1 shrink gap-2.5 self-stretch pr-1.5 pl-4 my-auto text-lg leading-none text-center text-black whitespace-nowrap font-[590]">
            9:41
          </div>
          <div className="flex shrink-0 self-stretch my-auto h-2.5 w-[124px]" />
          <nav className="flex flex-1 shrink gap-2 justify-center items-center self-stretch pr-4 pl-1.5 my-auto basis-0">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7f000219d465ae2c07d4bf4fc9e69397519bc8874bb59d48fece5f116cb25c4?placeholderIfAbsent=true&apiKey=1d546d22bb724d1a8df01474164a0b03" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-[1.58] w-[19px]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0bee55f9a250185cb8f40200486c7c61d836839f4fd4ee65eaae7286c04d5d3e?placeholderIfAbsent=true&apiKey=1d546d22bb724d1a8df01474164a0b03" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-[1.42] w-[17px]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ea3995256815e40ef6204fcfe9ba3fa9f5a0f29ccb40e2f5da81c04d6dfcde2?placeholderIfAbsent=true&apiKey=1d546d22bb724d1a8df01474164a0b03" alt="" className="object-contain shrink-0 self-stretch my-auto rounded-none aspect-[2.08] w-[27px]" />
          </nav>
        </div>
      </header>

      <section className="flex overflow-hidden flex-col w-full bg-white">
        <div className="flex overflow-hidden items-start bg-white h-[833px]">
          <div className="flex flex-col bg-white h-[840px] w-[402px]">
            <div className="flex overflow-hidden justify-center items-start pt-3 pb-80 w-full bg-white min-h-[843px]">
              <form className="flex relative flex-col justify-center p-4 min-w-[240px] w-[403px]">
                <div className="flex z-0 flex-col self-center pt-14 max-w-full w-[334px]">
                  <h1 className="self-start px-12 pb-px text-3xl leading-none text-center text-blue-900 min-w-[238px]">
                    Bienvenido a Bandoo
                  </h1>

                  {formFields.map((field, index) => (
                    <FormInput key={index} {...field} />
                  ))}

                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9c69cd6c6dd889e546dc272c45779bf207c43fdca5a9577844fc738db147b1f?placeholderIfAbsent=true&apiKey=1d546d22bb724d1a8df01474164a0b03" alt="" className="object-contain z-10 mt-28 mr-3.5 mb-0 ml-3 w-full aspect-[2.45] max-w-[309px]" />
                </div>
                
                <button type="submit" className="overflow-hidden absolute px-10 py-2.5 max-w-full h-11 text-xl tracking-normal leading-none text-center text-white whitespace-nowrap rounded-3xl bg-sky-700 bg-opacity-80 bottom-[-279px] left-[31px] w-[339px]">
                  Registrarse
                </button>
              </form>
            </div>
          </div>
          <div className="flex shrink-0 h-11 min-w-[240px] w-[334px]" />
        </div>
      </section>
    </main>
  );
}
