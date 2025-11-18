import React from 'react'
import { SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";
const Header = () => {
  return (
    <div claeeName = "fixed top=0">
      <SignedOut>
        <SignInButton/>
    </SignedOut>
    <SignedIn>
        <UserButton/>
    </SignedIn>
            </div>
  )
}
export default Header
