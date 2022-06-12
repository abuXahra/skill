import React from 'react'

function Header() {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 py-4">
                        <h1>Skill</h1>
                        <p>...your gateway out of poverty</p>
                    </div>
                    {/* <div className="col-md-8 pt-5">
                        <form class="d-flex float-end">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div> */}
                </div>
            </div>

        </section>
    )
}

export default Header
