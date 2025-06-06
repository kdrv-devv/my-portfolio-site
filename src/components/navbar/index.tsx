import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

// Bottom navigation
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CodeIcon from "@mui/icons-material/Code";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";

type NavbarProps = {
  scrollToSkills: () => void;
  scrollToAbout: () => void;
  scrollToProjects: () => void;
  scrollToShowcase:()=>void
};

const Navbar: React.FC<NavbarProps> = ({
  scrollToSkills,
  scrollToAbout,
  scrollToProjects,
  scrollToShowcase

}) => {
  return (
    <header className=" header sticky top-0 z-[99] shadow-[0px_4px_10px_rgba(0,0,0,0.2)]">
      <div className="container  gap-[10px] flex items-center justify-between py-[10px] text-[10px] max-[1027px]:text-[8px]  max-[826px]:text-[7px] max-[800px]:py-[20px] max-[558px]:text-[6px] max-[508px]:text-[5px]  max-[317px]:text-[4.6px]">
        <Link to={"/"}>
          <h1 className="text-[5em] inline-block   max-[376px]:text-[4em] font-[700] text-[#f2f2f2] relative">
            KADIROV<span className="text-[#f7e018]">JS</span>
          </h1>

        </Link>

        <nav className="header-center max-[740px]:hidden flex items-center gap-[2em] text-[2em] font-[700] text-[#fff] ">
          <button aria-label="About button" onClick={scrollToAbout} className="nav-hover ">
            About
          </button>

          <button aria-label="Skills button" onClick={scrollToSkills} className="nav-hover ">
            Skills
          </button>
          <button aria-label="Projects button" onClick={scrollToProjects} className="nav-hover ">
            Projects
          </button>
        </nav>

        <nav className="header-right flex  items-center gap-[2em] ">
          <button aria-label="Linkedin button" className="nav-hover  flex items-center gap-[0.5em] justify-center text-[#fff] bg-transparent text-[2em] font-[700]">
            <BsLinkedin className="text-[1.5em]" />
            Linkedin
          </button>
          <a href="https://github.com/kdrv-devv" target="_blank">
            {" "}
            <button aria-label="Github link button" className="nav-hover  flex items-center gap-[0.5em] justify-center text-[#fff] bg-transparent text-[2em] font-[700]">
              <FaGithub className="text-[1.5em]" />
              Github
            </button>
          </a>
        </nav>
      </div>

      {/*  Bottom navigation*/}
      <BottomNavigation
        showLabels
        className="!hidden max-[740px]:!flex fixed bottom-0 orbitron w-full  !bg-[#414141] !text-white"
      >
        <BottomNavigationAction
          label="Home"
          aria-label="home button"
          onClick={scrollToShowcase}
          icon={<HomeIcon/>}
          className="!orbitron"
          sx={{
            fontFamily: "Orbitron, sans-serif",
            color: "white", // Default icon & text rangi
            "&.Mui-selected": { color: "#2196F3" }, // Bosilganda ko‘k bo‘ladi
          }}
        />
        <BottomNavigationAction
          label="About"
          aria-label="about button"
          onClick={scrollToAbout}
          icon={<InfoIcon />}
          sx={{
            color: "white",
            "&.Mui-selected": { color: "#2196F3" },
          }}
        />
        <BottomNavigationAction
          label="Skills"
          aria-label="Skills button"
          onClick={scrollToSkills}
          icon={<CodeIcon />}
          sx={{
            color: "white",
            "&.Mui-selected": { color: "#2196F3" },
          }}
        />

        <BottomNavigationAction
          label="Projects"
          aria-label="projects button"
          onClick={scrollToProjects}
          icon={<FolderCopyIcon />}
          sx={{
            color: "white",
            "&.Mui-selected": { color: "#2196F3" },
          }}
        />
      </BottomNavigation>
    </header>
  );
};

export default Navbar;
