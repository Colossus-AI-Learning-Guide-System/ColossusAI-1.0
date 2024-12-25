// import { Paperclip, FolderPlus, CircleUserRound, CircleHelp} from "lucide-react"

// import { Sidebar, 
//         SidebarContent,
//         SidebarGroup,
//         SidebarGroupContent,
//         SidebarGroupLabel,
//         SidebarMenu,
//         SidebarMenuButton,
//         SidebarMenuItem, 

// } from "@/components/ui/sidebar"


// // Menu items.

// const items = [
//     {
//         title: "Add Project",
//         url: "#",
//         icon: FolderPlus
//     },
//     {
//         title: "Attatch File",
//         url: "#",
//         icon: Paperclip
//     },
//     {
//         title: "Profile",
//         url: "#",
//         icon: CircleUserRound
//     },
//     {
//         title: "FAQ",
//         url: "#",
//         icon: CircleHelp

//     }
// ]

// export function AppSidebar() {
//     return (
//         <Sidebar>
//             <SidebarContent>
//                 <SidebarGroup>
//                     <SidebarGroupLabel>Find</SidebarGroupLabel>
//                         <SidebarGroupContent>
//                             <SidebarMenu>
//                                 {items.map((item) => (
//                                     <SidebarMenuItem key = {item.title}>
//                                         <SidebarMenuButton asChild>
//                                             <a href={item.url}>
//                                                 <item.icon/>
//                                                 <span>{item.title}</span>
//                                             </a>
//                                         </SidebarMenuButton>
//                                     </SidebarMenuItem>
//                                 ))}
//                             </SidebarMenu>
//                         </SidebarGroupContent>
//                 </SidebarGroup>
//             </SidebarContent>
//         </Sidebar>
//     )
// }

import { Paperclip, FolderPlus, CircleUserRound, CircleHelp, Home } from 'lucide-react';
import Link from 'next/link';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home
  },
  {
    title: "Add Project",
    url: "#",
    icon: FolderPlus
  },
  {
    title: "Attach File",
    url: "/chatbot/interface",
    icon: Paperclip
  },
  {
    title: "Profile",
    url: "#",
    icon: CircleUserRound
  },
  {
    title: "FAQ",
    url: "#",
    icon: CircleHelp
  }
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

