import React from "react";
import { onAuthenticateUser } from "@/actions/user";
import { redirect } from "next/navigation";

type Props = {
  params: { workspaceId: string };
  children: React.ReactNode;
};

const Layout = async ({ params: { workspaceId }, children }: Props) => {
    const auth  = await onAuthenticateUser()
    if(!auth.user?.workspace) redirect('/auth/sign-in');
    if(!auth.user?.workspace.length) redirect('/auth/sign-in');

    const hasAccess = await verifyAc

  return <div>Layout</div>;
};

export default Layout;
