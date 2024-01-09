import {ReactComponent as Logo} from '../../svg/logo-with-name.svg'
import '../../styles/homeBar.scss'
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as Menu } from '../../svg/menu.svg';
import { ReactComponent as Cross } from '../../svg/cross.svg';
import { ReactComponent as Linkedin } from '../../svg/linkedin.svg';
import { ReactComponent as Twitter } from '../../svg/twitter.svg';
import { clearLocalData } from '../../functions/utility';

const HomeBar = () => {
  
  const [click, setClick] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(()=>{
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if(screenWidth >= 480){
        setClick(false)
      }
    }
    window.addEventListener('resize', handleResize)

    clearLocalData()

  },[])

  
  
  return (
    <div className='homeBar_barContainer'>
    <div className="homeBar_container">
      <div className="homeBar_logoContainer">
        <Logo 
          width='100%' 
          height='100%'
          onClick={()=>navigate('/')}/>
      </div>
      <div className='homeBar_actionContainer'>
      <div className="homeBar_socialsContainer">
        <div
            className='homeBar_menuIconTop'
            onClick={()=>window.location.href = "https://twitter.com/blockarch_?s=11&t=sMO7Csa0LziSjQLf0Vw4mg" + setClick(false)}>
            <Twitter width='100%' height='100%'/>
          </div>
        <div
            className='homeBar_menuIconTop'
            onClick={()=>window.location.href = "https://www.linkedin.com/company/blockarchio/" + setClick(false)}>
            <Linkedin width='100%' height='100%' fill='#0e76a8'/>
          </div>
        </div>
        <div className='homeBar_linksContainer'>
          <p 
            className='homeBar_link' 
            onClick={()=>navigate("/about")}
            style={{
              background: pathname === '/about' ? '#dfdfdf' : 'none'}}>
              About
          </p>
          <p
            className='homeBar_link'
            onClick={()=>navigate("/blog")}
            style={{
              background: pathname === '/blog' ? '#dfdfdf' : 'none'}}>
              Blog
          </p>
        </div>
        <button className='homeBar_tryNow' onClick={()=> navigate("/apps/questions")}>Try It!</button>
        <div className='homeBar_menuIconContainer' onClick={()=>setClick(!click)}>
          {!click ? 
            <Menu width='100%' height='100%'/> :
            <Cross width='100%' height='100%'/>
          }
        </div>
      </div>
    </div>
          {click ? 
        <div
          className='homeBar_menuContainer'>
          <p 
            className='homeBar_menuLink'
            onClick={()=>navigate("/about") + setClick(false)}>
            About
          </p>
          <p 
            className='homeBar_menuLink'
            onClick={()=>navigate("/blog") + setClick(false)}>
            Blog
          </p>
          <div 
            className='homeBar_menuIcon'
            onClick={()=> window.location.href = "https://twitter.com/blockarch_?s=11&t=sMO7Csa0LziSjQLf0Vw4mg" + setClick(false)}>
            <Twitter width='100%' height='100%'/>
          </div>
          <div
            className='homeBar_menuIcon'
            onClick={()=>window.location.href = "https://www.linkedin.com/company/blockarchio/" + setClick(false)}>
            <Linkedin width='100%' height='100%' fill='#0e76a8'/>
          </div>
        </div>
          : null}
          </div>
    // <AppBar 
    //   position="static"
    //   sx={appBarSX}
    // >
    //   <Toolbar sx={{
    //       display: 'flex',         
    //       justifyContent: 'space-between',
    //       alignItems: 'center', 
    //       padding: 
    //       isSmallScreen ? "0 0 0 20px" :
    //       isMediumScreen ? '0 0 0 5px' : 
    //       '0'
    //     }}>
    //       <Logo 
    //         onClick={()=>navigate("/")}
    //         width={
    //           isSmallScreen ? '105px' : 
    //           isMediumScreen ? '120px' : 
    //           "150px"}
    //         height='100%' 
    //         style={{fill: '#FF06D7', cursor: 'pointer'}}
    //       />
    //     <Stack 
    //       direction='row'
    //       sx={{alignItems:"center"}}>
    //         {!isSmallScreen ?
    //           <Stack
    //           direction='row'
    //           sx={{
    //             alignItems: "center",
    //             margin: "0 1rem"
    //           }}
    //         >
    //           <Button 
    //             onClick={()=>navigate("/about")}
    //             variant= {about ? "contained" : "outlined"}
    //             // disableElevation
    //             sx={{...buttonSX,
    //               backgroundColor: about ? "primary.light" : "",
    //               color: about ? "common.highlight" : "common.offBlack"
    //             }}
    //           >About</Button>
    //           <Button 
    //             onClick={()=>navigate("/blog")}
    //             variant= {blog ? "contained" : "outlined"}
    //             // disableElevation
    //             sx={{...buttonSX,
    //               backgroundColor: blog ? "primary.light" : "",
    //               color: blog ? "common.highlight" : "common.offBlack"
    //             }}
    //           >Blog</Button>
    //         </Stack>
    //         :null
    //       }
    //       <Button 
    //       variant="outlined"
    //       sx={{
    //         color: "common.offWhite",
    //         backgroundColor: "primary.light",
    //         padding: "0 8px",
    //         height: 
    //         isSmallScreen ? "34px" :
    //         isMediumScreen ? "40px" :
    //         "45px",
    //         fontSize: 
    //         isSmallScreen ? "0.8rem" :
    //         isMediumScreen ? "0.9rem" :
    //         "1rem"
    //       }}
    //       >
    //         Try It Now!
    //       </Button>
    //       {isSmallScreen ? 
    //       <>
    //         <IconButton
    //             size="large"
    //             edge="start"
    //             color="inherit"
    //             aria-label="menu"
    //             sx={{padding: "0 20px"}}
    //             onClick={handleMenuClick}
    //           >
    //             <MenuIcon 
    //               sx={{
    //                 width: "25px", 
    //                 height: "25px",
    //                 margin: "0 0 0 5px"
    //               }}/>
    //           </IconButton>
    //           <Menu
    //             anchorEl={anchorEl}
    //             open={Boolean(anchorEl)}
    //             onClose={handleMenuClose}
    //             PaperProps={{
    //               sx: {
    //                 backgroundColor: 'common.lightGray',
    //                 marginTop: '5px',
    //               },
    //             }}
    //           >
    //             <MenuItem 
    //               onClick={handleMenuClose}
    //             >
    //               <Typography
    //                 onClick={()=>navigate("/about")} 
    //                 variant="h6"
    //                 component='h2'
    //                 align='center'
    //               >
    //                 About
    //               </Typography>
    //             </MenuItem>
    //             <MenuItem 
    //               onClick={handleMenuClose}
    //             >
    //               <Typography 
    //                 onClick={()=>navigate("/blog")}
    //                 variant="h6"
    //                 component='h2'
    //                 align='center'
    //               >
    //                 Blog
    //               </Typography>
    //             </MenuItem>
    //           </Menu>
    //           </>
    //      : null}
    //     </Stack>
    //   </Toolbar>
    // </AppBar>
  )
}

export default HomeBar