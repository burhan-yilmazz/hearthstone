import React, { useEffect } from "react";
import { Loading, Cards, NotFound } from "Components";
import { connect } from "react-redux";
import Constants from "Redux/Constants";
import { searchCard } from "Redux/Actions/CardActions";
import { useDebounce } from "Core/CustomHooks";
import base64 from "Assets/images/base64";

const CardSearch = ({
  searchCard,
  searchResult,
  isLoadedSearchCards,
  keyword,
}) => {
  const debouncedSearchTerm = useDebounce(keyword, 500);
  const loading =
    keyword !== null && keyword.trim().length > 0 && !isLoadedSearchCards;

  useEffect(() => {
    if (debouncedSearchTerm) {
      searchCard(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : isLoadedSearchCards && searchResult.length < 1 ? (
        <NotFound title="There is no cards." icon={base64.NotFoundIcon} />
      ) : (
        <Cards data={searchResult || []} />
      )}
    </>
  );
};

const mapStateToProps = state => {
  const { searchResult, isLoadedSearchCards, searchCardError, keyword } = state[
    Constants.STATE_CARD
  ];

  return {
    searchResult,
    isLoadedSearchCards,
    searchCardError,
    keyword,
  };
};

export default connect(
  mapStateToProps,
  { searchCard },
)(CardSearch);
