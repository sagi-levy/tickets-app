import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
const Nav = () => {
  return (
    <nav className="flex justify-between p-4 bg-slate-500">
      <div className="flex place-items-center space-x-4">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} />
        </Link>
        <Link href="/TicketPage/new">
          <FontAwesomeIcon icon={faTicket} />
        </Link>
      </div>
      <div>
        <p className="text-default-text">loremipsum@gmail.com</p>
      </div>
    </nav>
  );
};

export default Nav;
