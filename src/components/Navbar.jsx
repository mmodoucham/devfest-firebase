const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-gray-900  text-gray-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">RoadToDevFest</a>
        </div>
        <div className="flex-none">
          <img className="w-10 rounded-full" src="https://i.pravatar.cc/300" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
