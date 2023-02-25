export default function FooterAdmin() {
  return (
    <>
      <footer className="block py-4">
        <div className="container mx-auto px-4">
          <hr className="mb-4 border-b-1 border-slate-200" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                <li>
                  <a className="text-slate-600 hover:text-slate-800 text-sm font-semibold block py-1 px-3"></a>
                </li>
                <li>
                  <a className="text-slate-600 hover:text-slate-800 text-sm font-semibold block py-1 px-3">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="text-slate-600 hover:text-slate-800 text-sm font-semibold block py-1 px-3">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="text-slate-600 hover:text-slate-800 text-sm font-semibold block py-1 px-3">
                    MIT License
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
