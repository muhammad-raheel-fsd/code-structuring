import FormInput from "@/components/common/FormInput/Index";
import React from "react";

const ArticleForm = () => {
  return (
    <form action="">
      <FormInput
        label="Enter your name"
        placeholder="Enter your name"
        required
        type="text"
        errorMessage="Name is required field"
      />
      <FormInput
        label="Enter your email"
        placeholder="Enter your email"
        required
        type="email"
        errorMessage="Email is required field"
      />
      <FormInput
        label="Enter your DOB"
        required
        type="date"
        errorMessage="Date is required field"
      />
    </form>
  );
};

export default ArticleForm;
