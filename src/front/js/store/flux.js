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
      //characteristics: [],
      //characters: [],
      people: JSON.parse(localStorage.getItem("people")) || [],
      planets: JSON.parse(localStorage.getItem("planets")) || [],
      //   planetCharacteristics: [],
      //   vehicleCharacteristics: [],
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
      //   getCharacteristics: () => {
      //     const store = getStore();
      //     for (const character of store.characters) {
      //       let id = character.uid;
      //       const apiUrl = `https://www.swapi.tech/api/people/${id}`;
      //       fetch(apiUrl)
      //         .then((Response) => {
      //           if (Response.ok) {
      //             return Response.json();
      //           }
      //           throw new Error("Un error ha ocurrido");
      //         })
      //         .then((body) =>
      //           setStore({
      //             characteristics: [
      //               ...store.characteristics,
      //               ,
      //               {
      //                 uid: body.result.uid,
      //                 _id: body.result._id,
      //                 ...body.result.properties,
      //               },
      //             ],
      //           })
      //         )
      //         .catch((error) => console.log(error));
      //     }
      //   },

      //   getCharacters: () => {
      //     const apiUrl = `https://www.swapi.tech/api/people/`;
      //     fetch(apiUrl)
      //       .then((response) => {
      //         if (response.ok) {
      //           return response.json();
      //         }
      //         throw new Error("Un Error ha ocurrido");
      //       })
      //       .then((body) => setStore({ characters: body.results }))
      //       .catch((error) => console.log(error));
      //   },

      //   getPlanetCharacteristics: () => {
      //     const store = getStore();
      //     for (const character of store.planets) {
      //       let id = character.uid;
      //       const apiUrl = `https://www.swapi.tech/api/planets/${id}`;
      //       fetch(apiUrl)
      //         .then((response) => {
      //           if (response.ok) {
      //             return response.json();
      //           }
      //           throw new Error("Un error ha ocurrido");
      //         })
      //         .then((body) =>
      //           setStore({
      //             planetCharacteristics: [
      //               ...store.planetCharacteristics,
      //               {
      //                 uid: body.result.uid,
      //                 _id: body.result._id,
      //                 ...body.result.properties,
      //               },
      //             ],
      //           })
      //         )
      //         .catch((error) => console.log(error));
      //     }
      //   },

      //   getPlanet: () => {
      //     const apiUrl = `https://www.swapi.tech/api/planets/`;
      //     fetch(apiUrl)
      //       .then((Response) => {
      //         if (Response.ok) {
      //           return Response.json();
      //         }
      //         throw new Error("Un error ha ocurrido");
      //       })
      //       .then((body) => setStore({ planet: body, results }))
      //       .catch((error) => console.log(error));
      //   },

      //   getVehicleCharacteristics: () => {
      //     const store = getStore();
      //     for (const character of store.vehicleCharacteristics) {
      //       let id = character.iud;
      //       const apiUrl = `https://www.swapi.tech/api/vehicles/${id}`;
      //       fetch(apiUrl)
      //         .then((Response) => {
      //           if (Response.ok) {
      //             return Response.json();
      //           }
      //           throw new Error("Un error ha ocurrido");
      //         })
      //         .then((body) =>
      //           setStore({
      //             vehicleCharacteristics: [
      //               ...store.vehicleCharacteristics,
      //               {
      //                 uid: body.result.uid,
      //                 _id: body.result._id,
      //                 ...body.result.properties,
      //               },
      //             ],
      //           })
      //         )
      //         .catch((error) => console.log(error));
      //     }
      //   },

      //   getVehicle: () => {
      //     const apiUrl = `https://www.swapi.tech/api/vehicles/`;
      //     fetch(apiUrl)
      //       .then((Response) => {
      //         if (Response.ok) {
      //           return Response.json();
      //         }
      //         throw new Error("Un error ha ocurrido");
      //       })
      //       .then((body) => setStore({ vehicle: body.results }))
      //       .catch((error) => console.log(error));
      //   },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },

      toggleFavorite: (item) => {
        const store = getStore();
        const actions = getActions();
        if (actions.isFavorite(item.name)) {
          const newFavorites = store.favorites.filter((fav) => {
            return fav.name !== item.name;
          });
          setStore({
            favorites: newFavorites,
          });
        } else {
          setStore({
            favorites: [...store.favorites, item],
          });
        }
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
