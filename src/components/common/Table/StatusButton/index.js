import React from "react";
import { Button } from "./units";

export const StatusButton = ({ status }) => {
  switch (status) {
    case "stopped": {
      return <Button bgColor={"red"}>Остановлен</Button>;
    }
    case "completed": {
      return <Button bgColor={"green"}>Завершено</Button>;
    }
    case "waiting_info": {
      return <Button bgColor={"grey"}>Ждем информацию</Button>;
    }
    default: {
      return <Button bgColor={"ghostwhite"}>Неизвестно</Button>;
    }
  }
};
