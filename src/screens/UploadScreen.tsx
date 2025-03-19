import React from "react";
import { observer } from "mobx-react-lite";
import { throttle } from "lodash";
import { useStores } from "@store";
import { Layout } from "@src/theme/Layout";
import { Path } from "@consts/path";
import { useNavigate } from "react-router-dom";

export const UploadScreen = observer(() => {
  const {
    UserStore: { user },
  } = useStores();
  const navigate = useNavigate();

  if (!user?.id) {
    navigate(Path.TO_AUTH);
  }

  const {
    UploadStore: { setFiles, handleUpload, detach, files },
  } = useStores();

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };

  const throttledUpload = throttle(handleUpload, 1000); // Ограничение до одного запроса в секунду

  return (
    <Layout>
      <div>
        <input type="file" multiple onChange={handleFileChange} />
        <ul>
          {files.map((track, index) => (
            <li key={index}>
              {track?.file?.name} {track?.isUploaded ? "✔" : "x"}{" "}
              {track?.isOnProgress ? "LOADING..." : ""}
            </li>
          ))}
        </ul>
        <button
          onClick={throttledUpload}
          // disabled={isFetching || files.length === 0}
        >
          Загрузить
        </button>
        <button onClick={detach} disabled={files.length === 0}>
          Очистить
        </button>
      </div>
    </Layout>
  );
});
