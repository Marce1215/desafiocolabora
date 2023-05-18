const Nav = ({onSearchChange}) => {
    const handleSearchChange = (e) => {
       onSearchChange(e.target.value);
       console.log(e.target.value);
    }
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand text-white">Buscador de Colaboradores</a>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearchChange}/>
                        <button className="btn btn-outline-info" type="submit">Busca un colaborador</button>
                </form>
            </div>
        </nav>
    );
}

export default Nav;