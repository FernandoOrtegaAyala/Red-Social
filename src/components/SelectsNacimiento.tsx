"use client";

import { useRef } from "react";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

import { Label } from "@/components/ui/label";

export default function SelectsNacimiento({
  birthday,
  year,
  month,
  january,
  february,
  march,
  april,
  may,
  june,
  july,
  august,
  september,
  october,
  november,
  december,
  day,
  register,
  setValue,
  errors,
  requiredYear,
  requiredMonth,
  requiredDay,
}: {
  birthday: string;
  year: string;
  month: string;
  january: string;
  february: string;
  march: string;
  april: string;
  may: string;
  june: string;
  july: string;
  august: string;
  september: string;
  october: string;
  november: string;
  december: string;
  day: string;
  requiredYear: string;
  requiredMonth: string;
  requiredDay: string;
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  errors: FieldErrors<FieldValues>;
}) {
  const mesRef = useRef<HTMLInputElement>(null);

  const handleMonthChange = () => {
    // Acceder al valor solo si la referencia tiene un valor
    if (mesRef.current) {
      console.log(mesRef.current.textContent);
    }
  };

  return (
    <>
      <Label htmlFor="año">{birthday}</Label>
      {errors.año && <span className="text-red-600">{errors.año.message}</span>}
      {errors.mes && <span className="text-red-600">{errors.mes.message}</span>}
      {errors.dia && <span className="text-red-600">{errors.dia.message}</span>}
      <div className="flex items-center justify-between">
        <div className="flex justify-center items-center">
          <select
            className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-2 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
            {...register("año", {
              required: {
                value: true,
                message: requiredYear,
              },
            })}>
            <option
              value=""
              className="disabled selected hidden text-muted-foreground">
              {year}
            </option>
            {Array.from({ length: 2008 - 1960 + 1 }, (_, i) => (
              <option key={i} value={`${2008 - i}`}>
                {2008 - i}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-center items-center">
          <select
            className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-2 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
            {...register("mes", {
              required: {
                value: true,
                message: requiredMonth,
              },
            })}>
            <option value="" className="disabled selected hidden">
              {month}
            </option>
            <option value="01">{january}</option>
            <option value="02">{february}</option>
            <option value="03">{march}</option>
            <option value="04">{april}</option>
            <option value="05">{may}</option>
            <option value="06">{june}</option>
            <option value="07">{july}</option>
            <option value="08">{august}</option>
            <option value="09">{september}</option>
            <option value="10">{october}</option>
            <option value="11">{november}</option>
            <option value="12">{december}</option>
          </select>
        </div>
        <div className="flex justify-center items-center">
          <select
            className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-2 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
            {...register("dia", {
              required: {
                value: true,
                message: requiredDay,
              },
            })}>
            <option value="" className="disabled selected hidden">
              {day}
            </option>
            {Array.from({ length: 31 }, (_, i) => {
              const day = (i + 1).toString().padStart(2, "0");
              return (
                <option key={i} value={day}>
                  {day}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </>
  );
}
