"use client";

import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import { ErrorFields, redirectOnSuccess, sendEmail } from "@/app/actions";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { sleeper } from "@/lib/helpers";
import { useStore } from "@/providers/dataProvider";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className="w-full text-white dark:bg-teal-500 dark:hover:bg-teal-600 font-bold dark:font-normal bg-blue-600 hover:bg-blue-800"
      style={{
        marginTop: "30px",
      }}
      disabled={pending}
    >
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

const Contact = () => {
  const [errors, setErrors] = useState<Partial<ErrorFields>>({});
  const [complete, setComplete] = useState<{
    completed: boolean;
    success: boolean;
  }>({ completed: false, success: false });
  const setActive = useStore((state) => state.setActive);

  const [ref, entry] = useIntersectionObserver({
    threshold: 0.8,
    root: null,
    rootMargin: "-20% 0% 0% -20%",
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      setActive(4);
    }
  }, [entry]);

  async function handleSubmit(formData: FormData) {
    const result = await sendEmail(formData);
    if (result?.errors) {
      console.log(result?.errors);
      setErrors(result?.errors);
      setComplete((prev) => ({ ...prev, completed: true }));
    } else {
      console.log("success");
      setComplete({ completed: true, success: true });
    }
  }

  useEffect(() => {
    if (complete.completed && complete.success) {
      (async () => {
        await sleeper(2000);
        redirectOnSuccess();
      })();
    }
  }, [complete]);

  return (
    <section
      id="contact"
      ref={ref}
      className="mb-16 scroll-mt-16 md:mb-24 xl:mb-36 xl:scroll-mt-24"
      aria-label="Contact Form"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-300/35 dark:bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 xl:sr-only xl:relative xl:top-auto xl:mx-auto xl:w-full xl:px-0 xl:py-0 xl:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-700 dark:text-slate-200 xl:sr-only">
          Contact
        </h2>
      </div>
      <div>
        <p className="mt-3 mb-6 text-base max-w-xl xl:text-lg text-gray-700 dark:text-slate-400 leading-normal text-center mx-auto">
          I&apos;m always open to new opportunities and collaborations. Feel
          free to reach out to me if you have any questions or just want to say
          hi!
        </p>
        <form action={handleSubmit} className="space-y-4 max-w-xl mx-auto">
          <div className="space-y-2">
            <Label
              htmlFor="name"
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Name
            </Label>
            <Input
              id="name"
              name="name"
              className="bg-white text-gray-900 border-gray-300 focus:border-blue-500 dark:bg-[#1a2332] dark:border-[#2a3442] dark:text-white dark:placeholder-gray-400"
            />
            {errors?.name && <p className="text-red-400">{errors.name}</p>}
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              className="bg-white text-gray-900 border-gray-300 focus:border-blue-500 dark:bg-[#1a2332] dark:border-[#2a3442] dark:text-white dark:placeholder-gray-400"
            />
            {errors?.email && <p className="text-red-400">{errors.email}</p>}
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="message"
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              className="bg-white text-gray-900 border-gray-300 focus:border-blue-500 dark:bg-[#1a2332] dark:border-[#2a3442] dark:text-white dark:placeholder-gray-400 min-h-[100px]"
            />
            {errors?.message && (
              <p className="text-red-400">{errors.message}</p>
            )}
          </div>
          <SubmitButton />
          {complete.completed && (
            <p
              className={`mt-4 text-sm ${
                Object.keys(errors!).length === 0
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {Object.keys(errors!).length === 0
                ? "Message sent successfully!"
                : errors.other
                ? errors.other
                : "Message failed to send. Please try again."}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};
export default Contact;
