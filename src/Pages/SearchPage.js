import React from 'react';
import styled from 'styled-components';
import SearchResult from '../Components/Search/SearchResult';
import SearchMap from '../Components/Search/SearchMap';
import Footer from '../Components/Main/Footer';
import SearchContentContainer from '../Containers/Search/SearchContentContainer';

const SearchPage = () => {
  return (
    <StWrapper>
      <StNav></StNav>
      <SearchContentContainer />
      <Footer />
    </StWrapper>
  );
};

const StWrapper = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const StNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  border-bottom: 1px solid gray;
  /* opacity: 0.5; */
  width: 100%;
  height: 8rem;
  z-index: 100;
`;

export default SearchPage;
