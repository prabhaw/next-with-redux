import AutoComplete from "./Autocomplete.component";
import { Flex } from "@chakra-ui/core";
const NavbarTop = (props) => {
  return (
    <>
      <div className='navbar'>
        <div className='search-box'>
          <AutoComplete />
        </div>
      </div>
      <div className='clear'></div>
      <style jsx>{`
        .navbar {
          padding: 0 5% 0 5%;
        }
        .search-box {
          width: 50%;
        }
        .clear {
          clear: both;
        }
      `}</style>
    </>
  );
};

export default NavbarTop;
