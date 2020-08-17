import { Box, Text } from "@chakra-ui/core";

const TopBanner = (props) => {
  return (
    <>
      <div className='topbanner'>
        <Box fontSize='sm' pt='3px' textAlign='right'>
          <span className='topbar-text'>miles per hour</span>
          <span className='topbar-text'>miles per hour</span>
          <span className='topbar-text'>about</span>
        </Box>
      </div>

      <style jsx>{`
        .topbanner {
          height: 26px;
          background: #ececec;
          padding: 0 5% 0 5%;
        }
      `}</style>
    </>
  );
};

export default TopBanner;
