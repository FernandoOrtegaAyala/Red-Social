import { useTranslations } from "next-intl";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectsNacimiento() {
  const t = useTranslations("Form");
  return (
    <>
      <Label htmlFor="año">{t("birthday")}</Label>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex justify-center items-center">
          <Select>
            <SelectTrigger id="año">
              <SelectValue placeholder={t("year")} />
            </SelectTrigger>
            <SelectContent>
              {Array.from(
                { length: new Date().getFullYear() - 1960 + 1 },
                (_, i) => (
                  <SelectItem key={i} value={`${new Date().getFullYear() - i}`}>
                    {new Date().getFullYear() - i}
                  </SelectItem>
                )
              )}
            </SelectContent>
          </Select>
        </div>
        <div className="flex justify-center items-center">
          <Select>
            <SelectTrigger id="mes">
              <SelectValue placeholder={t("month")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">{t("january")}</SelectItem>
              <SelectItem value="2">{t("february")}</SelectItem>
              <SelectItem value="3">{t("march")}</SelectItem>
              <SelectItem value="4">{t("april")}</SelectItem>
              <SelectItem value="5">{t("may")}</SelectItem>
              <SelectItem value="6">{t("june")}</SelectItem>
              <SelectItem value="7">{t("july")}</SelectItem>
              <SelectItem value="8">{t("august")}</SelectItem>
              <SelectItem value="9">{t("september")}</SelectItem>
              <SelectItem value="10">{t("october")}</SelectItem>
              <SelectItem value="11">{t("november")}</SelectItem>
              <SelectItem value="12">{t("december")}</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex justify-center items-center">
          <Select>
            <SelectTrigger id="dia">
              <SelectValue placeholder={t("day")} />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 31 }, (_, i) => (
                <SelectItem key={i} value={`${31 - i}`}>
                  {31 - i}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
}
