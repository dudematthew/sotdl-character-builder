import { AppSidebar } from "@/components/layout/Sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "@tanstack/react-router";

const AppLayout = () => {
    return (
        <SidebarProvider>
            <div className="flex min-h-screen">
                <AppSidebar />
                <main className="flex-1 bg-background overflow-y-auto">
                    <div className="mx-auto px-4 py-6 container">
                        <SidebarTrigger className="md:hidden flex items-center hover:bg-accent mb-4 p-2 border border-border rounded-md">
                            <span className="sr-only">Toggle Sidebar</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                                <line x1="3" x2="21" y1="6" y2="6" />
                                <line x1="3" x2="21" y1="12" y2="12" />
                                <line x1="3" x2="21" y1="18" y2="18" />
                            </svg>
                        </SidebarTrigger>
                        <Outlet />
                    </div>
                </main>
            </div>
        </SidebarProvider>
    );
};

export default AppLayout;