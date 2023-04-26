const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      endPoints: ["people", "planets", "vehicles"],
      people: JSON.parse(localStorage.getItem("people")) || [],
      planets: JSON.parse(localStorage.getItem("planets")) || [],
      vehicles: JSON.parse(localStorage.getItem("vehicles")) || [],
      favorites: [],
      urlBase: "https://www.swapi.tech/api",
      token: null,
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      syncTokenFromSessionStorage: () => {
        const token = sessionStorage.getItem("token");
        console.log("App just loaded, syncing the session storage token");
        if (token && token != "" && token != undefined)
          setStore({ token: token });
      },

      login: async (email, password) => {
        const store = getStore();
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };

        try {
          const response = await fetch(`${process.env.BACKEND_URL}/api/token`, options);
          if (response.status !== 200) {
            let showError = await response.json();
            alert(showError.msg);
            return false;
          }

          const data = await response.json();
          console.log("This came from the backend", data);
          sessionStorage.setItem("token", data.access_token);
          setStore({ token: data.access_token });
          return true;
        } catch (error) {
          console.error("There was an error trying to login in", error);
        }
      },

      logout: () => {
        sessionStorage.removeItem("token");
        console.log("Login Out");
        setStore({ token: null });
      },

      register: async (username, email, password) => {
        const store = getStore();
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            email: email,
            password: password,
          }),
        };

        try {
          const response = await fetch(
            `${process.env.BACKEND_URL}/api/users`,
            options
          );
          if (!response.ok) {
            let danger = await response.json();
            alert(danger);
            return false;
          }

          const data = await response.json();
          console.log("This came from the backend", data);
          return true;
        } catch (error) {
          console.error("There has been an error signin up");
        }
      },

      getAccess: async () => {
        const store = getStore();
        const options = {
          headers: {
            Authorization: "Bearer " + store.token,
          },
        };
        try {
          const response = await fetch(`${process.env.BACKEND_URL}/api/private`, options);
          const data = await response.json();
          setStore({ message: data.message });
          return data;
        } catch (error) {
          console.log("Error getting message from the backend", error);
        }
      },

      getItem: () => {
        const store = getStore();
        if (!store.people.length) {
          try {
            store.endPoints.forEach(async (element) => {
              let response = await fetch(`${store.urlBase}/${element}`);
              let data = await response.json();
              data.results.forEach(async (item) => {
                let responseTwo = await fetch(
                  `${store.urlBase}/${element}/${item.uid}`
                );
                let results = await responseTwo.json();
                setStore({
                  ...store,
                  [element]: [...store[element], { ...results.result }],
                });
                localStorage.setItem([element], JSON.stringify(store[element]));
              });
            });
          } catch (error) {
            console.log(error);
          }
        }
      },

      toggleFavorite: (id) => {
        const store = getStore();
        let existed = store.favorites.find((fav) => fav._id == id);
        if (!existed) {
          for (let endPoint of store.endPoints) {
            for (let item of store[endPoint]) {
              if (item._id == id) {
                setStore({
                  ...store,
                  favorites: [...store.favorites, item],
                });
                break;
              }
            }
          }
        } else {
          let newFavorite = store.favorites.filter((item) => id != item._id);
          setStore({
            ...store,
            favorites: newFavorite,
          });
          console.log("Ya existe favorito");
        }
        // const actions = getActions();
        // if (actions.isFavorite(item.name)) {
        //   const newFavorites = store.favorites.filter((fav) => {
        //     return fav.name !== item.name;
        //   });
        //   setStore({
        //     favorites: newFavorites,
        //   });
        // } else {
        //   setStore({
        //     favorites: [...store.favorites, item],
        //   });
        // }
      },

      isFavorite: (name) => {
        const store = getStore();
        return store.favorites.find((favorite) => {
          return favorite.name == name;
        });
      },
    },
  };
};

export default getState;
