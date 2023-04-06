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
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
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
        console.log(existed);
        console.log(id);
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
