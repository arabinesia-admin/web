"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TUpdateSchema, updateSchema } from "@/types/type";

export function UpdateForm() {
  const [result, setResult] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TUpdateSchema>({
    resolver: zodResolver(updateSchema),
  });

  async function onUpdate(data: TUpdateSchema) {
    try {
      setErrorMessage("");
      setResult("");
      const response = await fetch("/api/update", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        setResult(result.message);
      } else {
        const error = await response.json();
        setErrorMessage(error.message);
      }
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <>
      <div className="flex flex-col gap-6 m-2 md:m-6">
        <Card className="overflow-hidden">
          <CardContent className="grid p-0 md:grid-cols-1">
            <form onSubmit={handleSubmit(onUpdate)} className="p-3 md:p-8">
              <div className="flex flex-col gap-2">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="meeting">User Meet</Label>
                  <Input
                    id="meeting"
                    type="number"
                    required
                    {...register("meeting")}
                  />
                  {errors.meeting && (
                    <p className="text-sm text-destructive">
                      {errors.meeting.message}
                    </p>
                  )}
                </div>
                <Label>Package Selection</Label>
                <select
                  className="border-2 border-gray p-3 rounded-lg"
                  id="package_level"
                  {...register("package_level")}
                >
                  <option value="1">شهرية</option>
                  <option value="2">المستوى</option>
                  <option value="3">باقات كاملة</option>
                </select>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-primary hover:bg-brand-dark"
                >
                  Register this User
                </Button>
                {result ? (
                  <p className="text-emerald-500 text-sm bg-emerald-100 border border-emerald-400 p-2  ">
                    {result}
                  </p>
                ) : null}
                {errorMessage ? (
                  <p className="text-red-500 text-sm bg-red-200 border border-red-500 p-2">
                    {errorMessage}
                  </p>
                ) : null}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
