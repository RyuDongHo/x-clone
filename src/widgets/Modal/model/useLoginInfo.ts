import React from "react";

export const useLoginInfo = () => {
  const [id, setId] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  return { id, password, onChangeId, onChangePassword };
};