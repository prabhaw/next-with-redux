import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import style from "./SearchInput.module.scss";

const languages = [
  {
    name: "Prabhaw",
    year: 1972,
  },
  {
    name: "Prabenn",
    year: 2012,
  },
  {
    name: "Prabhaw",
    year: 1972,
  },
  {
    name: "Prabenn",
    year: 2012,
  },
  {
    name: "Prabeen",
    year: 2012,
  },
  {
    name: "Prabhaw",
    year: 1972,
  },
  {
    name: "Prabenn",
    year: 2012,
  },
  {
    name: "Prabeen",
    year: 2012,
  },
  {
    name: "Prabhaw",
    year: 1972,
  },
  {
    name: "Prabenn",
    year: 2012,
  },
  {
    name: "Prabeen",
    year: 2012,
  },
  {
    name: "Prabeen",
    year: 2012,
  },
  {
    name: "Pawan",
    year: 2012,
  },
  {
    name: "Rahul",
    year: 2012,
  },
  {
    name: "Shive",
    year: 2012,
  },
  {
    name: "Body",
    year: 2012,
  },
];

const AutoComplete = (props) => {
  // const { autoShow, search_open, search_close, getData, data } = props;
  const [filteredOptions, setFillteredOption] = useState([]);
  const [autoShow, setautoShow] = useState(false);
  const [userInput, setUserInput] = useState("");
  // AutoComplete.handleClickOutside = () => search_close();
  const onChange = (e) => {
    const userInputs = e.currentTarget.value;
    setUserInput(userInputs);
    if (userInputs) {
      const filteredOption = languages.filter(
        (optionname) =>
          optionname.name
            .toLowerCase()
            .indexOf(e.currentTarget.value.toLowerCase()) > -1
      );
      let searchDate = [];
      filteredOption.forEach((item) => {
        if (searchDate.indexOf(item.name) === -1) {
          searchDate.push(item.name);
        }
      });

      setFillteredOption(searchDate.slice(0, 10));
      // search_open();
    }
  };
  const optionboxClick = () => {
    // search_open();
  };
  const onClick = (e) => {
    setFillteredOption([]);
    // search_close();
    setUserInput(e.currentTarget.innerText);
  };
  let optionList;

  if (autoShow && userInput) {
    if (filteredOptions.length) {
      optionList = (
        <ul
          className={style.option}
          style={{ listStyle: "none", padding: "10px 20px " }}
        >
          {filteredOptions.map((optionName, i) => {
            return (
              <li
                className={style.optionlist}
                key={optionName}
                onClick={onClick}
              >
                {optionName}
              </li>
            );
          })}
        </ul>
      );
    }
  }
  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className='search'>
        <form onSubmit={onSubmit}>
          <input
            type='text'
            className='searchterm'
            placeholder='Enter What You Want to Search'
            onChange={onChange}
            value={userInput}
            onFocus={onChange}
          />
          <button type='submit' className='searchbtn'>
            <FaSearch />
          </button>
          <div className='clear'></div>
        </form>
        {filteredOptions.length ? (
          <div className='option-container'>{optionList}</div>
        ) : null}
      </div>

      <style jsx>{`
      .option-container{
          background:#eeee;
          margin-right: -50px;
          position: absolute;
          width: 50%;
          
        
      }
      
      .serach{
        width: 100%;
        position:relative;
       
        
      }
      
      .searchterm{
          
          width 50%;
          border: 2px solid #00B4CC;
          height: 50px;
          padding: 11px;
          position: absolute;
         
          
      }
      .searchterm :focus{
        outline: none;
      }
      .searchbtn{
          margin-right: -11%;
          float:right;
          width: 50px;
          height: 50px !important;
          border: 1px solid #00B4CC;
          background: #00B4CC;
          text-align: center;
          color : #ffff;
          cursor: pointer;
          font-size : 20px;
          padding-left:12px;
          position: relative;
          
      }
      .clear{
        clear: both;
      }
      `}</style>
    </>
  );
};

// const clickOutsideConfig = {
//   handleClickOutside: () => AutoComplete.handleClickOutside,
// };
// const getStateToProps = (state) => ({
//   autoShow: state.searchauto.search_auto,
// });
// const getDispathchToProps = { search_open, search_close };

export default AutoComplete;
