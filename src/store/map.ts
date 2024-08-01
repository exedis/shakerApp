import { action, makeObservable, observable } from "mobx";

export class MapStore {
  error: string = null;

  centerMapCoordinates = [55.730265, 37.635949]; //Msk

  userPosition;

  isFetching = true;

  constructor() {
    makeObservable(this, {
      centerMapCoordinates: observable,
      isFetching: observable,
      setCenterMapOnUserPosition: action.bound,
      setMapCenterNewCoords: action.bound,
      setUserPosition: action.bound,
      attach: action,
      detach: action,
      //   setUser: action,
    });
  }

  attach = () => {
    console.log("attach");

    this.setUserPosition();
  };

  detach = () => {
    this.error = null;
  };

  setCenterMapOnUserPosition() {
    console.log("this.userPosition", this.userPosition);

    this.setMapCenterNewCoords(this.userPosition);
  }

  setMapCenterNewCoords = (newCoords) => {
    this.centerMapCoordinates = newCoords;
  };

  setUserPosition() {
    navigator.geolocation.getCurrentPosition(
      (pos) =>
        (this.userPosition = [pos.coords.latitude, pos.coords.longitude]),
      (err) => console.error(`Ошибка(${err.code}): ${err.message}`),
      { maximumAge: 60000, timeout: 5000, enableHighAccuracy: true }
    );
  }

  //   setUser = (user: Nullable<UserResponse>) => {
  //     this.user = user;
  //   };

  //   *logOut() {
  //     try {
  //       this.setUser(null);
  //       yield api.adminAuth.logout();
  //     } catch (error) {
  //       this.error = error.response?.data;
  //     }
  //   }
}
