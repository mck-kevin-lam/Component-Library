import React, { ReactElement } from "react";

interface IButtonProps {
  buttonText: string;
}

export const Button = ({ buttonText }: IButtonProps): ReactElement => (
  <button type="button">{buttonText}</button>
);
