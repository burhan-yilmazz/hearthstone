import Constants from "Redux/Constants";
import Reactotron from "Core/Reactotron";

const INITIAL_STATE = {
  mechanics: [],
  searchResult: [],
  isLoadedSearchCards: false,
  searchCardError: null,
  cardsByMechanics: null,
  isLoadedCards: false,
  errorMessage: null,
  keyword: null,
};

export default (state = INITIAL_STATE, { type, data }) => {
  switch (type) {
    case Constants.ACTION_GETALLCARD:
      return {
        ...state,
        ...INITIAL_STATE,
      };

    case Constants.ACTION_GETALLCARD_SUCCESS:
      Reactotron.log(data.cardsByMechanics);
      return {
        ...state,
        isLoadedCards: true,
        mechanics: data.mechanics,
        cardsByMechanics: data.cardsByMechanics,
      };

    case Constants.ACTION_GETALLCARD_FAILURE:
      return {
        ...state,
        ...INITIAL_STATE,
        errorMessage: "Mechanics are not loaded. Please retry.",
      };

    case Constants.ACTION_GETALLCARD_DEFAULT:
      return {
        ...state,
        ...INITIAL_STATE,
      };

    case Constants.ACTION_SEARCHCARD:
      return {
        ...state,
        searchResult: [],
        searchCardError: null,
        isLoadedSearchCards: false,
      };

    case Constants.ACTION_SEARCHCARD_SUCCESS:
      return {
        ...state,
        searchResult: data.result,
        isLoadedSearchCards: true,
        searchCardError: null,
      };

    case Constants.ACTION_SEARCHCARD_FAILURE:
      return {
        ...state,
        searchResult: [],
        isLoadedSearchCards: true,
        searchCardError: "Cards not loaded. Please retry action.",
      };

    case Constants.ACTION_SETSEARCHKEYWORD:
      return {
        ...state,
        keyword: data.keyword,
      };

    case Constants.ACTION_SEARCHCARD_DEFAULT:
      return {
        ...state,
        keyword: null,
        searchResult: [],
        searchCardError: null,
        isLoadedSearchCards: false,
      };

    default:
      return state;
  }
};
