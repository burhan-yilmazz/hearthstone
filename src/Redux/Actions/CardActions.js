import Constants from "Redux/Constants";

const baseUrl = "https://omgvamp-hearthstone-v1.p.rapidapi.com/";
const headers = {
  "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
  "x-rapidapi-key": "9802431fc3msh2f2e7adbbb53b40p1be396jsn365b0d34216b",
};

export const getAllCards = () => dispatch => {
  dispatch({
    type: Constants.ACTION_GETALLCARD,
  });
  fetch(getLink("cards"), {
    method: "GET",
    headers,
  })
    .then(response => response.json())
    .then(result => {
      let mechanics = {};
      let cardsByMechanics = {};

      Object.values(result).map(category => {
        category.map(card => {
          if (card.mechanics) {
            card.mechanics.map(mechanic => {
              if (!mechanics[mechanic.name])
                mechanics[mechanic.name] = mechanic.name;
              if (!cardsByMechanics[mechanic.name])
                cardsByMechanics[mechanic.name] = [];
              cardsByMechanics[mechanic.name].push(card);
            });
          }
        });
      });

      dispatch({
        type: Constants.ACTION_GETALLCARD_SUCCESS,
        data: {
          mechanics: Object.values(mechanics),
          cardsByMechanics,
        },
      });
    })
    .catch(() => {
      dispatch({
        type: Constants.ACTION_GETALLCARD_FAILURE,
      });
    });
};

export const setSearchKeyword = keyword => dispatch => {
  dispatch({
    type: Constants.ACTION_SETSEARCHKEYWORD,
    data: { keyword },
  });
};

export const searchCard = keyword => dispatch => {
  dispatch({
    type: Constants.ACTION_SEARCHCARD,
  });

  fetch(getLink("cards/search/" + keyword), {
    method: "GET",
    headers,
  })
    .then(response => response.json())
    .then(result => {
      if (result.error) {
        return dispatch({
          type: Constants.ACTION_SEARCHCARD_FAILURE,
        });
      }
      dispatch({
        type: Constants.ACTION_SEARCHCARD_SUCCESS,
        data: {
          result,
        },
      });
    })
    .catch(() => {
      dispatch(setSearchKeyword(""));
      dispatch({
        type: Constants.ACTION_SEARCHCARD_FAILURE,
      });
    });
};

export const setCardDefault = type => dispatch => {
  dispatch({
    type,
  });
};

const getLink = value => `${baseUrl}${value}`;
