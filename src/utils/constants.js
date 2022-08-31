import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SchoolIcon from '@mui/icons-material/School';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

import logoImg from "../images/logoImg.png";
import ThumbnailUrl from "../images/ThumbnailUrl.jpg";
import ProfilePicture from "../images/ProfilePicture.png";



// export const logo = 'https://i.ibb.co/s9Qys2j/logo.png';
export const logo = logoImg;

export const categories = [
  { name: 'New', icon: <HomeIcon />, },
  { name: 'Geeks For Geeks', icon: <CodeIcon />, },
  { name: 'Coding', icon: <CodeIcon />, },
  { name: 'ReactJS', icon: <CodeIcon />, },
  { name: 'NextJS', icon: <CodeIcon />, },
  { name: 'Java', icon: <CodeIcon />, },
  { name: 'Music', icon: <MusicNoteIcon /> },
  { name: 'Education', icon: <SchoolIcon />, },
  { name: 'Podcast', icon: <GraphicEqIcon />, },
  { name: 'Movie', icon: <OndemandVideoIcon />, },
  { name: 'Gaming', icon: <SportsEsportsIcon />, },
  { name: 'Live', icon: <LiveTvIcon />, },
  { name: 'Sport', icon: <FitnessCenterIcon />, },
  { name: 'Gym', icon: <FitnessCenterIcon />, },
  { name: 'Crypto', icon: <DeveloperModeIcon />, },
];

export const demoThumbnailUrl = ThumbnailUrl;
export const demoChannelUrl = '/channel/UC0RhatS1pyxInC00YKjjBqQ';
export const demoVideoUrl = '/video/m7mnwQKgpzw';
export const demoChannelTitle = 'No Channel Title';
export const demoVideoTitle = 'No Video Title';
export const demoProfilePicture = ProfilePicture;