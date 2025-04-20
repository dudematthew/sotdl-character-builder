import { Link } from "@tanstack/react-router";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem, 
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { 
  Home, 
  Users, 
  FolderTree, 
  FileOutput, 
  Github,
  LucideIcon,
  UserPen,
  Library
} from "lucide-react";

// Version from package.json
import { version } from "../../../package.json";

// Navigation items
type NavItem = {
  path: string;
  label: string;
  icon: LucideIcon;
};

const navItems: NavItem[] = [
  {
    path: "/",
    label: "Home",
    icon: Home
  },
  {
    path: "/character-creation",
    label: "Character Creation",
    icon: Users
  },
  {
    path: "/content-manager",
    label: "Paths & Ancestries",
    icon: FolderTree
  },
  {
    path: "/characters",
    label: "Characters Library",
    icon: Library
  },
  {
    path: "/import-export",
    label: "Import/Export",
    icon: FileOutput
  }
];

export function AppSidebar() {
  return (
    <Sidebar className="bg-card border-r">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <UserPen className="w-6 h-6 text-primary" />
          <div>
            <h2 className="font-semibold text-lg tracking-tight">
              SotDL Character Creator
            </h2>
            <p className="text-muted-foreground text-xs">
            <a href="https://schwalbentertainment.com/shadow-of-the-demon-lord/">
              For Shadow of the Demon Lord
            </a>
            </p>
          </div>
        </div>
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-4 py-2">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton asChild>
                    <Link 
                      to={item.path} 
                      className="flex items-center gap-2 data-[active=true]:bg-accent hover:bg-accent focus:bg-accent px-4 py-2 rounded-md data-[active=true]:text-accent-foreground hover:text-accent-foreground"
                      activeProps={{
                        className: "bg-accent text-accent-foreground"
                      }}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <div className="flex justify-between items-center">
          <a
            href="https://github.com/dudematthew/sotdl-character-builder"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-muted-foreground hover:text-foreground text-xs"
          >
            <Github className="w-3 h-3" />
            <span>Github</span>
          </a>
          <span className="text-muted-foreground text-xs">v{version}</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
