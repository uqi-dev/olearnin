const Sidebar = () => {
  return <div className="border-l-[1px] w-[200px] pl-4">
    <div className="sidenav pl-2">
      <h3 className="uppercase font-medium text-sm pl-1">FOUNDATIONS</h3>
      <ul>
        <li className="active">About Javascript</li>
        <li>From JS to React</li>
        <li>How ReatJs Works</li>
        <li>What about Virtual DOM?</li>
      </ul>
    </div>
    <div className="sidenav pl-2 my-3">
      <h3 className="uppercase font-medium text-sm pl-1">Search engine</h3>
      <ul>
        <li>About SEO</li>
        <li>How it Works</li>
        <li>On site SEO</li>
        <li>Cocept of Backlink</li>
      </ul>
    </div>
  </div>
}

export default Sidebar;