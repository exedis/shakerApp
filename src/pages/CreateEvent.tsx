import styled from "@emotion/styled";
import React from "react";

export const CreateEvent = () => {
  return (
    <div>
      <CreateEventForm>
        <input placeholder="Название события" name="title" />
        <input placeholder="Краткое описание события" name="annotation" />
        <input placeholder="Полное описание события" name="description" />
        <input placeholder="Время начала события" name="timeStart" />
        <input placeholder="Время завершение события" name="timeFinish" />
        <button>Добавить место проведения</button>
      </CreateEventForm>
    </div>
  );
};

export const CreateEventForm = styled.form`
  display: flex;
  flex-direction: column;
`;
