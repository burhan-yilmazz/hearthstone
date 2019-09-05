import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  searchCard,
  setSearchKeyword,
  setCardDefault,
} from "Redux/Actions/CardActions";
import { useDebounce } from "Core/CustomHooks";
import { wp } from "Core/Utils";
import Constants from "Redux/Constants";

const Input = styled.TextInput`
  border-width: 0px;
  border-color: #fff;
  padding: 10px;
  margin: ${wp(4)}px;
  background-color: #fff;
  border-width: 1px;
  border-radius: 6px;
  padding-left: 12px;
  font-size: 16px;
  color: #011f3f;
`;

const SearchCardInput = ({
  searchCard,
  setSearchKeyword,
  keyword,
  setCardDefault,
}) => {
  const debouncedSearchTerm = useDebounce(keyword, 500);

  useEffect(() => {
    return () => setCardDefault(Constants.ACTION_SEARCHCARD_DEFAULT);
  }, []);

  useEffect(() => {
    if (debouncedSearchTerm) {
      searchCard(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <Input
      onChangeText={setSearchKeyword}
      value={keyword}
      placeholder="Please write card name"
    />
  );
};

const mapStateToProps = state => {
  const { keyword } = state[Constants.STATE_CARD];

  return { keyword };
};

export default connect(
  mapStateToProps,
  { searchCard, setSearchKeyword, setCardDefault },
)(SearchCardInput);
