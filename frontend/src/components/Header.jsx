import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";

const Header = () => {
  return (
    <header className="w-[100vw] flex flex-col items-center">
      <div className="w-[1200px] h-20 flex justify-between items-center">
        <Link to="/">
          <h1>Grozny</h1>
        </Link>
        <div className="flex justify-between items-center gap-6">
          <NavLink to="/" activeClassName="active">
            Главная
          </NavLink>
          <NavLink to="/discussion" activeClassName="active">
            Обсуждение
          </NavLink>
          <NavLink to="/news" activeClassName="active">
            Новости
          </NavLink>
          <NavLink to="/forum" activeClassName="active">
            Форум
          </NavLink>
        </div>

        <Link to="/user">
          <AiOutlineUser className="text-2xl cursor-pointer" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
