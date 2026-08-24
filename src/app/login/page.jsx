"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";
import React from "react";

const LoginPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    console.log(user);

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });

    if (data) {
      redirect("/");
    }

    if (error) {
      // toast
      alert("Error");
    }

    console.log({ data, error });
  };

  const handleGoogleSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="flex items-center justify-center p-4 min-h-[80vh]">
      <Card className="border rounded-none m-10 w-">
        <Form onSubmit={onSubmit} className="flex flex-col gap-4">
          {/* Email */}
          <TextField
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          {/* Password */}
          <TextField
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <div className="flex justify-center gap-2">
            <Button type="submit" className={"w-full rounded-none"}>
              <Check />
              Submit
            </Button>
          </div>
        </Form>

        <div className="flex items-center justify-center">
          <Separator />
          <div className="whitespace-nowrap">Or sign in with</div>
          <Separator />
        </div>

        <div>
          <Button
            onClick={handleGoogleSignin}
            className={"w-full rounded-none"}
          >
            Sign in with Google
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
