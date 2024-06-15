import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  errors: FieldErrors<FieldValues>;
}) {
  return (
    <>
      <Label htmlFor="año">{birthday}</Label>
      <div className="flex flex-col">
        {errors.anio && (
          <span className="text-red-600">{errors.anio.message}</span>
        )}
        {errors.mes && (
          <span className="text-red-600">{errors.mes.message}</span>
        )}
        {errors.dia && (
          <span className="text-red-600">{errors.dia.message}</span>
        )}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex justify-center items-center">
          <Select
            {...register("anio", {
              required: {
                value: true,
                message: requiredYear,
              },
            })}>
            <SelectTrigger>
              <SelectValue placeholder={year} />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 2008 - 1960 + 1 }, (_, i) => (
                <SelectItem key={i} value={`${2008 - i}`}>
                  {2008 - i}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex justify-center items-center">
          <Select
            {...register("mes", {
              required: {
                value: true,
                message: requiredMonth,
              },
            })}>
            <SelectTrigger>
              <SelectValue placeholder={month} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">{january}</SelectItem>
              <SelectItem value="2">{february}</SelectItem>
              <SelectItem value="3">{march}</SelectItem>
              <SelectItem value="4">{april}</SelectItem>
              <SelectItem value="5">{may}</SelectItem>
              <SelectItem value="6">{june}</SelectItem>
              <SelectItem value="7">{july}</SelectItem>
              <SelectItem value="8">{august}</SelectItem>
              <SelectItem value="9">{september}</SelectItem>
              <SelectItem value="10">{october}</SelectItem>
              <SelectItem value="11">{november}</SelectItem>
              <SelectItem value="12">{december}</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex justify-center items-center">
          <Select
            {...register("dia", {
              required: {
                value: true,
                message: requiredDay,
              },
            })}>
            <SelectTrigger>
              <SelectValue placeholder={day} />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 31 }, (_, i) => (
                <SelectItem key={i} value={`${1 + i}`}>
                  {1 + i}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
}
