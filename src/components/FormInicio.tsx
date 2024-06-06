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
        <div className="grid grid-cols-2 gap-6">
          <Button variant="outline">
            <Icons.gitHub className="mr-2 h-4 w-4" />
            {t("gitIcon")}
          </Button>
          <Button variant="outline">
            <Icons.google className="mr-2 h-4 w-4" />
            Google
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
