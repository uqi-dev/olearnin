import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface SubMenu {
  subMenu: string;
  path: string;
}

interface MainMenu {
  [key: string]: SubMenu[];
}

const Sidebar: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MainMenu>({});
  const [activeSubMenu, setActiveSubMenu] = useState<SubMenu | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Fetch data from the GitHub API and process it as before
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/repos/soykot2910/Test-Tutorial-For-Olearnin/git/trees/main?recursive=1"
      );
      const data = await response.json();

      // Filter and format data to get the desired tree structure
      const treeData = data.tree.filter((item: any) => item.type === "blob");

      const menuItemsData: MainMenu = {};

      treeData.forEach((item: any) => {
        const pathParts = item.path.split("/");
        const mainMenu = pathParts[2];
        const subMenu = pathParts.slice(3).join("/").split(".md")[0];
        const formattedSubMenu = subMenu.toLowerCase().replace(/\s+/g, "-");
        const menuItem: SubMenu = {
          subMenu: formattedSubMenu,
          path: item.path.replace(".md", ""),
        };

        if (menuItemsData[mainMenu]) {
          menuItemsData[mainMenu].push(menuItem);
        } else {
          menuItemsData[mainMenu] = [menuItem];
        }
      });

      setMenuItems(menuItemsData);

      // Set the first submenu as activeSubMenu by default
      if (Object.keys(menuItemsData).length > 0) {
        const firstSubMenu = menuItemsData[Object.keys(menuItemsData)[0]][0];
        setActiveSubMenu(firstSubMenu);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubMenuClick = (subMenu: SubMenu) => {
    setActiveSubMenu(subMenu);
    router.push(`/${subMenu.path}`);
  };

  return (
    <div className="border-l-[1px] w-[200px] pl-4">
      <div className="sidenav pl-2">
        {Object.entries(menuItems).map(([mainMenu, subMenus], index) => (
          <React.Fragment key={index}>
            <h3 className="uppercase font-medium text-sm pl-1">{mainMenu}</h3>
            <ul>
              {subMenus.map((subMenu, subIndex) => (
                <li
                  key={subIndex}
                  className={subMenu === activeSubMenu ? "active" : ""}
                  onClick={() => handleSubMenuClick(subMenu)}
                >
                  {subMenu.subMenu}
                </li>
              ))}
            </ul>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
