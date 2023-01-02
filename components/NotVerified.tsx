import React from "react";

const NotVerified = () => {
  return (
    <div className="flex items-center justify-center bg-red-100 py-4 gap-3">
      <p className="text-sm">
        To publish your profile please verify your account by clicking the link
        we’ve sent to your email (akinkunmioye42@gmail.com).
      </p>
      <b className="underline text-red-500">Resend verification link</b>
    </div>
  );
};

export default NotVerified;
