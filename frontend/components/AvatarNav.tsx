import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User} from "@nextui-org/react";

export default function AvatarNav() {
  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-start">
        <DropdownTrigger>
          <User
            as="button"
            avatarProps={{
              isBordered: true,
              src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            }}
            className="transition-transform"
            description="@tonyreichert"
            name=""
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
          <DropdownItem key="reviews" className="h-14 gap-2">
            <p className="font-bold">Signed in as</p>
            <p className="font-bold">@tonyreichert</p>
          </DropdownItem>
          <DropdownItem key="reviews">
            My Settings
          </DropdownItem>
          <DropdownItem key="reviews">Team Settings</DropdownItem>
          <DropdownItem key="reviews">
            Analytics
          </DropdownItem>
          <DropdownItem key="reviews">System</DropdownItem>
          <DropdownItem key="reviews">Configurations</DropdownItem>
          <DropdownItem key="reviews">
            Help & Feedback
          </DropdownItem>
          <DropdownItem key="reviews" color="danger">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
