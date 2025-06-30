"use client";
import React from "react";
import { Button, Spinner } from "react-bootstrap";
import { useFormStatus } from "react-dom";
import "./submit-button.scss";

type SubmitButtonProps = {
  title: string;
  icon?: string;
  className?: string;
};

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  title,
  icon = "send",
  className = "submit-button",
  ...rest
}) => {
  //içinde bulunduğu formun durumunu gösteren hook

  const { pending } = useFormStatus();

  return (
    <Button
      className={className}
      type="submit"
      disabled={pending}
      {...rest}
    >
      {/* eğer form pending durumundaysa spinner göster, aksi halde title ve icon göster */}
      {pending ? (
        <Spinner size="sm" />
      ) : (
        <>
          {icon && <i className={`pi pi-${icon}`}></i>}
          &nbsp;
          {title}
        </>
      )}
    </Button>
  );
};






