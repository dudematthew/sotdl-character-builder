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
  Library,
  MessageCircleQuestion,
  ExternalLink
} from "lucide-react";
import { DiscordIcon } from "@/components/icons/DiscordIcon";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

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
              Character Creator
            </h2>
            <p className="text-muted-foreground text-xs">
            <a href="https://schwalbentertainment.com/shadow-of-the-demon-lord/" target="_blank" rel="noreferer noopener">
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
      <SidebarFooter className="space-y-3 p-4">
        <div className="flex justify-between items-center pb-2">
          <span className="text-muted-foreground text-xs">Theme</span>
          <ModeToggle size="sm" />
        </div>
        <Separator className="my-1" />
        
        <Dialog>
          <DialogTrigger asChild>
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-2 w-full text-xs"
            >
              <MessageCircleQuestion className="w-3.5 h-3.5" />
              <span>Feedback</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Feedback & Support</DialogTitle>
              <DialogDescription>
                Have suggestions, need help or found a bug? Let's talk!
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <p className="text-sm">
                If you have any feedback, you can either open an issue on GitHub or contact me directly on Discord.
              </p>
              <div className="flex sm:flex-row flex-col gap-3">
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2" 
                  asChild
                >
                  <a 
                    href="https://github.com/dudematthew/sotdl-character-builder/issues/new" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" />
                    <span>Open GitHub Issue</span>
                  </a>
                </Button>
                <Button 
                  className="flex items-center gap-2" 
                  asChild
                >
                  <a 
                    href="https://discord.gg/wUG7NY5hcb" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <DiscordIcon className="w-4 h-4" />
                    <span>Join Discord Server</span>
                  </a>
                </Button>
              </div>
              <div className="bg-muted mt-2 p-3 rounded-md">
                <p className="text-xs">
                  Find <span className="font-medium">@hipstersavage</span> on the Schwalb Entertainment Discord server for direct contact.
                </p>
              </div>
            </div>
            <DialogFooter className="sm:flex-row flex-col gap-2">
              <Button variant="outline" className="w-full sm:w-auto" asChild>
                <DialogClose>Close</DialogClose>
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        
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
