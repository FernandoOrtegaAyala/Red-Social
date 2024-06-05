import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import InputPassword from "./InputPassword";
import SelectsNacimiento from "./SelectsNacimiento";

export default function FormCrearCuenta() {
  const t = useTranslations("Form");
  const t2 = useTranslations("Home");
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl text-center">{t2("signUp")}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="nombre">{t("firstName")}</Label>
            <Input id="nombre" type="text" placeholder={t("firstName")} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="apellidos">{t("lastName")}</Label>
            <Input id="apellidos" type="text" placeholder={t("lastName")} />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="nombre_usuario">{t("userName")}</Label>
          <Input
            id="nombre_usuario"
            type="text"
            placeholder={t("userNamePlaceholder")}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">{t2("email")}</Label>
          <Input id="email" type="email" placeholder={t2("emailExample")} />
        </div>
        <InputPassword txt={t2("password")} htmlForTxt="contraseña" />
        <InputPassword
          txt={t("confirmPassword")}
          htmlForTxt="confirmarContraseña"
        />
        <SelectsNacimiento />
        <CardFooter>
          <Button variant="default" className="w-full">
            {t2("signUp")}
          </Button>
          <CardDescription className="underline underline-offset-4 hover:text-primary">
            <Link
              href="/"
              className={cn("w-full", buttonVariants({ variant: "ghost" }))}>
              {t("alreadyHaveAccount")}
            </Link>
          </CardDescription>
        </CardFooter>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              {t2("signUpAlternative")}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Button variant="outline">
            <Icons.google className="mr-2 h-4 w-4" />
            Google
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
