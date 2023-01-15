import React from "react";

const NotVerified = ({ email }: any) => {
  return (
    <div className="flex items-center lg:flex-row flex-col justify-center bg-red-100 py-4 gap-3">
      <p className="text-sm lg:px-0 px-2">
        To publish your profile please verify your account by clicking the link
        we’ve sent to your email ({email}).
      </p>
      <b className="underline text-red-500">Resend verification link</b>
    </div>
  );
};

export default NotVerified;
