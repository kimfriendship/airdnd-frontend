import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Subject from '../../Components/Detail/Subject';
import HomeInfos from '../../Components/Detail/HomeInfos';
import FullsizeWrapper from '../../Components/Detail/FullsizeWrapper';
import { getHome, onResize } from '../../Modules/home';

const DetailMainContainer = () => {
  const { isLoading, home, error } = useSelector(state => state.home.homeState);
  const { isScreenMedium } = useSelector(state => state.home.screenState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (home) return;
    dispatch(getHome());
  }, [dispatch]);

  window.onresize = () => dispatch(onResize());

  if (error) return <div>에러 발생! 새로고침을 해주세요</div>;

  return (
    <>
      <Subject isLoading={isLoading || !home} home={home} />
      <HomeInfos
        isLoading={isLoading || !home}
        home={home}
        isScreenMedium={isScreenMedium}
      />
      {!isLoading && home && <FullsizeWrapper home={home} />}
    </>
  );
};

export default React.memo(DetailMainContainer);