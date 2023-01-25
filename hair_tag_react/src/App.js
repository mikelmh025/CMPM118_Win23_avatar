import React, { useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import DetailSide from './components/DetailSection/DetailSide.componoent';
import MainMenu from './components/MenuSection/MainMenu.component';
import {getData} from './slices/dataFetchSlice';

function App() {

  const dispatch = useDispatch();
  const {loading, data, error} = useSelector((state) => state.data);

  const category = useSelector((state) => state.category.data);
  const [selectCategory, setSelectCategory] = useState({groupName: Object.keys(category)[0], selection: category[Object.keys(category)[0]][0].name});
  const groupLength = Object.keys(category).length;
  const [currGroupIndex, setCurrGroupIndex] = useState(0);
  const [currOptionIndex, setCurrOptionIndex] = useState(0);
  const [optionLength, setOptionLength] = useState(category[Object.keys(category)[currGroupIndex]].length);

  const handleSelect = (selectObj, groupIndex, optionIndex) => {
    setSelectCategory(selectObj);
    setCurrGroupIndex(groupIndex);
    setCurrOptionIndex(optionIndex);
    setOptionLength(category[Object.keys(category)[groupIndex]].length);
  }

  const handleNext = () => {
    if(currGroupIndex < groupLength && currOptionIndex < optionLength - 1){
      setCurrOptionIndex(currOptionIndex + 1);
      setSelectCategory({groupName: Object.keys(category)[currGroupIndex], selection: category[Object.keys(category)[currGroupIndex]][currOptionIndex + 1].name});
    }
    else if(currGroupIndex < groupLength - 1  && currOptionIndex === optionLength - 1){
      setCurrGroupIndex(currGroupIndex + 1);
      setCurrOptionIndex(0);
      setOptionLength(category[Object.keys(category)[currGroupIndex + 1]].length);
      setSelectCategory({groupName: Object.keys(category)[currGroupIndex + 1], selection: category[Object.keys(category)[currGroupIndex + 1]][0].name});
    }
    else{
      return;
    }
  }

  useEffect(() => {
    dispatch(getData());
  }, [])


  return (
    <div className='main'>
      <MainMenu onSelect={handleSelect} selectCategory={selectCategory} groupIndex={currGroupIndex} optionIndex={currOptionIndex}/>
      <DetailSide selectCategory={selectCategory} onNextClick={handleNext} data={data}/>
    </div>
  );
}

export default App;
