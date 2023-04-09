"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Banner, { BannerData } from "./Banner";

type Form = {
  from: string;
  subject: string;
  message: string;
};
export default function ContactForm() {
  const [form, setForm] = useState<Form>({
    from: "",
    subject: "",
    message: "",
  });
  const [banner, setBanner] = useState<BannerData | null>(null);
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    setBanner({ message: "성공", state: "success" });
    setTimeout(() => {
      setBanner(null);
    }, 3000);
  };

  return (
    <>
      {banner && <Banner banner={banner} />}
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md flex flex-col gap-2 m-4 p-4 bg-slate-700 rounded-xl text-white"
      >
        <label htmlFor="from" className="font-semibold">
          Your Email
        </label>
        <input
          type="email"
          id="from"
          name="from"
          required
          autoFocus
          value={form.from}
          onChange={onChange}
        />
        <label htmlFor="subject">subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={onChange}
        />
        <label htmlFor="message">Message</label>
        <textarea
          className="text-black"
          rows={10}
          id="message"
          name="message"
          required
          value={form.message}
          onChange={onChange}
        />
        <button className="bg-yellow-300 text-black font-bold hover:bg-yellow-400">
          submit
        </button>
      </form>
    </>
  );
}
