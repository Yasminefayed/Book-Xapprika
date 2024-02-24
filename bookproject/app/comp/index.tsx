//This is my sidebar page with all the icons that needs to be displayed
import {
  LucideIcon,
  LayoutDashboard,
  BadgeDollarSign,
  CircleUserRound,
  Settings,
  WalletCards,
  HomeIcon,
  Bookmark,
  BellRing,
  Heart,
  Book,
  BarChart2,
} from "lucide-react";
import SidebarItem from "./item";

interface ISidebarItem {
  name: string;
  path: string;
  icon: LucideIcon;
  items?: ISubItem[];
}

interface ISubItem {
  name: string;
  path: string;
}

const items: ISidebarItem[] = [
  {
    name: "Home",
    path: "/",
    icon: HomeIcon,
  },
  {
    name: "New Release",
    path: "/newrelease",
    icon: Bookmark,
  },
  {
    name: "Top Rated",
    path: "/toprated",
    icon: BarChart2,
  },
  {
    name: "Coming Soon",
    path: "/comingsoon",
    icon: BellRing,
  },
  {
    name: "Favorites",
    path: "/favlist",
    icon: Heart,
  },
  {
    name: "Genre",
    path: "/genre",
    icon: Book,
    items: [
      {
        name: "Romantic",
        path: "/HomePage",
      },
      {
        name: "Horror",
        path: "/settings/security",
      },
      {
        name: "Documentary",
        path: "/settings/notifications",
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, height: '100vh', width: '240px', padding: '16px', backgroundImage: 'url(/download.jfif)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex flex-col space-y-10 w-full">
        <div className="flex flex-col space-y-2">
          {items.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
