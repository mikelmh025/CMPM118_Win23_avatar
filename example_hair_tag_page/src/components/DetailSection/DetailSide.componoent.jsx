import React, { useEffect, useState } from "react";
import './detailSide.styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { isChecked } from "../../slices/categorySlice";
import data from '../../asset/data.json';
import { addResult } from "../../slices/resultSlice";
import search_algorithm from './search_algo';

const DetailSide = (props) => {
    const selectObj = props.selectCategory;
    const dispatch = useDispatch();
    const results = useSelector((state) => state.results);
    const options = data[selectObj.groupName][selectObj.selection];
    const [selectItem, setSelectItem] = useState(null);
    const [selectIndex, setSelectIndex] = useState(null);
    const [startTime, setStartTime] = useState(null);
    // const [selectItemArray, setSelectArray] = useState([]);

    const renderOptions = Object.keys(options).map((item, index) => {
        const option = options[item]
        return item !== 'description' && item !== 'url' && (
            <div
                className="optionItem"
                key={index}
                onClick={() => {
                    setSelectItem(item);
                    setSelectIndex(index);
                    expectHandler(item);
                }}
                style={{
                    border: selectIndex === index && '2px solid blue',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItem: 'center',
                    justifyContent: 'start',
                }}
            >
                <h4 style={{ textAlign: 'center', margin: 15, }}>{option.title}</h4>
                <img src={option.url} alt="option" className="optionImg" style={{ alignSelf: 'center' }} />
                <p className="optionDescription">{option.description}</p>
            </div>
        );
    });

    const expectHandler = (item) => {
        const expectObj = {
            group: selectObj.groupName,
            category: selectObj.selection,
            selection: item,
        };
        // console.log("now and all");
        console.log(results);
        search_algorithm(expectObj,results);

    }

    // const renderExpectItem = Object.keys(expectItem).map((item, index) => {
    //     const sample = expectItem[item];
    //     return (
    //         <div className="sampleItem" key={index}>{sample.url}</div>
    //     )
    // }

    useEffect(() => {
        setStartTime(new Date().getTime());
    }, [selectObj])

    return (
        <div className="mainContainer">
            <div className="headerContainer">
                <img src={data[selectObj.groupName].url} alt="Category" className="groupImage" />
                <div className="groupTextContainer">
                    <p className="groupText">{options.description}</p>
                </div>
            </div>
            <div className="mainTitleContainer">
                <h2 className="tileContainer">{data[selectObj.groupName].description}</h2>
                <img src={options.url} alt="selection" className="toolImage" />
            </div>
            <div className="optionSection">
                {renderOptions}
            </div>
            {/* <div className="mainTitleContainer">
                <h3 className="tileContainer">Does this group statisfy your expect ?</h3>
            </div>
            <div className="optionSection">
                {renderExpectItem}
            </div> */}
            {selectItem ?
                <button className="nextButton"
                    onClick={() => {
                        const endTime = new Date().getTime();
                        const diffTime = endTime - startTime;
                        const resultObj = {
                            group: selectObj.groupName,
                            category: selectObj.selection,
                            selection: selectItem,
                            time: diffTime,
                        }
                        dispatch(isChecked({ groupName: selectObj.groupName, selection: selectObj.selection }));
                        dispatch(addResult(resultObj));
                        props.onNextClick();
                        setSelectItem(null);
                        setSelectIndex(null);
                    }}
                >Yes, Next</button> :
                <button className="nextButton" disabled
                >Please annotate the hair style</button>
            }
        </div>
    )
}

export default DetailSide;