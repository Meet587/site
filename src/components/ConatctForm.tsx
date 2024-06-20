"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
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
import { Textarea } from "@/components/ui/textarea";

const ConatctForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validation = () => {
    const newErrors = { name: "", email: "", mobile: "", message: "" };

    const EMAIL_REG = new RegExp(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    const MOBILE_REG = new RegExp(/^[0-9]+$/);

    if (!formData.name) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!EMAIL_REG.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }

    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!MOBILE_REG.test(formData.mobile)) {
      newErrors.mobile = "Invalid mobile Number.";
    }

    if (!formData.message) {
      newErrors.message = "Message is required.";
    }
    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validation()) return;
    try {
      console.log(formData);
    } catch (error) {}
    setErrors({
      name: "",
      email: "",
      mobile: "",
      message: "",
    });
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Please fill out this form to contact us.
          </CardDescription>
          <form onSubmit={handleSubmit}>
            <div className="my-4">
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "border-red-400 shadow-sm" : ""}
              />
              {errors.name && <p className="error-msg">*{errors.name}</p>}
            </div>
            <div className="my-4">
              <Label htmlFor="email">Email</Label>
              <Input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "border-red-400 shadow-sm" : ""}
              />
              {errors.email && <p className="error-msg">*{errors.email}</p>}
            </div>
            <div className="my-4">
              <Label htmlFor="mobile">Mobile No</Label>
              <Input
                type="mobile"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className={errors.mobile ? "border-red-400 shadow-sm" : ""}
              />
              {errors.mobile && <p className="error-msg">*{errors.mobile}</p>}
            </div>
            <div className="my-4">
              <Label htmlFor="message">Message</Label>
              <Textarea
                rows={4}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={
                  errors.message
                    ? "border-red-400 shadow-sm resize-none"
                    : "resize-none"
                }
              />
              {errors.message && <p className="error-msg">*{errors.message}</p>}
            </div>
            <CardFooter className="flex justify-center p-0 mt-7">
              <Button
                variant={"outline"}
                size="lg"
                type="submit"
                className="font-semibold tracking-wider"
              >
                Submit
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default ConatctForm;
