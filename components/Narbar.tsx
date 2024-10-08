import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Input} from "@nextui-org/react";
export default function App() {
  return (
    <Navbar position="static" isBordered className="mb-4">
      <NavbarContent className="justify-center">
        <NavbarItem className="lg:flex">
        <p><Link href="/">Simple Listing App</Link></p>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}