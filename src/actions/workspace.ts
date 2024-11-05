"use server";

import { currentUser } from "@clerk/nextjs/server";
import { client } from "@/lib/prisma";

export const verifyAccess = async (workspaceId: string) => {
  try {
    const user = await currentUser();
    if (!user) return { status: 403, message: "Unauthorized" };

    const isUserInWorkspace = await client.workSpace.findUnique({
      where: {
        id: workspaceId,
        OR: [
          {
            User: {
              clerkid: user.id,
            },
          },
          {
            members: {
              every: {
                User: {
                  clerkid: user.id,
                },
              },
            },
          },
        ],
      },
    });
    return {
        status: 200,
        message: "Success",
        data:{workspace:isUserInWorkspace}
    }
  } catch (error) {
    return {
    status:403,
     data: { workspace: null }
     
  }}
};
