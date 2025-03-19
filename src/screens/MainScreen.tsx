import React, { useEffect } from "react";
import { TrackList } from "@components/TrackList/TrackList";
import { Layout } from "@src/theme/Layout";
import { observer } from "mobx-react-lite";
import { useStores } from "@store";

export const MainScreen = observer(() => {
  const {
    UserStore: { user, fetchUser },
  } = useStores();
  console.log("user1", user);
  useEffect(() => {
    // UseAuthorized();
    if (!user) {
      fetchUser();
      console.log("fetch");
    }
  }, []);

  // const navigate = useNavigate();

  // if (!user?.id) {
  //   navigate(Path.TO_AUTH);
  // }
  console.log("user data main screen", user);

  return (
    <Layout>
      <TrackList />
    </Layout>
  );
});
