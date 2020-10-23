import React from "react";
import { Button } from "react-bootstrap";

const ButtonLoading = ({ title, onClick, loading }) => {
  if (loading) {
    return (
      <Button
        onClick={onClick}
        className="m-2"
        type="submit"
        disable
        variant="secondary"
      >
        Loading...
      </Button>
    );
  }
  return (
    <Button onClick={onClick} className="m-2" variant="primary" type="submit">
      {title}
    </Button>
  );
};

export default ButtonLoading;
