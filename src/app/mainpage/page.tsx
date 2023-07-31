"use client";
import TesteComponent from "@/components/TesteComponent";

export interface IRegister {
  name: string;
  age: number;
  birthDate?: Date;
  email: string;
}

export const register: IRegister = {
  name: "John Corno",
  age: 20,
  birthDate: new Date(1666, 2, 31),
  email: "JohnCorno20years@gmail.com",
};

export default function MainPage() {
  return (
    <>
      <TesteComponent
        name={register.name}
        age={register.age}
        birthDate={register.birthDate}
        email={register.email}
      ></TesteComponent>
      ;
    </>
  );
}
