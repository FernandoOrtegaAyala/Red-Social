import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { RiShieldUserFill } from "react-icons/ri";

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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import InputPassword from "./InputPassword";

export default function FormInicio() {
  const t = useTranslations("Home");

  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl text-center">{t("login")}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">{t("email")}</Label>
          <Input id="email" type="email" placeholder={t("emailExample")} />
        </div>
        <div className="grid gap-2">
          <InputPassword txt={t("password")} htmlForTxt="contraseña" />
          <Link
            href="/recuperar-password"
            className="underline-offset-4 hover:text-primary text-sky-700 text-xs text-right">
            {t("recoverPassword")}
          </Link>
        </div>
        <CardFooter>
          <Button variant="default" className="w-full">
            {t("signIn")}
          </Button>
          <CardDescription className="pt-3 underline underline-offset-4 hover:text-primary">
            <Link
              href="/auth/sign-up"
              className={cn("w-full", buttonVariants({ variant: "ghost" }))}>
              {t("signUp")}
            </Link>
          </CardDescription>
        </CardFooter>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              {t("signUpAlternative")}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Button
            className="flex items-center justify-center gap-2"
            variant="outline">
            <RiShieldUserFill className="h-6 w-6" />
            {t("guest")}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
